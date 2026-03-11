import { Image as ImageIcon, Paperclip, Send } from "lucide-react";
import type { InboxConfig } from "./inbox-types";
import Button from "../ui/button";

type ChatComposerProps = {
  config: InboxConfig;
};

export default function ChatComposer({ config }: ChatComposerProps) {
  const actionVariant = config.variant === "instagram" ? "ig" : "wa";

  return (
    <div className="border-t border-white/6 bg-[#0d1726] px-3 py-3 md:px-4">
      <div className="mb-2.5 flex flex-wrap gap-2 overflow-x-auto">
        <Button size="sm" variant="ghost">
          Hızlı cevap
        </Button>
        <Button size="sm" variant="ghost">
          Şablon ekle
        </Button>
        <Button size="sm" variant="ghost">
          Not düş
        </Button>
      </div>

      <div className="flex items-center gap-3 rounded-[18px] border border-white/6 bg-[#0a1320] px-3 py-3">
        {config.variant === "instagram" ? (
          <button className="text-zinc-500 transition hover:text-zinc-300">
            <ImageIcon size={16} />
          </button>
        ) : (
          <button className="text-zinc-500 transition hover:text-zinc-300">
            <Paperclip size={16} />
          </button>
        )}

        <input
          placeholder={config.variant === "instagram" ? "Mesaj gönder..." : "Mesaj yazın..."}
          className="w-full bg-transparent text-[14px] text-white outline-none placeholder:text-zinc-500"
        />

        <Button variant={actionVariant} size="sm" className="w-10 px-0">
          <Send size={14} />
        </Button>
      </div>
    </div>
  );
}