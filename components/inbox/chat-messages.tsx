import { CheckCheck } from "lucide-react";
import { InboxMessage } from "./inbox-types";

type ChatMessagesProps = {
  messages: InboxMessage[];
};

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="relative flex-1 overflow-y-auto px-8 py-6">
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
              className={`max-w-[620px] rounded-[22px] px-5 py-4 text-sm leading-7 shadow-lg ${
                msg.from === "me"
                  ? "rounded-br-md bg-gradient-to-br from-emerald-400 to-emerald-500 text-[#041018]"
                  : "rounded-bl-md border border-white/5 bg-[#172233] text-zinc-100"
              }`}
            >
              <p>{msg.text}</p>
              <div className="mt-2 flex items-center justify-end gap-1 text-[11px] opacity-70">
                <span>{msg.time}</span>
                {msg.from === "me" ? <CheckCheck size={13} /> : null}
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