import AppShell from "@/components/admin/app-shell";
import type { ReactNode } from "react";
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
      <div className="min-h-screen px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <div className="grid gap-4 xl:grid-cols-[1.55fr_0.95fr]">
          <section className="rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(217,70,239,0.05),rgba(255,255,255,0.025))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300">
                  <Sparkles size={13} />
                  Beauty SaaS Control Center
                </div>

                <h1 className="mt-4 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[42px]">
                  Günün operasyonu güçlü gidiyor reis.
                </h1>

                <p className="mt-3 max-w-xl text-[14px] leading-7 text-zinc-300">
                  WhatsApp, Instagram ve rezervasyon akışın tek panelden yönetiliyor.
                  Sıcak lead’leri hızlıca randevuya çevirmen yeterli.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <button className="rounded-2xl bg-white px-4 py-2.5 text-[13px] font-semibold text-[#08111d] shadow-[0_8px_22px_rgba(255,255,255,0.08)]">
                    Konuşmaları görüntüle
                  </button>
                  <button className="rounded-2xl border border-white/8 bg-white/5 px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-white/10">
                    Bugünkü randevular
                  </button>
                </div>
              </div>

              <div className="grid min-w-[248px] grid-cols-2 gap-2.5">
                <MiniStat label="Cevap hızı" value="1.8 dk" note="İyi seviyede" noteClass="text-emerald-400" />
                <MiniStat label="Aktif bot" value="2 kanal" note="WA + IG açık" noteClass="text-fuchsia-400" />
                <MiniStat label="Bugünkü satış" value="₺18.400" note="Tahmini gelir" noteClass="text-cyan-400" />
                <MiniStat label="Boş slot" value="9" note="Bugün kalan" noteClass="text-amber-400" />
              </div>
            </div>
          </section>

          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Kanal Performansı</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Bugünün akışı</h2>
              </div>
              <button className="rounded-2xl border border-white/8 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={channel.name}
                    className="rounded-[20px] border border-white/6 bg-[#0d1726] p-3.5"
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${channel.accent} text-white shadow-[0_8px_20px_rgba(0,0,0,0.16)]`}
                      >
                        <Icon size={16} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[14px] font-semibold tracking-tight">{channel.name}</p>
                          <span className="text-[11px] text-zinc-400">{channel.value}</span>
                        </div>
                        <p className="mt-1 text-[13px] text-zinc-400">{channel.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-4">
          {kpis.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[22px] border border-white/6 bg-white/5 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl border border-white/6 bg-white/5 p-2.5 text-zinc-300">
                    <Icon size={16} />
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                    {item.change}
                  </span>
                </div>

                <p className="mt-3 text-[13px] text-zinc-400">{item.title}</p>
                <p className="mt-2 text-[38px] font-semibold tracking-tight">{item.value}</p>
                <p className="mt-1.5 text-[13px] text-zinc-500">{item.sub}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Yaklaşan Randevular</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Bugün sıradakiler</h2>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
                {appointments.length} kayıt
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              {appointments.map((item) => (
                <div
                  key={`${item.time}-${item.customer}`}
                  className="rounded-[20px] border border-white/6 bg-[#0d1726] p-3.5"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="rounded-2xl bg-cyan-400/10 px-3 py-2 text-[12px] font-semibold text-cyan-300">
                        {item.time}
                      </div>

                      <div>
                        <p className="text-[14px] font-semibold">{item.customer}</p>
                        <p className="mt-1 text-[13px] text-zinc-400">
                          {item.service} · {item.staff}
                        </p>
                      </div>
                    </div>

                    <button className="rounded-2xl border border-white/6 bg-white/5 px-4 py-2 text-[12px] text-zinc-300 transition hover:bg-white/10">
                      Detay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Canlı Konuşmalar</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Anlık durum</h2>
              </div>
              <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
                canlı
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              {liveConversations.map((item) => (
                <div key={item.name} className="rounded-[20px] border border-white/6 bg-[#0d1726] p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[14px] font-semibold">{item.name}</p>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-zinc-300">
                      {item.channel}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-zinc-400">{item.text}</p>
                  <p className="mt-2.5 text-[11px] font-medium text-amber-300">{item.status}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Son Aktiviteler</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Sistem hareketleri</h2>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
                son 1 saat
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              {activities.map((item) => (
                <div key={item} className="rounded-[20px] border border-white/6 bg-[#0d1726] p-3.5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-emerald-400">
                      <CheckCircle2 size={15} />
                    </div>
                    <p className="text-[13px] leading-6 text-zinc-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Haftalık Trend</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Konuşma → randevu akışı
                </h2>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
                son 7 gün
              </div>
            </div>

            <div className="mt-6 flex h-[240px] items-end gap-3">
              {[42, 56, 38, 71, 63, 84, 67].map((n, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2.5">
                  <div
                    className="w-full rounded-t-[18px] bg-gradient-to-t from-fuchsia-500 via-cyan-400 to-emerald-400 shadow-[0_8px_16px_rgba(0,0,0,0.16)]"
                    style={{ height: `${n * 2.1}px` }}
                  />
                  <span className="text-[11px] text-zinc-500">
                    {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"][i]}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Bugünkü Odak</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Öne çıkan öneriler</h2>
              </div>
              <div className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] text-amber-300">
                dikkat
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <FocusCard
                icon={<Instagram size={16} />}
                title="Instagram lead’leri sıcak"
                text="Story ve reklamdan gelen DM’ler hızlı dönüşüm verebilir."
                wrapper="border-fuchsia-400/10 bg-fuchsia-500/5"
                iconWrap="bg-fuchsia-500/15 text-fuchsia-300"
              />
              <FocusCard
                icon={<Clock3 size={16} />}
                title="Boş slotları doldur"
                text="16:00 sonrası boşluklar için bot öneri akışı tetiklenebilir."
                wrapper="border-emerald-400/10 bg-emerald-500/5"
                iconWrap="bg-emerald-500/15 text-emerald-300"
              />
              <FocusCard
                icon={<ArrowUpRight size={16} />}
                title="Dönüşüm yukarı gidiyor"
                text="Son 3 günde tekliften randevuya geçiş artmış durumda."
                wrapper="border-cyan-400/10 bg-cyan-500/5"
                iconWrap="bg-cyan-500/15 text-cyan-300"
              />
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function MiniStat({
  label,
  value,
  note,
  noteClass,
}: {
  label: string;
  value: string;
  note: string;
  noteClass: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-black/10 p-3.5 backdrop-blur-sm">
      <p className="text-[11px] text-zinc-400">{label}</p>
      <p className="mt-2 text-[28px] font-semibold tracking-tight">{value}</p>
      <p className={`mt-1 text-[11px] font-medium ${noteClass}`}>{note}</p>
    </div>
  );
}

function FocusCard({
  icon,
  title,
  text,
  wrapper,
  iconWrap,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  wrapper: string;
  iconWrap: string;
}) {
  return (
    <div className={`rounded-[20px] border p-4 ${wrapper}`}>
      <div className="flex items-center gap-3">
        <div className={`rounded-2xl p-2.5 ${iconWrap}`}>{icon}</div>
        <div>
          <p className="text-[14px] font-semibold">{title}</p>
          <p className="mt-1 text-[13px] leading-6 text-zinc-400">{text}</p>
        </div>
      </div>
    </div>
  );
}