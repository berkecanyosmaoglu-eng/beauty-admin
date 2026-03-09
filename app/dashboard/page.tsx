import AppShell from "@/components/admin/app-shell";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
  Instagram,
  Mail,
} from "lucide-react";

const kpis = [
  {
    title: "Bugünkü Randevu",
    value: "28",
    change: "+12%",
    sub: "Düne göre daha iyi",
    icon: CalendarDays,
  },
  {
    title: "Aktif Konuşma",
    value: "19",
    change: "+5",
    sub: "7 tanesi sıcak lead",
    icon: MessageCircle,
  },
  {
    title: "Toplam Lead",
    value: "143",
    change: "+18%",
    sub: "Bu hafta oluşan",
    icon: Users,
  },
  {
    title: "Dönüşüm Oranı",
    value: "%34",
    change: "+4.2",
    sub: "Son 7 gün ortalaması",
    icon: TrendingUp,
  },
];

const channels = [
  {
    name: "WhatsApp",
    value: "82 konuşma",
    detail: "12 randevuya dönüştü",
    accent: "from-emerald-400 to-emerald-500",
    icon: MessageCircle,
  },
  {
    name: "Instagram",
    value: "41 DM",
    detail: "6 sıcak lead var",
    accent: "from-fuchsia-500 via-pink-500 to-orange-400",
    icon: Instagram,
  },
  {
    name: "Mail",
    value: "13 e-posta",
    detail: "3 teklif bekliyor",
    accent: "from-cyan-400 to-blue-500",
    icon: Mail,
  },
];

const appointments = [
  { time: "12:30", customer: "Zeynep Kaya", service: "Cilt Bakımı", staff: "Elif" },
  { time: "13:15", customer: "Merve Aydın", service: "Lazer", staff: "Ayşe" },
  { time: "15:00", customer: "Dilan Aras", service: "Protez Tırnak", staff: "Büşra" },
  { time: "16:30", customer: "Esra Çelik", service: "Kaş Tasarımı", staff: "Elif" },
];

const liveConversations = [
  {
    name: "Zeynep Kaya",
    channel: "WhatsApp",
    text: "Fiyat aldı, uygun saat bekliyor",
    status: "Sıcak lead",
  },
  {
    name: "Dilan Aras",
    channel: "Instagram",
    text: "Reklamdan geldi, dönüşüme yakın",
    status: "Yüksek potansiyel",
  },
  {
    name: "Buse A.",
    channel: "Instagram",
    text: "Story üzerinden yazdı",
    status: "Yeni konuşma",
  },
];

const activities = [
  "Jarvis son 1 saatte 11 müşteriye otomatik cevap verdi.",
  "WhatsApp üzerinden 3 yeni rezervasyon oluşturuldu.",
  "Instagram DM kanalında 2 sıcak lead tespit edildi.",
  "2 saat öncesi hatırlatma kuyruğuna 6 müşteri eklendi.",
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="min-h-screen bg-[#08111d] px-4 py-6 text-white md:px-6 xl:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-[28px] border border-white/5 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  <Sparkles size={14} />
                  Beauty SaaS Control Center
                </div>

                <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Günün operasyonu güçlü gidiyor reis.
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300 md:text-base">
                  WhatsApp, Instagram ve rezervasyon akışın tek panelden yönetiliyor.
                  Bugün dönüşüm oranı yükselmiş görünüyor; sıcak lead’leri hızlıca
                  randevuya çevirmen yeterli.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#08111d] transition hover:opacity-90">
                    Konuşmaları görüntüle
                  </button>
                  <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                    Bugünkü randevular
                  </button>
                </div>
              </div>

              <div className="grid min-w-[260px] grid-cols-2 gap-3">
                <div className="rounded-3xl border border-white/10 bg-black/10 p-4">
                  <p className="text-xs text-zinc-400">Cevap hızı</p>
                  <p className="mt-2 text-2xl font-semibold">1.8 dk</p>
                  <p className="mt-1 text-xs text-emerald-400">İyi seviyede</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/10 p-4">
                  <p className="text-xs text-zinc-400">Aktif bot</p>
                  <p className="mt-2 text-2xl font-semibold">2 kanal</p>
                  <p className="mt-1 text-xs text-fuchsia-400">WA + IG açık</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/10 p-4">
                  <p className="text-xs text-zinc-400">Bugünkü satış</p>
                  <p className="mt-2 text-2xl font-semibold">₺18.400</p>
                  <p className="mt-1 text-xs text-cyan-400">Tahmini gelir</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/10 p-4">
                  <p className="text-xs text-zinc-400">Boş slot</p>
                  <p className="mt-2 text-2xl font-semibold">9</p>
                  <p className="mt-1 text-xs text-amber-400">Bugün kalan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/5 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Kanal Performansı</p>
                <h2 className="mt-1 text-xl font-semibold">Bugünün akışı</h2>
              </div>
              <button className="rounded-xl bg-white/5 p-2 text-zinc-300">
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={channel.name}
                    className="rounded-3xl border border-white/5 bg-[#0d1726] p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${channel.accent} text-white`}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold">{channel.name}</p>
                          <span className="text-xs text-zinc-400">{channel.value}</span>
                        </div>
                        <p className="mt-1 text-sm text-zinc-400">{channel.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-4">
          {kpis.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/5 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-white/5 p-3 text-zinc-300">
                    <Icon size={18} />
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400">
                    {item.change}
                  </span>
                </div>

                <p className="mt-4 text-sm text-zinc-400">{item.title}</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight">{item.value}</p>
                <p className="mt-2 text-sm text-zinc-500">{item.sub}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div className="rounded-[28px] border border-white/5 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Yaklaşan Randevular</p>
                <h2 className="mt-1 text-xl font-semibold">Bugün sıradakiler</h2>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
                {appointments.length} kayıt
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {appointments.map((item) => (
                <div
                  key={`${item.time}-${item.customer}`}
                  className="flex flex-col gap-3 rounded-3xl border border-white/5 bg-[#0d1726] p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-300">
                      {item.time}
                    </div>

                    <div>
                      <p className="font-semibold">{item.customer}</p>
                      <p className="mt-1 text-sm text-zinc-400">
                        {item.service} · {item.staff}
                      </p>
                    </div>
                  </div>

                  <button className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10">
                    Detay
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/5 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Canlı Konuşmalar</p>
                <h2 className="mt-1 text-xl font-semibold">Anlık durum</h2>
              </div>
              <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                canlı
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {liveConversations.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-white/5 bg-[#0d1726] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold">{item.name}</p>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300">
                      {item.channel}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{item.text}</p>
                  <p className="mt-3 text-xs text-amber-300">{item.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/5 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Son Aktiviteler</p>
                <h2 className="mt-1 text-xl font-semibold">Sistem hareketleri</h2>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
                son 1 saat
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {activities.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/5 bg-[#0d1726] p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-emerald-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-sm leading-6 text-zinc-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/5 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Haftalık Trend</p>
                <h2 className="mt-1 text-xl font-semibold">Konuşma → randevu akışı</h2>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
                son 7 gün
              </div>
            </div>

            <div className="mt-8 flex h-[280px] items-end gap-3 md:gap-4">
              {[42, 56, 38, 71, 63, 84, 67].map((n, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-3">
                  <div
                    className="w-full rounded-t-[20px] bg-gradient-to-t from-fuchsia-500 via-cyan-400 to-emerald-400"
                    style={{ height: `${n * 2.4}px` }}
                  />
                  <span className="text-xs text-zinc-500">
                    {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/5 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Bugünkü Odak</p>
                <h2 className="mt-1 text-xl font-semibold">Öne çıkan öneriler</h2>
              </div>
              <div className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
                dikkat
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-3xl border border-fuchsia-400/10 bg-fuchsia-500/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-fuchsia-500/15 p-3 text-fuchsia-300">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram lead’leri sıcak</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Story ve reklamdan gelen DM’ler hızlı dönüşüm verebilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-400/10 bg-emerald-500/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
                    <Clock3 size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Boş slotları doldur</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      16:00 sonrası boşluklar için bot öneri akışı tetiklenebilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-cyan-500/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-300">
                    <ArrowUpRight size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Dönüşüm yukarı gidiyor</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Son 3 günde tekliften randevuya geçiş artmış durumda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}