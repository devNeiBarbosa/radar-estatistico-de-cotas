'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { navigationItems } from '@/lib/navigation';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const mobileNavigationItems = navigationItems.filter((item) => item.href !== '/');

  return (
    <div className="min-h-screen bg-[#170707] text-white">
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#170707]/90 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:hidden">
        <button
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition duration-200 hover:border-[#FF3B30]/60 hover:bg-[#FF3B30]/15"
        >
          <Menu size={22} />
        </button>
        <div className="text-right">
          <p className="text-sm font-semibold text-white">Radar Estatístico de Cotas</p>
          <p className="text-xs text-[#CFCFCF]">Plataforma consultiva</p>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" aria-modal="true" role="dialog">
          <button
            type="button"
            aria-label="Fechar menu de navegação"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 h-full w-full bg-[rgba(0,0,0,0.6)]"
          />
          <aside className="relative z-10 flex h-full w-[84%] max-w-sm flex-col border-r border-white/10 bg-[#120606] px-5 py-6 text-white shadow-[18px_0_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-4 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.92),rgba(90,29,29,0.34))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF5E57]">Radar</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Estatístico de Cotas</h2>
                <p className="mt-3 text-sm leading-6 text-[#CFCFCF]">Navegação consultiva da plataforma.</p>
              </div>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition duration-200 hover:border-[#FF3B30]/60 hover:bg-[#FF3B30]/15"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-8 space-y-2">
              {mobileNavigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border-l-4 border-transparent px-4 py-3 text-sm font-medium text-[#CFCFCF] transition duration-200 hover:border-[#FF3B30] hover:bg-[#FF3B30]/15 hover:text-white"
                  >
                    <Icon size={18} className="text-white/80" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      ) : null}

      <div className="flex min-h-screen lg:min-h-screen">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col bg-[radial-gradient(circle_at_top_right,rgba(255,59,48,0.10),transparent_30rem)]">
          <div className="hidden lg:block">
            <Header />
          </div>
          <main className="flex-1 px-5 py-6 md:px-8 md:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
