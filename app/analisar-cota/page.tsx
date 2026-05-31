import { Search } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export default function AnalisarCotaPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Analisar Cota"
        title="Estrutura para análise consultiva individual"
        description="Área preparada para avaliar futuramente uma cota com base em finais, faixas e distribuição histórica dos dados analisados."
      />

      <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
        <div className="grid gap-5 md:grid-cols-3">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-[#CFCFCF]">Número da cota</span>
            <input className="w-full rounded-2xl border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#FF3B30]" placeholder="Ex.: 1234" disabled />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-[#CFCFCF]">Grupo</span>
            <input className="w-full rounded-2xl border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#FF3B30]" placeholder="Ex.: G001" disabled />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-[#CFCFCF]">Período de análise</span>
            <select className="w-full rounded-2xl border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#FF3B30]" disabled>
              <option>Selecione futuramente</option>
            </select>
          </label>
        </div>
        <button className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-[#9CA3AF]" disabled>
          <Search size={16} /> Análise disponível em fase futura
        </button>
      </section>

      <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
        <h2 className="text-lg font-semibold text-white">O que será analisado futuramente</h2>
        <p className="mt-3 text-sm leading-6 text-[#CFCFCF]">
          A leitura poderá considerar finais de dois e três dígitos, faixas de centenas, distribuição por período, concentração e score consultivo. Nesta fase, não há lógica real de cálculo.
        </p>
      </section>
    </div>
  );
}
