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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[250px] shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="flex h-20 items-center px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500 text-sm font-bold text-white shadow-sm">
            B
          </div>
          <div>
            <p className="text-[18px] font-semibold text-zinc-900">Beauty Admin</p>
            <p className="text-xs text-zinc-500">WhatsApp API</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-3">
        <div className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${
                  active
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-sm"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-zinc-200 p-4">
        <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-sm font-semibold text-white">
            AA
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-zinc-900">Aydın Acar</p>
            <p className="text-xs text-emerald-600">1000 kredi</p>
          </div>
        </div>
      </div>
    </aside>
  );
}