import { CheckCheck, Heart } from "lucide-react";
import { InboxConfig, InboxMessage } from "./inbox-types";

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
    <div className="relative flex-1 overflow-y-auto px-4 py-6 md:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]" />

      <div className="relative mb-6 flex justify-center">
        <span className="rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-400">
          15.02.2026
        </span>
      </div>

      <div className="relative space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] md:max-w-[620px] rounded-[22px] px-5 py-4 text-sm leading-7 shadow-lg ${
                msg.from === "me"
                  ? myBubbleClass
                  : "rounded-bl-md border border-white/5 bg-[#172233] text-zinc-100"
              }`}
            >
              <p>{msg.text}</p>
              <div className="mt-2 flex items-center justify-end gap-1 text-[11px] opacity-70">
                <span>{msg.time}</span>
                {msg.from === "me" ? (
                  config.variant === "instagram" ? <Heart size={12} /> : <CheckCheck size={13} />
                ) : null}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-start">
          <div className="rounded-[22px] rounded-bl-md border border-white/5 bg-[#172233] px-4 py-3 text-sm text-zinc-400">
            Yazıyor...
          </div>
        </div>
      </div>
    </div>
  );
}