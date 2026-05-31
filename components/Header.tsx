import { ShieldCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#170707]/80 px-6 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-[#FF5E57]">Base Fase 1</p>
          <p className="text-sm text-[#CFCFCF]">Estrutura inicial para teste local com Next.js, Prisma e Neon.</p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur">
          <ShieldCheck size={16} className="text-[#FF3B30]" />
          Uso consultivo, sem garantia de contemplação
        </div>
      </div>
    </header>
  );
}
