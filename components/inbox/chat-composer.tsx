import { Image as ImageIcon, Paperclip, Send } from "lucide-react";
import { InboxConfig } from "./inbox-types";

type ChatComposerProps = {
  config: InboxConfig;
};

export default function ChatComposer({ config }: ChatComposerProps) {
  const sendButtonClass =
    config.variant === "instagram"
      ? "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-white"
      : "bg-gradient-to-br from-emerald-400 to-emerald-500 text-[#041018]";

  return (
    <div className="border-t border-white/5 bg-[#0d1726] px-4 py-4 md:px-6">
      <div className="mb-3 flex flex-wrap gap-2 overflow-x-auto">
        <button className="whitespace-nowrap rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">
          Hızlı cevap
        </button>
        <button className="whitespace-nowrap rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">
          Şablon ekle
        </button>
        <button className="whitespace-nowrap rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">
          Not düş
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0a1320] px-4 py-3">
        {config.variant === "instagram" ? (
          <button className="text-zinc-500 transition hover:text-zinc-300">
            <ImageIcon size={18} />
          </button>
        ) : (
          <button className="text-zinc-500 transition hover:text-zinc-300">
            <Paperclip size={18} />
          </button>
        )}

        <input
          placeholder={config.variant === "instagram" ? "Mesaj gönder..." : "Mesaj yazın..."}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        />

        <button className={`rounded-xl p-2.5 transition hover:opacity-90 ${sendButtonClass}`}>
          <Send size={17} />
        </button>
      </div>
    </div>
  );
}