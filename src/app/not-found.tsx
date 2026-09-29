import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h2 className="font-display text-5xl md:text-7xl mb-6">404</h2>
      <p className="text-xl text-foreground/70 mb-8">This space doesn't exist yet.</p>
      <Link href="/" className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-medium tracking-wide uppercase hover:bg-terracotta transition-colors">
        Return Home
      </Link>
    </div>
  );
}
