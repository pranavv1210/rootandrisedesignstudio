const articles = [
  { number: "01", title: "Why offices should be designed for people, not desks.", tag: "Workplace thinking" },
  { number: "02", title: "The Monday Morning Test.", tag: "A design diagnostic" },
  { number: "03", title: "From B2C to B2B workplace design.", tag: "Studio note" },
  { number: "04", title: "What makes a workplace feel like your company.", tag: "Identity and space" },
];

export default function JournalPage() {
  return (
    <main className="pt-40 pb-32 px-6 md:px-12 bg-background">
      <div className="container mx-auto">
        <header className="pb-24">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">Journal / 04</span>
          <h1 className="font-display text-6xl md:text-8xl max-w-4xl mt-6">Thoughts from Root &amp; Rise.</h1>
          <p className="text-xl text-foreground/70 max-w-xl mt-8">Notes on people, purpose, and the spaces in between.</p>
        </header>
        <div className="border-t border-foreground/20">
          {articles.map((article) => (
            <article key={article.number} className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_auto] gap-6 md:gap-10 py-10 border-b border-foreground/20 items-start group">
              <span className="text-sm tracking-[0.2em] text-accent">{article.number}</span>
              <h2 className="font-display text-3xl md:text-5xl max-w-3xl group-hover:text-accent transition-colors">{article.title}</h2>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/50 md:pt-3">{article.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
