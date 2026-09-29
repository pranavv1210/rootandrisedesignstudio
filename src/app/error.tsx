"use client";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="system-page"><span>RR / INTERRUPTED PATH</span><h1>The route needs<br />another look.</h1><p>The experience could not be loaded. Try the route again.</p><button className="line-button" onClick={reset}>Try again</button></main>;
}
