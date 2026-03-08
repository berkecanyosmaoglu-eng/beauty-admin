import AppShell from "@/components/admin/app-shell";
import { Search, Phone, MoreHorizontal, Paperclip, Send, Bot } from "lucide-react";

const chats = [
  {
    name: "Zeynep Kaya",
    message: "Merhaba, cilt bakımı için fiyat alabilir miyim?",
    time: "11:01",
    unread: 2,
    active: true,
  },
  {
    name: "Merve Aydın",
    message: "Yarın için uygun saat var mı?",
    time: "10:42",
    unread: 0,
  },
  {
    name: "Berna Demir",
    message: "Kaş laminasyonu ne kadar sürüyor?",
    time: "10:16",
    unread: 1,
  },
  {
    name: "Esra Çelik",
    message: "Cumartesi boşluk var mı?",
    time: "09:58",
    unread: 0,
  },
  {
    name: "Seda Yılmaz",
    message: "Fiyat listesi atabilir misiniz?",
    time: "09:31",
    unread: 0,
  },
  {
    name: "Duygu Şahin",
    message: "Randevumu 1 saat ileri alabilir miyiz?",
    time: "Dün",
    unread: 0,
  },
];

const messages = [
  {
    from: "them",
    text: "Merhaba 5-6 yaş 2.dönem için günlük ve aylık plan gerekiyor bana. Fiyat bilgisi verir misiniz?",
    time: "11:01",
  },
  {
    from: "me",
    text: "Merhaba, fiyat ve paket seçeneklerini sistemimiz üzerinden görüntüleyebilirsiniz. İsterseniz size uygun hizmeti birlikte de seçebiliriz.",
    time: "11:02",
  },
  {
    from: "me",
    text: "Ayrıca isterseniz direkt uygun saatlere göre size randevu oluşturabilirim.",
    time: "11:02",
  },
];

export default function WhatsAppPage() {
  return (
    <AppShell>
      <div className="flex h-screen overflow-hidden bg-[#08111d] text-white">
        <div className="flex w-[330px] shrink-0 flex-col border-r border-white/5 bg-[#101a28]">
          <div className="border-b border-white/5 px-5 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-semibold">WhatsApp Mesajları</h1>
                <p className="mt-1 text-xs text-zinc-400">16 sohbet</p>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
                Bot aktif
              </div>
            </div>

            <div className="mt-4 flex h-11 items-center gap-3 rounded-2xl border border-white/5 bg-[#0b1523] px-4">
              <Search size={16} className="text-zinc-500" />
              <input
                placeholder="İsim veya numara ara..."
                className="w-full border-none bg-transparent text-sm text-zinc-200 outline-none placeholder:text-zinc-500"
              />
            </div>

            <div className="mt-4 flex gap-2">
              <button className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-[#041018]">
                Tümü
              </button>
              <button className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300">
                Okunmamışlar
              </button>
              <button className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300">
                Bot Kapalı
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3">
            <div className="space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.name}
                  className={`cursor-pointer rounded-2xl border px-4 py-3 transition ${
                    chat.active
                      ? "border-cyan-400/20 bg-cyan-400/10"
                      : "border-transparent bg-transparent hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{chat.name}</p>
                      <p className="mt-1 truncate text-xs text-zinc-400">{chat.message}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[11px] text-zinc-500">{chat.time}</span>
                      {chat.unread > 0 ? (
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-400 px-1 text-[10px] font-bold text-[#041018]">
                          {chat.unread}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col bg-[#08111d]">
          <div className="flex h-20 items-center justify-between border-b border-white/5 bg-white/5 px-6">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 text-sm font-bold">
                ZK
              </div>
              <div>
                <p className="font-semibold">Zeynep Kaya</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Bot Aktif
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-zinc-400">
              <button className="rounded-xl bg-white/5 p-2 hover:bg-white/10">
                <Phone size={18} />
              </button>
              <button className="rounded-xl bg-white/5 p-2 hover:bg-white/10">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#07111f] px-8 py-6">
            <div className="mb-6 flex justify-center">
              <span className="rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-400">
                15.02.2026
              </span>
            </div>

            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[620px] rounded-3xl px-5 py-4 text-sm leading-6 shadow-sm ${
                      msg.from === "me"
                        ? "rounded-br-md bg-[#1ea87a] text-white"
                        : "rounded-bl-md bg-[#17212d] text-zinc-100"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="mt-2 text-right text-[11px] opacity-70">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 bg-[#101a28] px-6 py-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0b1523] px-4 py-3">
              <button className="text-zinc-500 hover:text-zinc-300">
                <Paperclip size={18} />
              </button>
              <input
                placeholder="Mesaj yazın..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
              <button className="rounded-xl bg-emerald-400 p-2 text-[#041018] hover:opacity-90">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden w-[320px] shrink-0 border-l border-white/5 bg-[#101a28] xl:flex xl:flex-col">
          <div className="border-b border-white/5 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-400">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-semibold">Müşteri Detayı</p>
                <p className="text-xs text-zinc-400">Canlı konuşma özeti</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">Müşteri</p>
              <p className="mt-2 text-base font-semibold">Zeynep Kaya</p>
              <p className="mt-1 text-sm text-zinc-400">+90 5xx xxx xx xx</p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">İlgilendiği Hizmet</p>
              <p className="mt-2 text-base font-semibold">Cilt Bakımı</p>
              <p className="mt-1 text-sm text-zinc-400">Fiyat sorusu ile başladı</p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">Yaklaşan İşlem</p>
              <p className="mt-2 text-base font-semibold">Henüz randevu yok</p>
              <p className="mt-1 text-sm text-zinc-400">Bot uygun saat önermeye hazır</p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">Etiketler</p>
              <div className="mt-3 flex flex-wrap gap-2">
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
              <p className="text-xs text-zinc-400">Bot Notu</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Kullanıcı hizmet ve fiyat bilgisi istiyor. Uygun saat gösterilirse rezervasyona
                dönme ihtimali yüksek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}