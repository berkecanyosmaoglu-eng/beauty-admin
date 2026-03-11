"use client";

import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07101c]">
      <div className="lg:hidden sticky top-0 z-40 flex h-14 items-center justify-between border-b border-white/10 bg-[#0b1523]/95 px-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-bold text-white shadow-[0_8px_20px_rgba(168,85,247,0.28)]">
            B
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-white">Beauty Admin</p>
            <p className="text-[11px] text-zinc-400">Control Center</p>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200"
        >
          <Menu size={18} />
        </button>
      </div>

      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {mobileOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-[272px] bg-[#f6f7fb] shadow-2xl">
              <div className="flex h-14 items-center justify-between border-b border-slate-200 px-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-bold text-white">
                    B
                  </div>
                  <p className="text-sm font-semibold text-slate-900">Beauty Admin</p>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-slate-100 p-2 text-slate-700"
                >
                  <X size={18} />
                </button>
              </div>

              <Sidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        ) : null}

        <main className="min-w-0 flex-1 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.07),transparent_25%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.05),transparent_18%),#07101c]">
          {children}
        </main>
      </div>
    </div>
  );
}