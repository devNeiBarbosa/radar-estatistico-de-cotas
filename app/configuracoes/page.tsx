import { Database, SlidersHorizontal } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Configurações"
        title="Parâmetros técnicos e preferências futuras"
        description="Área preparada para orientar conexão Neon, parâmetros de análise e preferências operacionais em fases posteriores."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
          <Database className="text-[#FF5E57]" />
          <h2 className="mt-4 text-xl font-semibold text-white">Conexão Neon</h2>
          <p className="mt-3 text-sm leading-6 text-[#CFCFCF]">Configure a variável DATABASE_URL localmente com a string de conexão PostgreSQL do Neon.</p>
          <code className="mt-4 block rounded-2xl bg-black/35 p-4 text-xs text-[#CFCFCF]">DATABASE_URL=&quot;postgresql://...&quot;</code>
        </section>
        <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
          <SlidersHorizontal className="text-[#FF5E57]" />
          <h2 className="mt-4 text-xl font-semibold text-white">Parâmetros futuros</h2>
          <p className="mt-3 text-sm leading-6 text-[#CFCFCF]">Períodos de análise, pesos de score e preferências visuais poderão ser configurados em próximas fases.</p>
        </section>
      </div>
    </div>
  );
}
