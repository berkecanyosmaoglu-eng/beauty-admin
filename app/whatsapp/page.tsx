import AppShell from "@/components/admin/app-shell";
import {
  Search,
  Phone,
  MoreHorizontal,
  Paperclip,
  Send,
  Bot,
  CalendarDays,
  Clock3,
  Sparkles,
  UserRound,
  Tag,
  CheckCheck,
} from "lucide-react";

const chats = [
  {
    name: "Zeynep Kaya",
    initials: "ZK",
    message: "Merhaba, cilt bakımı için fiyat alabilir miyim?",
    time: "11:01",
    unread: 2,
    active: true,
    tag: "Yeni müşteri",
    channel: "WhatsApp",
  },
  {
    name: "Merve Aydın",
    initials: "MA",
    message: "Yarın için uygun saat var mı?",
    time: "10:42",
    unread: 0,
    active: false,
    tag: "Sıcak lead",
    channel: "WhatsApp",
  },
  {
    name: "Berna Demir",
    initials: "BD",
    message: "Kaş laminasyonu ne kadar sürüyor?",
    time: "10:16",
    unread: 1,
    active: false,
    tag: "Fiyat soruyor",
    channel: "WhatsApp",
  },
  {
    name: "Esra Çelik",
    initials: "EÇ",
    message: "Cumartesi boşluk var mı?",
    time: "09:58",
    unread: 0,
    active: false,
    tag: "Randevu adayı",
    channel: "WhatsApp",
  },
];

const messages = [
  {
    from: "them",
    text: "Merhaba, cilt bakımı için fiyat alabilir miyim?",
    time: "11:01",
  },
  {
    from: "me",
    text: "Merhaba, elbette. Cilt bakımı için güncel fiyatlarımızı paylaşabilirim.",
    time: "11:02",
  },
  {
    from: "me",
    text: "Size uygun saatlere göre randevu oluşturabilirim.",
    time: "11:03",
  },
];

const quickActions = [
  "Fiyat listesi gönder",
  "Uygun saat öner",
  "İnsana devret",
];

export default function WhatsAppPage() {
  return (
    <AppShell>
      <div className="flex h-screen bg-[#08111d] text-white">
        <div className="flex w-[360px] shrink-0 flex-col border-r border-white/5 bg-[#0d1726]">
          <div className="border-b border-white/5 px-5 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold tracking-tight">WhatsApp</h1>
                <p className="mt-1 text-sm text-zinc-400">16 aktif konuşma</p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                Bot aktif
              </span>
            </div>

            <div className="mt-4 flex h-11 items-center rounded-2xl border border-white/5 bg-[#0a1320] px-3">
              <Search size={16} className="text-zinc-500" />
              <input
                placeholder="İsim veya numara ara..."
                className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
              />
            </div>

            <div className="mt-4 flex gap-2">
              <button className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-[#041018]">
                Tümü
              </button>
              <button className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300">
                Okunmamış
              </button>
              <button className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300">
                Bot kapalı
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3">
            <div className="space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.name}
                  className={`cursor-pointer rounded-2xl border p-3 transition ${
                    chat.active
                      ? "border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]"
                      : "border-transparent hover:bg-white/5"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 text-sm font-semibold text-white">
                      {chat.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">{chat.name}</p>
                          <div className="mt-1 flex flex-wrap gap-1.5">
                            <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] text-violet-300">
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
                          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-400 px-1 text-[10px] font-bold text-[#041018]">
                            {chat.unread}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col bg-[#07111f]">
          <div className="flex h-[78px] items-center justify-between border-b border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 text-sm font-bold">
                ZK
              </div>

              <div>
                <div className="text-2xl font-semibold tracking-tight">Zeynep Kaya</div>
                <div className="mt-1 flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Bot aktif
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  className="hidden rounded-xl border border-white/5 bg-white/5 px-3 py-2 text-xs text-zinc-300 transition hover:bg-white/10 xl:block"
                >
                  {action}
                </button>
              ))}

              <button className="rounded-xl bg-white/5 p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white">
                <Phone size={18} />
              </button>
              <button className="rounded-xl bg-white/5 p-2.5 text-zinc-400 transition hover:bg-white/10 hover:text-white">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

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
        </div>

        <div className="flex w-[340px] shrink-0 flex-col border-l border-white/5 bg-[#0d1726]">
          <div className="border-b border-white/5 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-400">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-xl font-semibold tracking-tight">Müşteri Detayı</p>
                <p className="text-xs text-zinc-400">Canlı konuşma özeti</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 font-semibold">
                  ZK
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Müşteri</p>
                  <p className="text-lg font-semibold">Zeynep Kaya</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-400">+90 5xx xxx xx xx</p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Tag size={15} className="text-violet-300" />
                <p className="text-sm font-medium text-zinc-300">Etiketler</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  Yeni müşteri
                </span>
                <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                  WhatsApp
                </span>
                <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
                  Fiyat soruyor
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={15} className="text-emerald-300" />
                <p className="text-sm font-medium text-zinc-300">İlgilendiği Hizmet</p>
              </div>
              <p className="text-2xl font-semibold">Cilt Bakımı</p>
              <p className="mt-2 text-sm text-zinc-400">Fiyat sorusu ile başladı</p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2">
                <CalendarDays size={15} className="text-cyan-300" />
                <p className="text-sm font-medium text-zinc-300">Yaklaşan Randevu</p>
              </div>
              <p className="text-base font-semibold">Henüz randevu yok</p>
              <p className="mt-2 text-sm text-zinc-400">
                Bot uygun saat önerirse rezervasyona dönme ihtimali yüksek.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Clock3 size={15} className="text-amber-300" />
                <p className="text-sm font-medium text-zinc-300">Son Aktivite</p>
              </div>
              <p className="text-sm leading-6 text-zinc-300">
                11:01’de fiyat sordu. 11:03 itibarıyla bot randevu teklifine geçti.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2">
                <UserRound size={15} className="text-zinc-300" />
                <p className="text-sm font-medium text-zinc-300">Bot Notu</p>
              </div>
              <p className="text-sm leading-6 text-zinc-300">
                Kullanıcı fiyat ve hizmet bilgisi istiyor. Uygun saat gösterilirse rezervasyona
                dönme ihtimali yüksek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}