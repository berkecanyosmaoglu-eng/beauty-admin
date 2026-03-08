import { MoreHorizontal, Phone } from "lucide-react";
import { quickActions } from "./inbox-data";

export default function ChatHeader() {
  return (
    <div className="flex h-[78px] items-center justify-between border-b border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 text-sm font-bold text-white">
          ZK
        </div>

        <div>
          <div className="text-2xl font-semibold tracking-tight text-white">Zeynep Kaya</div>
          <div className="mt-1 flex items-center gap-2 text-xs text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Bot aktif
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {quickActions.map((action) => (
          <button
            key={action}
            className="hidden rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-xs text-zinc-300 transition hover:bg-white/10 xl:block"
          >
            {action}
          </button>
        ))}

        <button className="rounded-xl bg-white/5 p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white">
          <Phone size={18} />
        </button>
        <button className="rounded-xl bg-white/5 p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}