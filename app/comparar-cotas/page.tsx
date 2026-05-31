import { GitCompareArrows } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export default function CompararCotasPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Comparar Cotas"
        title="Ambiente preparado para comparação estatística futura"
        description="Estrutura visual para comparar cotas por indicadores históricos, sem classificar qualquer cota como garantia de contemplação."
      />

      <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
        <div className="flex items-center gap-3">
          <GitCompareArrows className="text-[#FF5E57]" />
          <h2 className="text-xl font-semibold text-white">Comparador consultivo</h2>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {['Cota A', 'Cota B', 'Cota C'].map((item) => (
            <div key={item} className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-6">
              <p className="font-semibold text-white">{item}</p>
              <p className="mt-2 text-sm leading-6 text-[#9CA3AF]">Espaço reservado para score, frequência histórica e leitura de concentração.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
