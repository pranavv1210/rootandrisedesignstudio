import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__headline"><span>RR / 2026</span><h2>Designing beyond<br /><em>structures.</em></h2><Link href="/contact" className="line-button line-button--light">Start a conversation <ArrowUpRight size={17} /></Link></div>

        <div className="site-footer__meta"><div><span>HQ</span><strong>Mumbai</strong></div><div><span>Workplace studio</span><strong>Bengaluru</strong></div><div><span>Navigate</span><nav>{['Work', 'Approach', 'Studio', 'Journal', 'Contact'].map((item) => <Link key={item} href={`/${item.toLowerCase()}`}>{item}</Link>)}</nav></div></div>

        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Root &amp; Rise Design Studio</span><span>People / Purpose / Possibility</span></div>
      </div>
    </footer>
  );
}
