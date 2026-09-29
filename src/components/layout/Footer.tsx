import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-background pt-24 pb-12 border-t border-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-balance text-background">
              Designing beyond <span className="text-accent italic">structures.</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-2 text-lg border-b border-background/30 pb-1 hover:border-background transition-colors group"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-background/60">Locations</h4>
            <div className="space-y-6">
              <div>
                <p className="font-display text-xl mb-1">Mumbai</p>
                <p className="text-background/70 text-sm">Headquarters</p>
              </div>
              <div>
                <p className="font-display text-xl mb-1">Bengaluru</p>
                <p className="text-background/70 text-sm">Workplace Studio</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-background/60">Explore</h4>
            <ul className="space-y-4">
              {['Work', 'Approach', 'Studio', 'Journal', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-background/80 hover:text-terracotta transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} Root & Rise Design Studio. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Mumbai / Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
