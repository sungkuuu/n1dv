import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode; fallback?: ReactNode };

type State = { hasError: boolean; message: string };

export class ReportErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ReportErrorBoundary:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-lg border border-red-500/40 bg-red-950/40 p-6 text-red-200">
            <p className="mb-2 font-semibold text-white">Report content could not be rendered.</p>
            <p className="text-sm opacity-90">{this.state.message}</p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
