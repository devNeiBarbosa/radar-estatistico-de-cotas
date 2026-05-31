import { ListChecks } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export default function CotasDisponiveisPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Cotas Disponíveis"
        title="Inventário futuro de cotas para análise consultiva"
        description="Área preparada para cadastro, organização e leitura das cotas que serão avaliadas por indicadores estatísticos de apoio."
      />

      <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5">
        <div className="flex items-center gap-3">
          <ListChecks className="text-[#FF5E57]" />
          <h2 className="text-xl font-semibold text-white">Listagem futura</h2>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
          <p className="font-semibold text-white">Nenhuma cota cadastrada nesta base.</p>
          <p className="mt-2 text-sm text-[#CFCFCF]">Cadastro e persistência real serão evoluídos em fases posteriores.</p>
        </div>
      </section>
    </div>
  );
}
