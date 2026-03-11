"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageCircle,
  Camera,
  Mail,
  Globe,
  BarChart3,
  FileText,
  BookUser,
  Settings,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Siteler", href: "/sites", icon: Globe },
  { label: "Kullanım", href: "/usage", icon: BarChart3 },
  { label: "WhatsApp", href: "/whatsapp", icon: MessageCircle },
  { label: "Şablonlar", href: "/templates", icon: FileText },
  { label: "Rehber", href: "/contacts", icon: BookUser },
  { label: "Instagram", href: "/instagram", icon: Camera },
  { label: "Mail", href: "/mail", icon: Mail },
  { label: "Ayarlar", href: "/settings", icon: Settings },
];

type SidebarProps = {
  onNavigate?: () => void;
};

export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[228px] shrink-0 flex-col border-r border-slate-300/80 bg-[#f6f7fb]">
      <div className="flex items-center px-5 pt-5 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-bold text-white shadow-[0_8px_20px_rgba(168,85,247,0.22)]">
            B
          </div>
          <div>
            <p className="text-[16px] font-semibold tracking-tight text-slate-900">
              Beauty Admin
            </p>
            <p className="text-[11px] text-slate-600">WhatsApp API</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`group flex h-10 items-center gap-3 rounded-2xl px-3 text-[13px] font-medium transition-all ${
                  active
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_10px_20px_rgba(217,70,239,0.16)]"
                    : "text-slate-800 hover:bg-white hover:text-slate-950"
                }`}
              >
                <Icon
                  size={16}
                  className={active ? "opacity-100" : "opacity-100 text-slate-700"}
                  strokeWidth={2}
                />
                <span className={active ? "text-white" : "text-slate-800"}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-slate-300/80 p-3">
        <div className="rounded-[20px] border border-slate-300/80 bg-white p-3 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-semibold text-white">
              AA
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-slate-900">
                Aydın Acar
              </p>
              <p className="text-[12px] font-medium text-emerald-700">1000 kredi</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}