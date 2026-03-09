import { Search } from "lucide-react";
import { InboxChat, InboxConfig } from "./inbox-types";

type InboxSidebarProps = {
  config: InboxConfig;
  selectedChatId: string;
  onSelectChat: (chat: InboxChat) => void;
};

export default function InboxSidebar({
  config,
  selectedChatId,
  onSelectChat,
}: InboxSidebarProps) {
  const accentClass =
    config.accent === "pink"
      ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white"
      : "bg-emerald-400 text-[#041018]";

  const activeCardClass =
    config.variant === "instagram"
      ? "border-fuchsia-400/30 bg-fuchsia-400/10 shadow-[0_0_0_1px_rgba(232,121,249,0.08)]"
      : "border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]";

  return (
    <div className="flex h-full w-full flex-col border-r border-white/5 bg-[#0d1726]">
      <div className="border-b border-white/5 px-4 py-5 md:px-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-white">{config.title}</h1>
            <p className="mt-1 text-sm text-zinc-400">{config.subtitle}</p>
          </div>
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200">
            {config.statusText}
          </span>
        </div>

        <div className="mt-4 flex h-11 items-center rounded-2xl border border-white/5 bg-[#0a1320] px-3">
          <Search size={16} className="text-zinc-500" />
          <input
            placeholder="İsim veya kullanıcı ara..."
            className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          <button className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold ${accentClass}`}>
            Tümü
          </button>
          <button className="whitespace-nowrap rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300">
            Okunmamış
          </button>
          <button className="whitespace-nowrap rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300">
            Etiketli
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3">
        <div className="space-y-2">
          {config.chats.map((chat) => {
            const isActive = selectedChatId === chat.id;

            return (
              <button
                type="button"
                key={chat.id}
                onClick={() => onSelectChat(chat)}
                className={`block w-full rounded-2xl border p-3 text-left transition ${
                  isActive ? activeCardClass : "border-transparent hover:bg-white/5"
                }`}
              >
                <div className="flex gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${
                      config.variant === "instagram"
                        ? "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400"
                        : "bg-gradient-to-br from-zinc-700 to-zinc-900"
                    }`}
                  >
                    {chat.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{chat.name}</p>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] ${
                              config.variant === "instagram"
                                ? "bg-fuchsia-500/15 text-fuchsia-300"
                                : "bg-violet-500/15 text-violet-300"
                            }`}
                          >
                            {chat.channel}
                          </span>
                          <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-300">
                            {chat.tag}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] text-zinc-500">{chat.time}</span>
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <p className="truncate text-xs text-zinc-400">{chat.message}</p>

                      {chat.unread > 0 ? (
                        <span
                          className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                            config.variant === "instagram"
                              ? "bg-fuchsia-500 text-white"
                              : "bg-emerald-400 text-[#041018]"
                          }`}
                        >
                          {chat.unread}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}