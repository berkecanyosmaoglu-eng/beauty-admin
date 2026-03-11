import {
    Bot,
    CalendarDays,
    Clock3,
    Sparkles,
    Tag,
    UserRound,
    X,
  } from "lucide-react";
  import type { InboxConfig } from "./inbox-types";
  
  type CustomerPanelProps = {
    config: InboxConfig;
    mobileOpen?: boolean;
    onCloseMobile?: () => void;
  };
  
  export default function CustomerPanel({
    config,
    mobileOpen = false,
    onCloseMobile,
  }: CustomerPanelProps) {
    const iconBoxClass =
      config.variant === "instagram"
        ? "bg-fuchsia-500/15 text-fuchsia-400"
        : "bg-emerald-400/15 text-emerald-400";
  
    const avatarClass =
      config.variant === "instagram"
        ? "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400"
        : "bg-gradient-to-br from-zinc-700 to-zinc-900";
  
    return (
      <>
        <div className="hidden xl:flex w-[284px] shrink-0 flex-col border-l border-white/6 bg-[#0d1726]">
          <div className="border-b border-white/6 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className={`rounded-2xl p-2.5 ${iconBoxClass}`}>
                <Bot size={18} />
              </div>
              <div>
                <p className="text-[18px] font-semibold tracking-tight text-white">
                  Müşteri Detayı
                </p>
                <p className="text-[11px] text-zinc-400">Canlı konuşma özeti</p>
              </div>
            </div>
          </div>
  
          <PanelContent config={config} avatarClass={avatarClass} />
        </div>
  
        {mobileOpen ? (
          <div className="fixed inset-0 z-50 xl:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={onCloseMobile} />
            <div className="absolute inset-x-0 bottom-0 top-[18%] flex flex-col rounded-t-[26px] border-t border-white/10 bg-[#0d1726] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/6 px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className={`rounded-2xl p-2.5 ${iconBoxClass}`}>
                    <Bot size={18} />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold tracking-tight text-white">
                      Müşteri Detayı
                    </p>
                    <p className="text-[11px] text-zinc-400">Canlı konuşma özeti</p>
                  </div>
                </div>
  
                <button
                  onClick={onCloseMobile}
                  className="rounded-xl bg-white/5 p-2 text-zinc-300"
                >
                  <X size={17} />
                </button>
              </div>
  
              <PanelContent config={config} avatarClass={avatarClass} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
  
  function PanelContent({
    config,
    avatarClass,
  }: {
    config: InboxConfig;
    avatarClass: string;
  }) {
    return (
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        <InfoCard>
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full font-semibold text-white ${avatarClass}`}
            >
              {config.customerInitials}
            </div>
            <div>
              <p className="text-[11px] text-zinc-400">Müşteri</p>
              <p className="text-[15px] font-semibold text-white">
                {config.customerCard.customerName}
              </p>
            </div>
          </div>
          <p className="mt-3 text-[13px] text-zinc-400">{config.customerCard.customerPhone}</p>
        </InfoCard>
  
        <InfoCard>
          <div className="mb-3 flex items-center gap-2">
            <Tag size={14} className="text-violet-300" />
            <p className="text-[13px] font-medium text-zinc-300">Etiketler</p>
          </div>
  
          <div className="flex flex-wrap gap-2">
            {config.customerCard.labels.map((label) => (
              <span
                key={label}
                className={`rounded-full px-3 py-1 text-[11px] ${
                  config.variant === "instagram"
                    ? "bg-fuchsia-500/10 text-fuchsia-300"
                    : "bg-cyan-400/10 text-cyan-300"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </InfoCard>
  
        <InfoCard>
          <div className="mb-3 flex items-center gap-2">
            <Sparkles size={14} className="text-emerald-300" />
            <p className="text-[13px] font-medium text-zinc-300">İlgilendiği Hizmet</p>
          </div>
          <p className="text-[16px] font-semibold text-white">
            {config.customerCard.interestTitle}
          </p>
          <p className="mt-2 text-[13px] leading-6 text-zinc-400">
            {config.customerCard.interestDescription}
          </p>
        </InfoCard>
  
        <InfoCard>
          <div className="mb-3 flex items-center gap-2">
            <CalendarDays size={14} className="text-cyan-300" />
            <p className="text-[13px] font-medium text-zinc-300">Yaklaşan Randevu</p>
          </div>
          <p className="text-[15px] font-semibold text-white">
            {config.customerCard.nextAppointmentTitle}
          </p>
          <p className="mt-2 text-[13px] leading-6 text-zinc-400">
            {config.customerCard.nextAppointmentDescription}
          </p>
        </InfoCard>
  
        <InfoCard>
          <div className="mb-3 flex items-center gap-2">
            <Clock3 size={14} className="text-amber-300" />
            <p className="text-[13px] font-medium text-zinc-300">Son Aktivite</p>
          </div>
          <p className="text-[13px] leading-6 text-zinc-300">
            {config.customerCard.lastActivity}
          </p>
        </InfoCard>
  
        <InfoCard>
          <div className="mb-3 flex items-center gap-2">
            <UserRound size={14} className="text-zinc-300" />
            <p className="text-[13px] font-medium text-zinc-300">Bot Notu</p>
          </div>
          <p className="text-[13px] leading-6 text-zinc-300">
            {config.customerCard.botNote}
          </p>
        </InfoCard>
      </div>
    );
  }
  
  function InfoCard({ children }: { children: React.ReactNode }) {
    return (
      <div className="rounded-[22px] border border-white/6 bg-white/5 p-4">
        {children}
      </div>
    );
  }