interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-white/15">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF5E57]">{eyebrow}</span>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[#CFCFCF]">{description}</p>
    </section>
  );
}
