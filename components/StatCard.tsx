import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export function StatCard({ title, value, description, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(42,17,17,0.96),rgba(59,19,19,0.84),rgba(30,11,11,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-white/15">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#CFCFCF]">{title}</p>
          <strong className="mt-3 block text-3xl font-semibold tracking-tight text-white">{value}</strong>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#FF3B30]/15 p-3 text-[#FF5E57]">
          <Icon size={22} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#9CA3AF]">{description}</p>
    </div>
  );
}
