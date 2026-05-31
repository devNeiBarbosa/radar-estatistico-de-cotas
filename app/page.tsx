import Link from 'next/link';
import { ArrowRight, BarChart3, Database, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Plataforma consultiva"
        title="Radar Estatístico de Cotas para leitura histórica de frequência"
        description="Base estrutural da Fase 1 para organizar resultados da Loteria Federal, cotas de consórcio e indicadores estatísticos de apoio à decisão, sempre sem promessa ou garantia de contemplação."
      />

      <div className="grid gap-5 md:grid-cols-3">
        <StatCard title="Módulos estruturados" value="7" description="Páginas principais preparadas para evolução gradual nas próximas fases." icon={BarChart3} />
        <StatCard title="Banco preparado" value="Neon" description="Schema Prisma desenhado para PostgreSQL com histórico, cotas e análises." icon={Database} />
        <StatCard title="Uso correto" value="Consultivo" description="Linguagem profissional baseada em análise histórica de frequência." icon={ShieldCheck} />
      </div>

      <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
        <h2 className="text-xl font-semibold text-white">Comece pelo Dashboard</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#CFCFCF]">
          Esta base não importa resultados ainda e não executa análise real. Ela organiza a arquitetura visual, rotas, componentes e modelos de dados para teste local.
        </p>
        <Link href="/dashboard" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FF3B30] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#FF5E57]">
          Abrir Dashboard <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
