import { CheckCheck, Heart } from "lucide-react";
import type { InboxConfig, InboxMessage } from "./inbox-types";

type ChatMessagesProps = {
  messages: InboxMessage[];
  config: InboxConfig;
};

export default function ChatMessages({ messages, config }: ChatMessagesProps) {
  const myBubbleClass =
    config.variant === "instagram"
      ? "rounded-br-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-white"
      : "rounded-br-md bg-gradient-to-br from-emerald-400 to-emerald-500 text-[#041018]";

  return (
    <div className="relative flex-1 overflow-y-auto px-3 py-4 md:px-4 md:py-4">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative mb-4 flex justify-center">
        <span className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] text-zinc-400">
          15.02.2026
        </span>
      </div>

      <div className="relative space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[88%] md:max-w-[520px] rounded-[18px] px-4 py-3 text-[14px] leading-7 shadow-[0_8px_18px_rgba(0,0,0,0.14)] ${
                msg.from === "me"
                  ? myBubbleClass
                  : "rounded-bl-md border border-white/6 bg-[#172233] text-zinc-100"
              }`}
            >
              <p>{msg.text}</p>

              <div className="mt-2 flex items-center justify-end gap-1 text-[10px] opacity-70">
                <span>{msg.time}</span>
                {msg.from === "me" ? (
                  config.variant === "instagram" ? (
                    <Heart size={11} />
                  ) : (
                    <CheckCheck size={12} />
                  )
                ) : null}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-start">
          <div className="rounded-[16px] rounded-bl-md border border-white/6 bg-[#172233] px-3 py-2 text-[12px] text-zinc-400">
            Yazıyor...
          </div>
        </div>
      </div>
    </div>
  );
}