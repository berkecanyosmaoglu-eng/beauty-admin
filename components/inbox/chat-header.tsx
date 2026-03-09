import { ArrowLeft, MoreHorizontal, Phone, UserRound, Video } from "lucide-react";
import { InboxChat, InboxConfig } from "./inbox-types";

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
    <div className="flex h-[78px] items-center justify-between border-b border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-4 md:px-6">
      <div className="flex min-w-0 items-center gap-3 md:gap-4">
        {onBack ? (
          <button
            onClick={onBack}
            className="rounded-xl bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 md:hidden"
          >
            <ArrowLeft size={18} />
          </button>
        ) : null}

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white md:h-12 md:w-12 ${avatarClass}`}
        >
          {chat.initials}
        </div>

        <div className="min-w-0">
          <div className="truncate text-lg font-semibold tracking-tight text-white md:text-2xl">
            {chat.name}
          </div>
          <div className={`mt-1 flex items-center gap-2 text-xs ${statusColor}`}>
            <span className={`h-2 w-2 rounded-full ${dotColor}`} />
            {config.customerStatus}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {config.quickActions.map((action) => (
          <button
            key={action}
            className="hidden rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-xs text-zinc-300 transition hover:bg-white/10 xl:block"
          >
            {action}
          </button>
        ))}

        <button
          onClick={onOpenDetails}
          className="rounded-xl bg-white/5 p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white xl:hidden"
        >
          <UserRound size={18} />
        </button>

        {config.variant === "instagram" ? (
          <button className="rounded-xl bg-white/5 p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white">
            <Video size={18} />
          </button>
        ) : (
          <button className="rounded-xl bg-white/5 p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white">
            <Phone size={18} />
          </button>
        )}

        <button className="rounded-xl bg-white/5 p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}