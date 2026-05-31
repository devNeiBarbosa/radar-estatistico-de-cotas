import Link from 'next/link';
import { navigationItems } from '@/lib/navigation';

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-white/10 bg-[#120606] px-5 py-6 text-white shadow-[18px_0_60px_rgba(0,0,0,0.28)] lg:block">
      <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.86),rgba(90,29,29,0.28))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF5E57]">Radar</p>
        <h2 className="mt-2 text-xl font-semibold text-white">Estatístico de Cotas</h2>
        <p className="mt-3 text-sm leading-6 text-[#CFCFCF]">Ferramenta consultiva para leitura histórica de frequência aplicada à análise patrimonial.</p>
      </div>

      <nav className="mt-8 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl border-l-4 border-transparent px-4 py-3 text-sm font-medium text-[#CFCFCF] transition duration-200 hover:border-[#FF3B30] hover:bg-[#FF3B30]/15 hover:text-white"
            >
              <Icon size={18} className="text-white/80" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
