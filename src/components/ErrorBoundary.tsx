import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Referral route error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback ?? (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
          <div className="max-w-md w-full rounded-lg border border-red-500/30 bg-red-950/20 p-6 text-red-400">
            <h2 className="text-lg font-bold mb-2">Something went wrong</h2>
            <p className="text-sm mb-4">{this.state.error.message}</p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded hover:bg-white/20"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
