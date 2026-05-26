/**
 * Loads insight markdown from /public/content/insights/.
 * Rejects SPA index.html fallbacks (common when dev server started before a new .md file existed).
 */
export async function fetchInsightMarkdown(path: string): Promise<string> {
  const res = await fetch(path, { cache: 'no-store' });
  const text = await res.text();
  const trimmed = text.trim();

  if (!res.ok) {
    throw new Error(`Failed to load report (${res.status})`);
  }

  if (
    trimmed.startsWith('<!') ||
    trimmed.toLowerCase().startsWith('<html') ||
    trimmed.includes('<!doctype html')
  ) {
    throw new Error(
      'Report file not found. Restart the dev server (npm run dev) after adding new content, then hard-refresh the page.'
    );
  }

  if (!trimmed) {
    throw new Error('Report content is empty.');
  }

  return text;
}
