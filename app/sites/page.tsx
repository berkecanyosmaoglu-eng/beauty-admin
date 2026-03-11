import AppShell from "@/components/admin/app-shell";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Filter,
  MessageCircle,
  Plus,
  Search,
  UserRound,
  XCircle,
} from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Chip from "@/components/ui/chip";
import Input from "@/components/ui/input";

const appointmentStats = [
  { label: "Bugünkü randevu", value: "28", note: "aktif kayıt", color: "text-cyan-400" },
  { label: "Onay bekleyen", value: "6", note: "müşteri dönüşü", color: "text-amber-400" },
  { label: "Tamamlanan", value: "17", note: "bugün", color: "text-emerald-400" },
  { label: "İptal / değişim", value: "4", note: "takip et", color: "text-fuchsia-400" },
];

const appointments = [
  {
    customer: "Zeynep Kaya",
    service: "Cilt Bakımı",
    staff: "Elif",
    date: "12 Mart 2026",
    time: "14:30",
    status: "Onaylandı",
    statusVariant: "success" as const,
    source: "WhatsApp",
    sourceVariant: "wa" as const,
    note: "Fiyat aldıktan sonra onay verdi",
  },
  {
    customer: "Dilan Aras",
    service: "Protez Tırnak",
    staff: "Büşra",
    date: "12 Mart 2026",
    time: "15:00",
    status: "Takip gerekli",
    statusVariant: "warning" as const,
    source: "Instagram",
    sourceVariant: "ig" as const,
    note: "DM’den rezervasyona yakın",
  },
  {
    customer: "Pınar Demir",
    service: "Cilt Bakımı",
    staff: "Ayşe",
    date: "13 Mart 2026",
    time: "11:00",
    status: "Teklif gönderildi",
    statusVariant: "mail" as const,
    source: "Mail",
    sourceVariant: "mail" as const,
    note: "Saat seçimi bekleniyor",
  },
  {
    customer: "Merve Aydın",
    service: "Lazer",
    staff: "Ayşe",
    date: "15 Mart 2026",
    time: "13:15",
    status: "Onaylandı",
    statusVariant: "success" as const,
    source: "WhatsApp",
    sourceVariant: "wa" as const,
    note: "Düzenli müşteri",
  },
];

const todayFlow = [
  {
    time: "12:30",
    title: "Zeynep Kaya · Cilt Bakımı",
    description: "Elif ile randevu",
    status: "başlıyor",
  },
  {
    time: "13:15",
    title: "Merve Aydın · Lazer",
    description: "Ayşe ile randevu",
    status: "hazır",
  },
  {
    time: "15:00",
    title: "Dilan Aras · Protez Tırnak",
    description: "Instagram lead dönüşümü",
    status: "takip",
  },
];

const actions = [
  "Boş slotlara sıcak lead öner",
  "Bugünkü iptalleri hızlıca doldur",
  "2 saatlik hatırlatma kuyruğunu kontrol et",
];

export default function AppointmentsPage() {
  return (
    <AppShell>
      <div className="min-h-screen px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <div className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
          <section className="rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(16,185,129,0.05),rgba(255,255,255,0.025))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300">
                  <CalendarDays size={13} />
                  Randevu ve operasyon yönetimi
                </div>

                <h1 className="mt-4 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[40px]">
                  Randevuları tek ekranda yönet.
                </h1>

                <p className="mt-3 max-w-xl text-[14px] leading-7 text-zinc-300">
                  Rezervasyonları takip et, durum değiştir, personel ve saat akışını
                  gör, iptalleri doldur ve müşterileri hızlıca uygun slota taşı.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <Button variant="primary">
                    <Plus size={14} />
                    Yeni randevu
                  </Button>
                  <Button variant="secondary">Takvimi görüntüle</Button>
                </div>
              </div>

              <div className="grid min-w-[248px] grid-cols-2 gap-2.5">
                {appointmentStats.map((item) => (
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
                <p className="text-[12px] text-zinc-400">Bugünkü Akış</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Sıradaki işlemler
                </h2>
              </div>
              <button className="rounded-2xl border border-white/8 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {todayFlow.map((item) => (
                <div
                  key={`${item.time}-${item.title}`}
                  className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[14px] font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-[13px] text-zinc-400">{item.description}</p>
                    </div>
                    <Chip variant="default">{item.time}</Chip>
                  </div>
                  <p className="mt-3 text-[11px] font-medium text-emerald-400">{item.status}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Randevu Listesi</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Tüm rezervasyonlar
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <Input
                  withSearchIcon
                  placeholder="Müşteri, hizmet, personel ara..."
                  wrapperClassName="w-[280px]"
                />
                <Button variant="secondary" size="sm">
                  <Filter size={14} />
                  Filtrele
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {appointments.map((appointment) => (
                <div
                  key={`${appointment.customer}-${appointment.time}`}
                  className="rounded-[22px] border border-white/6 bg-[#0d1726] p-4"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[15px] font-semibold text-white">
                          {appointment.customer}
                        </p>
                        <Chip variant={appointment.sourceVariant}>
                          {appointment.source}
                        </Chip>
                        <Chip variant={appointment.statusVariant}>
                          {appointment.status}
                        </Chip>
                      </div>

                      <div className="mt-2 grid gap-1">
                        <p className="text-[13px] text-zinc-300">
                          {appointment.service} · {appointment.staff}
                        </p>
                        <p className="text-[13px] text-zinc-400">
                          {appointment.date} · {appointment.time}
                        </p>
                        <p className="text-[12px] text-zinc-500">{appointment.note}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button variant="secondary" size="sm">
                        Düzenle
                      </Button>
                      <Button variant="secondary" size="sm">
                        Taşı
                      </Button>
                      <Button variant="secondary" size="sm">
                        İptal et
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div>
              <p className="text-[12px] text-zinc-400">Operasyon Önerileri</p>
              <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                Hızlı aksiyonlar
              </h2>
            </div>

            <div className="mt-4 space-y-3">
              {actions.map((action) => (
                <ActionCard key={action} title={action} />
              ))}
            </div>

            <div className="mt-5 rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
              <p className="text-[13px] font-medium text-zinc-200">Durum özeti</p>
              <div className="mt-3 space-y-2.5">
                <StatusLine
                  icon={<CheckCircle2 size={14} />}
                  title="Onaylı rezervasyon"
                  value="17"
                  color="text-emerald-400"
                />
                <StatusLine
                  icon={<Clock3 size={14} />}
                  title="Bekleyen yanıt"
                  value="6"
                  color="text-amber-400"
                />
                <StatusLine
                  icon={<XCircle size={14} />}
                  title="İptal / değişiklik"
                  value="4"
                  color="text-fuchsia-400"
                />
                <StatusLine
                  icon={<MessageCircle size={14} />}
                  title="Bot ile gelen"
                  value="21"
                  color="text-cyan-400"
                />
              </div>
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

function ActionCard({ title }: { title: string }) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
      <p className="text-[14px] font-semibold text-white">{title}</p>
      <p className="mt-1 text-[13px] leading-6 text-zinc-400">
        Bu aksiyonu tek tıkla uygulayabilecek operasyon kısayolu burada yer alacak.
      </p>
    </div>
  );
}

function StatusLine({
  icon,
  title,
  value,
  color,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[18px] border border-white/6 bg-white/5 px-3 py-3">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-white/5 p-2 text-zinc-300">{icon}</div>
        <p className="text-[13px] font-semibold text-white">{title}</p>
      </div>
      <p className={`text-[13px] font-semibold ${color}`}>{value}</p>
    </div>
  );
}