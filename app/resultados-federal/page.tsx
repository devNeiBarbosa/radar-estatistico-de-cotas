import { CalendarDays, ClipboardList } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const columns = ['Concurso', 'Data', '1º prêmio', '2º prêmio', '3º prêmio', '4º prêmio', '5º prêmio', 'Fonte'];

export default function ResultadosFederalPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Resultados da Federal"
        title="Base visual para consulta futura dos concursos"
        description="Estrutura reservada para futura listagem de resultados oficiais, mantendo rastreabilidade de fonte e data de cada concurso."
      />

      <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
        <div className="flex items-center gap-3">
          <ClipboardList className="text-[#FF5E57]" />
          <h2 className="text-xl font-semibold text-white">Tabela de concursos</h2>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="bg-white/[0.05] text-[#CFCFCF]">
              <tr>{columns.map((column) => <th key={column} className="px-4 py-3 font-semibold">{column}</th>)}</tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={columns.length} className="px-4 py-12 text-center text-[#9CA3AF]">
                  Nenhum resultado importado nesta fase. A estrutura está preparada para dados reais em etapa posterior.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
          <CalendarDays className="text-[#FF5E57]" />
          <h3 className="mt-4 font-semibold text-white">Rastreabilidade</h3>
          <p className="mt-2 text-sm leading-6 text-[#CFCFCF]">Cada concurso deverá manter data, prêmios e URL de origem para auditoria consultiva.</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
          <h3 className="font-semibold text-white">Próxima evolução prevista</h3>
          <p className="mt-2 text-sm leading-6 text-[#CFCFCF]">Importação e normalização de resultados não fazem parte desta Fase 1.</p>
        </div>
      </section>
    </div>
  );
}
