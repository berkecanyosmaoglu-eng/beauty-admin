import { ArrowLeft, MoreHorizontal, Phone, UserRound, Video } from "lucide-react";
import type { InboxChat, InboxConfig } from "./inbox-types";

type ChatHeaderProps = {
  config: InboxConfig;
  chat: InboxChat;
  onBack?: () => void;
  onOpenDetails?: () => void;
};

export default function ChatHeader({
  config,
  chat,
  onBack,
  onOpenDetails,
}: ChatHeaderProps) {
  const avatarClass =
    config.variant === "instagram"
      ? "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400"
      : "bg-gradient-to-br from-zinc-600 to-zinc-900";

  const statusColor =
    config.variant === "instagram" ? "text-fuchsia-400" : "text-emerald-400";

  const dotColor =
    config.variant === "instagram" ? "bg-fuchsia-400" : "bg-emerald-400";

  return (
    <div className="border-b border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] px-3 py-3 md:px-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {onBack ? (
            <button
              onClick={onBack}
              className="rounded-xl bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 md:hidden"
            >
              <ArrowLeft size={17} />
            </button>
          ) : null}

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white ${avatarClass}`}
          >
            {chat.initials}
          </div>

          <div className="min-w-0">
            <div className="truncate text-[16px] font-semibold tracking-tight text-white md:text-[18px]">
              {chat.name}
            </div>
            <div className={`mt-1 flex items-center gap-2 text-[11px] ${statusColor}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
              {config.customerStatus}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={onOpenDetails}
            className="rounded-xl bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 xl:hidden"
          >
            <UserRound size={17} />
          </button>

          {config.variant === "instagram" ? (
            <button className="rounded-xl bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
              <Video size={17} />
            </button>
          ) : (
            <button className="rounded-xl bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
              <Phone size={17} />
            </button>
          )}

          <button className="rounded-xl bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
            <MoreHorizontal size={17} />
          </button>
        </div>
      </div>

      <div className="mt-3 hidden flex-wrap gap-2 xl:flex">
        {config.quickActions.map((action) => (
          <button
            key={action}
            className="rounded-full border border-white/6 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300 transition hover:bg-white/10"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}