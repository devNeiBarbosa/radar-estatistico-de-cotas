import { FileText, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export default function RelatoriosPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Relatórios"
        title="Central para relatórios consultivos futuros"
        description="Estrutura reservada para relatórios internos de leitura histórica, com linguagem patrimonial e cautela jurídica."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
          <FileText className="text-[#FF5E57]" />
          <h2 className="mt-4 text-xl font-semibold text-white">Relatório de frequência</h2>
          <p className="mt-3 text-sm leading-6 text-[#CFCFCF]">Espaço para síntese de regiões com maior frequência histórica nos dados analisados.</p>
        </section>
        <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
          <ShieldCheck className="text-[#FF5E57]" />
          <h2 className="mt-4 text-xl font-semibold text-white">Nota consultiva</h2>
          <p className="mt-3 text-sm leading-6 text-[#CFCFCF]">Todo relatório deverá reforçar que se trata de ferramenta consultiva sem garantia de contemplação.</p>
        </section>
      </div>
    </div>
  );
}
