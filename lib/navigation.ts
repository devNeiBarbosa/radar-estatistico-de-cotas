import {
  BarChart3,
  ClipboardList,
  GitCompareArrows,
  Home,
  LineChart,
  ListChecks,
  Settings,
  ShieldCheck
} from 'lucide-react';

export const navigationItems = [
  { href: '/', label: 'Visão inicial', icon: Home },
  { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: '/resultados-federal', label: 'Resultados da Federal', icon: ClipboardList },
  { href: '/analisar-cota', label: 'Analisar Cota', icon: LineChart },
  { href: '/comparar-cotas', label: 'Comparar Cotas', icon: GitCompareArrows },
  { href: '/cotas-disponiveis', label: 'Cotas Disponíveis', icon: ListChecks },
  { href: '/relatorios', label: 'Relatórios', icon: ShieldCheck },
  { href: '/configuracoes', label: 'Configurações', icon: Settings }
];
