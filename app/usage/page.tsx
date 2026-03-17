import AppShell from "@/components/admin/app-shell";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Clock3,
  Instagram,
  Mail,
  MessageCircle,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import Card from "@/components/ui/card";
import Chip from "@/components/ui/chip";
import Button from "@/components/ui/button";

const usageStats = [
  {
    label: "Toplam konuşma",
    value: "1.942",
    note: "son 30 gün",
    color: "text-cyan-400",
  },
  {
    label: "Bot yanıtı",
    value: "1.487",
    note: "%76 otomasyon",
    color: "text-emerald-400",
  },
  {
    label: "İnsan takeover",
    value: "182",
    note: "manuel müdahale",
    color: "text-fuchsia-400",
  },
  {
    label: "Tahmini gelir",
    value: "₺86.400",
    note: "randevu bazlı",
    color: "text-amber-400",
  },
];

const channelUsage = [
  {
    title: "WhatsApp",
    count: "1.102 konuşma",
    conversion: "%38 dönüşüm",
    variant: "wa" as const,
    icon: MessageCircle,
  },
  {
    title: "Instagram",
    count: "612 DM",
    conversion: "%24 dönüşüm",
    variant: "ig" as const,
    icon: Instagram,
  },
  {
    title: "Mail",
    count: "228 e-posta",
    conversion: "%16 dönüşüm",
    variant: "mail" as const,
    icon: Mail,
  },
];

const topMetrics = [
  "En iyi dönüşüm saati: 13:00 - 16:00",
  "Instagram lead’leri öğleden sonra daha iyi kapanıyor",
  "WhatsApp botu fiyat sorularında güçlü performans veriyor",
  "Mail tarafında teklif dönüş süresi uzun, iyileştirilebilir",
];

const funnel = [
  { label: "Yeni konuşma", value: 100 },
  { label: "İlgilenen", value: 72 },
  { label: "Sıcak lead", value: 41 },
  { label: "Randevu", value: 28 },
  { label: "Tamamlanan", value: 17 },
];

const costRows = [
  {
    title: "Mesaj maliyeti",
    value: "₺2.940",
    note: "tüm kanal maliyeti",
    icon: Wallet,
  },
  {
    title: "Bot kullanım yükü",
    value: "1.487 yanıt",
    note: "otomatik çözüm",
    icon: Bot,
  },
  {
    title: "Ortalama cevap süresi",
    value: "1.8 dk",
    note: "operasyon hızı",
    icon: Clock3,
  },
];

export default function UsagePage() {
  return (
    <AppShell>
      <div className="min-h-screen px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <div className="grid gap-4 xl:grid-cols-[1.45fr_0.85fr]">
          <section className="rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.05),rgba(255,255,255,0.025))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300">
                  <BarChart3 size={13} />
                  Kullanım ve performans analizi
                </div>

                <h1 className="mt-4 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[40px]">
                  Sistemin verisini tek bakışta gör.
                </h1>

                <p className="mt-3 max-w-xl text-[14px] leading-7 text-zinc-300">
                  Konuşma hacmi, bot verimi, dönüşüm oranı, maliyet ve kanal bazlı
                  performansı buradan takip et. Bu ekran yatırımcı sunumlarında da iş yapar.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <Button variant="primary">Rapor indir</Button>
                  <Button variant="secondary">Dönüşüm analizi</Button>
                </div>
              </div>

              <div className="grid min-w-[248px] grid-cols-2 gap-2.5">
                {usageStats.map((item) => (
                  <MiniStat
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    note={item.note}
                    noteClass={item.color}
                  />
                ))}
              </div>
            </div>
          </section>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Öne Çıkan İçgörüler</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Akıllı yorumlar
                </h2>
              </div>
              <button className="rounded-2xl border border-white/8 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              {topMetrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4"
                >
                  <p className="text-[13px] leading-6 text-zinc-300">{metric}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-4">
          {channelUsage.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl border border-white/6 bg-white/5 p-2.5 text-zinc-300">
                    <Icon size={16} />
                  </div>
                  <Chip variant={item.variant}>{item.title}</Chip>
                </div>

                <p className="mt-3 text-[15px] font-semibold text-white">{item.count}</p>
                <p className="mt-1.5 text-[13px] text-zinc-400">{item.conversion}</p>
              </Card>
            );
          })}

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="rounded-2xl border border-white/6 bg-white/5 p-2.5 text-zinc-300">
                <TrendingUp size={16} />
              </div>
              <Chip variant="success">iyi</Chip>
            </div>

            <p className="mt-3 text-[15px] font-semibold text-white">Toplam dönüşüm</p>
            <p className="mt-1.5 text-[13px] text-zinc-400">%34 genel performans</p>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Dönüşüm Hunisi</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Konuşmadan tamamlanan işleme
                </h2>
              </div>
              <Chip variant="default">son 30 gün</Chip>
            </div>

            <div className="mt-6 space-y-3">
              {funnel.map((step, index) => (
                <div key={step.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[13px] font-medium text-zinc-200">{step.label}</p>
                    <p className="text-[13px] text-zinc-400">{step.value}</p>
                  </div>
                  <div className="h-3 rounded-full bg-white/5">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400"
                      style={{ width: `${Math.max(18, step.value)}%` }}
                    />
                  </div>
                  {index < funnel.length - 1 ? <div className="h-1" /> : null}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div>
              <p className="text-[12px] text-zinc-400">Maliyet ve Verim</p>
              <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                Operasyon özeti
              </h2>
            </div>

            <div className="mt-4 space-y-3">
              {costRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div
                    key={row.title}
                    className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-white/5 p-2.5 text-zinc-300">
                        <Icon size={15} />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-white">{row.title}</p>
                        <p className="mt-1 text-[13px] text-zinc-200">{row.value}</p>
                        <p className="mt-1 text-[12px] text-zinc-500">{row.note}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]">
          <Card className="p-5">
            <div>
              <p className="text-[12px] text-zinc-400">Ekip ve Bot Verimi</p>
              <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                Kaynak dağılımı
              </h2>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <MetricCard
                icon={<Users size={15} />}
                title="İnsan müdahalesi"
                value="182"
                note="yüksek değerli konuşmalar"
              />
              <MetricCard
                icon={<Bot size={15} />}
                title="Bot çözdü"
                value="1.487"
                note="tam otomatik akış"
              />
              <MetricCard
                icon={<MessageCircle size={15} />}
                title="WhatsApp yoğunluğu"
                value="%57"
                note="ana trafik kaynağı"
              />
              <MetricCard
                icon={<Instagram size={15} />}
                title="Instagram lead"
                value="%31"
                note="üst funnel kaynağı"
              />
            </div>
          </Card>

          <Card className="p-5">
            <div>
              <p className="text-[12px] text-zinc-400">Önerilen Aksiyonlar</p>
              <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                Hızlı optimizasyon
              </h2>
            </div>

            <div className="mt-4 space-y-3">
              <Recommendation text="Instagram’da fiyat sorularına daha kısa şablon kullan." />
              <Recommendation text="Mail teklif cevaplarını 2 adım daha kısa hale getir." />
              <Recommendation text="16:00 sonrası boş slotlar için bot öneri akışı çalıştır." />
              <Recommendation text="WhatsApp’ta sıcak lead etiketine göre takeover tetikle." />
            </div>
          </Card>
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
      <p className="mt-2 text-[24px] font-semibold tracking-tight">{value}</p>
      <p className={`mt-1 text-[11px] font-medium ${noteClass}`}>{note}</p>
    </div>
  );
}

function MetricCard({
  icon,
  title,
  value,
  note,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
      <div className="rounded-xl bg-white/5 p-2.5 text-zinc-300 w-fit">{icon}</div>
      <p className="mt-3 text-[14px] font-semibold text-white">{title}</p>
      <p className="mt-2 text-[24px] font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-1 text-[12px] text-zinc-500">{note}</p>
    </div>
  );
}

function Recommendation({ text }: { text: string }) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
      <p className="text-[13px] leading-6 text-zinc-300">{text}</p>
    </div>
  );
}