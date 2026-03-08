import {
    Bot,
    CalendarDays,
    Clock3,
    Sparkles,
    Tag,
    UserRound,
  } from "lucide-react";
  
  export default function CustomerPanel() {
    return (
      <div className="flex w-[340px] shrink-0 flex-col border-l border-white/5 bg-[#0d1726]">
        <div className="border-b border-white/5 px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-400">
              <Bot size={20} />
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight text-white">Müşteri Detayı</p>
              <p className="text-xs text-zinc-400">Canlı konuşma özeti</p>
            </div>
          </div>
        </div>
  
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 font-semibold text-white">
                ZK
              </div>
              <div>
                <p className="text-xs text-zinc-400">Müşteri</p>
                <p className="text-lg font-semibold text-white">Zeynep Kaya</p>
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
            <p className="text-2xl font-semibold text-white">Cilt Bakımı</p>
            <p className="mt-2 text-sm text-zinc-400">Fiyat sorusu ile başladı</p>
          </div>
  
          <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
            <div className="mb-3 flex items-center gap-2">
              <CalendarDays size={15} className="text-cyan-300" />
              <p className="text-sm font-medium text-zinc-300">Yaklaşan Randevu</p>
            </div>
            <p className="text-base font-semibold text-white">Henüz randevu yok</p>
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
    );
  }