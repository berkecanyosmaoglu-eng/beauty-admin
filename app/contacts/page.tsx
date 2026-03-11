import AppShell from "@/components/admin/app-shell";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Filter,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Star,
  UserRound,
} from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Chip from "@/components/ui/chip";
import Input from "@/components/ui/input";

const customerStats = [
  { label: "Toplam müşteri", value: "1.284", note: "aktif kayıt", color: "text-cyan-400" },
  { label: "Yeni müşteri", value: "86", note: "bu ay", color: "text-emerald-400" },
  { label: "VIP müşteri", value: "34", note: "yüksek değer", color: "text-amber-400" },
  { label: "Sıcak lead", value: "19", note: "takip bekliyor", color: "text-fuchsia-400" },
];

const customers = [
  {
    name: "Zeynep Kaya",
    phone: "+90 5xx xxx xx xx",
    channel: "WhatsApp",
    channelVariant: "wa" as const,
    status: "Aktif müşteri",
    tags: ["VIP", "Cilt Bakımı"],
    lastAction: "Bugün 11:03",
    nextAppointment: "12 Mart · 14:30",
    value: "₺8.400",
  },
  {
    name: "Dilan Aras",
    phone: "@dilanaras",
    channel: "Instagram",
    channelVariant: "ig" as const,
    status: "Sıcak lead",
    tags: ["Protez Tırnak", "Reklam"],
    lastAction: "Bugün 12:16",
    nextAppointment: "Henüz yok",
    value: "₺2.200",
  },
  {
    name: "Pınar Demir",
    phone: "pinar@example.com",
    channel: "Mail",
    channelVariant: "mail" as const,
    status: "Teklif bekliyor",
    tags: ["Teklif", "Randevu"],
    lastAction: "Bugün 11:24",
    nextAppointment: "Takip gerekli",
    value: "₺1.600",
  },
  {
    name: "Merve Aydın",
    phone: "+90 5xx xxx xx xx",
    channel: "WhatsApp",
    channelVariant: "wa" as const,
    status: "Düzenli müşteri",
    tags: ["Lazer", "Sadık müşteri"],
    lastAction: "Dün 18:20",
    nextAppointment: "15 Mart · 13:15",
    value: "₺12.300",
  },
];

const segments = [
  "VIP müşteriler",
  "Son 30 gün yeni gelenler",
  "Randevuya dönmeyen lead’ler",
  "Instagram’dan gelenler",
];

export default function ContactsPage() {
  return (
    <AppShell>
      <div className="min-h-screen px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <div className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
          <section className="rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.05),rgba(255,255,255,0.025))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300">
                  <UserRound size={13} />
                  CRM ve müşteri yönetimi
                </div>

                <h1 className="mt-4 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[40px]">
                  Müşterileri tek merkezden yönet.
                </h1>

                <p className="mt-3 max-w-xl text-[14px] leading-7 text-zinc-300">
                  WhatsApp, Instagram ve mail’den gelen tüm kişileri birleştir;
                  etiketle, segmente et, takip et ve randevuya çevir.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <Button variant="primary">Yeni müşteri ekle</Button>
                  <Button variant="secondary">Segment oluştur</Button>
                </div>
              </div>

              <div className="grid min-w-[248px] grid-cols-2 gap-2.5">
                {customerStats.map((item) => (
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
                <p className="text-[12px] text-zinc-400">Akıllı Segmentler</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Hızlı listeler
                </h2>
              </div>
              <button className="rounded-2xl border border-white/8 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              {segments.map((segment) => (
                <div
                  key={segment}
                  className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4"
                >
                  <p className="text-[14px] font-semibold text-white">{segment}</p>
                  <p className="mt-1 text-[13px] text-zinc-400">
                    Bu segmenti açıp filtrelenmiş müşteri listesini görüntüle.
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Müşteri Listesi</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Tüm kişiler
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <Input
                  withSearchIcon
                  placeholder="İsim, telefon, mail ara..."
                  wrapperClassName="w-[260px]"
                />
                <Button variant="secondary" size="sm">
                  <Filter size={14} />
                  Filtrele
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {customers.map((customer) => (
                <div
                  key={customer.name}
                  className="rounded-[22px] border border-white/6 bg-[#0d1726] p-4"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[15px] font-semibold text-white">{customer.name}</p>
                        <Chip variant={customer.channelVariant}>{customer.channel}</Chip>
                        <Chip variant="default">{customer.status}</Chip>
                      </div>

                      <p className="mt-2 text-[13px] text-zinc-400">{customer.phone}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {customer.tags.map((tag) => (
                          <Chip key={tag} variant="muted">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-2 text-left lg:min-w-[220px] lg:text-right">
                      <div>
                        <p className="text-[11px] text-zinc-500">Son işlem</p>
                        <p className="text-[13px] text-zinc-200">{customer.lastAction}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-500">Sonraki randevu</p>
                        <p className="text-[13px] text-zinc-200">{customer.nextAppointment}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-500">Toplam değer</p>
                        <p className="text-[13px] font-semibold text-emerald-300">
                          {customer.value}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button variant="secondary" size="sm">
                      Detay
                    </Button>
                    <Button variant="secondary" size="sm">
                      Mesaj geçmişi
                    </Button>
                    <Button variant="secondary" size="sm">
                      Randevu oluştur
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div>
              <p className="text-[12px] text-zinc-400">Müşteri Özeti</p>
              <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                Öne çıkan profil
              </h2>
            </div>

            <div className="mt-4 space-y-3">
              <ProfileCard
                icon={<Star size={15} />}
                title="VIP müşteri"
                text="Zeynep Kaya son 6 ayda yüksek harcama yapan müşteri."
              />
              <ProfileCard
                icon={<CalendarDays size={15} />}
                title="Yaklaşan randevu"
                text="Bugün ve yarın toplam 12 müşterinin aktif rezervasyonu var."
              />
              <ProfileCard
                icon={<Phone size={15} />}
                title="Takip bekleyenler"
                text="4 sıcak lead hâlâ rezervasyona dönmedi; manuel temas önerilir."
              />
            </div>

            <div className="mt-5 rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
              <p className="text-[13px] font-medium text-zinc-200">Kanal dağılımı</p>
              <div className="mt-3 space-y-2.5">
                <ChannelRow
                  icon={<MessageCircle size={14} />}
                  title="WhatsApp"
                  count="742"
                  chip={<Chip variant="wa">ana kanal</Chip>}
                />
                <ChannelRow
                  icon={<Instagram size={14} />}
                  title="Instagram"
                  count="391"
                  chip={<Chip variant="ig">lead ağırlıklı</Chip>}
                />
                <ChannelRow
                  icon={<Mail size={14} />}
                  title="Mail"
                  count="151"
                  chip={<Chip variant="mail">teklif / bilgi</Chip>}
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

function ProfileCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-white/5 p-2.5 text-zinc-300">{icon}</div>
        <div>
          <p className="text-[14px] font-semibold text-white">{title}</p>
          <p className="mt-1 text-[13px] leading-6 text-zinc-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ChannelRow({
  icon,
  title,
  count,
  chip,
}: {
  icon: ReactNode;
  title: string;
  count: string;
  chip: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[18px] border border-white/6 bg-white/5 px-3 py-3">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-white/5 p-2 text-zinc-300">{icon}</div>
        <div>
          <p className="text-[13px] font-semibold text-white">{title}</p>
          <p className="text-[11px] text-zinc-500">{count} kişi</p>
        </div>
      </div>
      {chip}
    </div>
  );
}