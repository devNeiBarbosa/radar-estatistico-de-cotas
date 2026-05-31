import { Activity, BarChart3, Database, ShieldAlert } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Dashboard"
        title="Visão executiva da estrutura estatística"
        description="Área preparada para consolidar indicadores futuros de frequência, distribuição e concentração histórica dos números analisados."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Concursos importados" value="0" description="A importação será tratada em fase posterior. Nenhum dado real foi carregado nesta base." icon={Database} />
        <StatCard title="Cotas cadastradas" value="0" description="Espaço reservado para inventário consultivo de cotas disponíveis." icon={BarChart3} />
        <StatCard title="Análises geradas" value="0" description="Os indicadores serão calculados futuramente após integração com dados reais." icon={Activity} />
        <StatCard title="Risco de interpretação" value="Atenção" description="Toda leitura deve ser apresentada como apoio estatístico, sem promessa de contemplação." icon={ShieldAlert} />
      </div>

      <section className="rounded-[24px] border border-[#FF3B30]/25 bg-[#FF3B30]/10 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <h2 className="text-lg font-semibold">Aviso de uso consultivo</h2>
        <p className="mt-2 text-sm leading-6">
          O Radar Estatístico de Cotas utiliza análise histórica de frequência como indicador estatístico de apoio. A ferramenta não garante contemplação e não deve ser apresentada como previsão de resultado.
        </p>
      </section>
    </div>
  );
}
