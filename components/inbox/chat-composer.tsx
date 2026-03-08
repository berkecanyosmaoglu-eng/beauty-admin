import { Paperclip, Send } from "lucide-react";

export default function ChatComposer() {
  return (
    <div className="border-t border-white/5 bg-[#0d1726] px-6 py-4">
      <div className="mb-3 flex flex-wrap gap-2">
        <button className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">
          Hızlı cevap
        </button>
        <button className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">
          Şablon ekle
        </button>
        <button className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">
          Not düş
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0a1320] px-4 py-3">
        <button className="text-zinc-500 transition hover:text-zinc-300">
          <Paperclip size={18} />
        </button>

        <input
          placeholder="Mesaj yazın..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        />

        <button className="rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 p-2.5 text-[#041018] transition hover:opacity-90">
          <Send size={17} />
        </button>
      </div>
    </div>
  );
}