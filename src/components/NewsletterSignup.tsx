import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = 'idle' | 'loading' | 'success' | 'already' | 'invalid' | 'error';

/** Email capture card shown at the end of every report page. */
export function NewsletterSignup() {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus('invalid');
      return;
    }
    setStatus('loading');
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: trimmed, source: location.pathname });
      if (error) {
        // 23505 = unique violation → this email is already subscribed
        setStatus(error.code === '23505' ? 'already' : 'error');
        return;
      }
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success' || status === 'already') {
    return (
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-6 py-8 text-center">
          <CheckCircle2 className="mx-auto mb-3 text-emerald-400" size={28} />
          <p className="text-white font-semibold mb-1">
            {status === 'success' ? "You're on the list." : "You're already subscribed."}
          </p>
          <p className="text-sm text-slate-400">
            New Nexus One research will land in your inbox as soon as it publishes.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 pb-16">
      <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-900/20 px-6 py-8 sm:px-10">
        <div className="flex items-center gap-3 mb-2">
          <Mail className="text-emerald-400" size={20} />
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Get Nexus One Research in your inbox
          </h3>
        </div>
        <p className="text-sm text-slate-400 mb-6">
          Weekly briefs, deep research, and quarterly reports — delivered when they publish. No spam, unsubscribe anytime.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="you@example.com"
            aria-label="Email address"
            className="flex-1 rounded-lg bg-black/40 border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold px-6 py-3 text-sm transition-colors"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
        {status === 'invalid' && (
          <p className="mt-3 text-sm text-red-400">Please enter a valid email address.</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-400">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </div>
    </section>
  );
}
