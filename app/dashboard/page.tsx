import AppShell from "@/components/admin/app-shell";
import {
  type ApiAppointment,
  loadTenantData,
  appointmentDate,
} from "@/lib/backend";
import {
  AlertTriangle,
  CalendarDays,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
  Instagram,
  Mail,
} from "lucide-react";

function isSameDay(left: Date, right: Date): boolean {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function formatHour(date: Date | null): string {
  if (!date) return "Saat bilgisi yok";
  return new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit" }).format(date);
}

function formatShortDay(date: Date): string {
  return new Intl.DateTimeFormat("tr-TR", { weekday: "short" }).format(date);
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function buildAppointmentLabel(
  appointment: ApiAppointment,
  customerById: Map<string, string>,
  serviceById: Map<string, string>,
  staffById: Map<string, string>
) {
  return {
    id: appointment.id,
    time: formatHour(appointmentDate(appointment)),
    customer:
      appointment.customerName ??
      (appointment.customerId ? customerById.get(appointment.customerId) : null) ??
      "Müşteri bilgisi yok",
    service:
      appointment.serviceName ??
      (appointment.serviceId ? serviceById.get(appointment.serviceId) : null) ??
      "Hizmet bilgisi yok",
    staff:
      appointment.staffName ??
      (appointment.staffId ? staffById.get(appointment.staffId) : null) ??
      "Personel bilgisi yok",
  };
}

export default async function DashboardPage() {
  const { appointments, customers, staff, services, errors } = await loadTenantData();

  const customerById = new Map(customers.map((item) => [item.id, item.name ?? "İsimsiz müşteri"]));
  const staffById = new Map(staff.map((item) => [item.id, item.name ?? "Atanmamış personel"]));
  const serviceById = new Map(services.map((item) => [item.id, item.name ?? "Belirsiz hizmet"]));

  const now = new Date();
  const todayStart = startOfDay(now);

  const datedAppointments = appointments
    .map((item) => ({ item, date: appointmentDate(item) }))
    .filter((item) => item.date)
    .sort((a, b) => a.date!.getTime() - b.date!.getTime());

  const todayAppointments = datedAppointments
    .filter((entry) => isSameDay(entry.date!, now))
    .map(({ item }) => buildAppointmentLabel(item, customerById, serviceById, staffById));

  const todayAppointmentsCount = todayAppointments.length;
  const activeStaffCount = staff.filter((member) => member.isActive !== false).length;

  const sevenDaySeries = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(todayStart);
    day.setDate(todayStart.getDate() - (6 - index));
    const nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);

    const count = datedAppointments.filter(
      ({ date }) => date && date.getTime() >= day.getTime() && date.getTime() < nextDay.getTime()
    ).length;

    return {
      label: formatShortDay(day),
      count,
    };
  });

  const maxWeekly = Math.max(...sevenDaySeries.map((item) => item.count), 1);

  return (
    <AppShell>
      <div className="min-h-screen px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        {errors.length > 0 ? (
          <div className="mb-4 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-amber-100">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="mt-0.5" />
              <div>
                <p className="text-sm font-semibold">Bazı dashboard verileri yüklenemedi.</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-amber-200/90">
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        <div className="grid gap-4 xl:grid-cols-[1.55fr_0.95fr]">
          <section className="rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(217,70,239,0.05),rgba(255,255,255,0.025))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300">
                  <Sparkles size={13} />
                  Beauty SaaS Control Center
                </div>

                <h1 className="mt-4 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[42px]">
                  Operasyon verilerin canlı olarak güncellendi.
                </h1>

                <p className="mt-3 max-w-xl text-[14px] leading-7 text-zinc-300">
                  Randevu, müşteri, personel ve hizmet metrikleri API üzerinden gerçek zamanlı
                  okunuyor.
                </p>
              </div>

              <div className="grid min-w-[248px] grid-cols-2 gap-2.5">
                <MiniStat label="Bugünkü randevu" value={String(todayAppointmentsCount)} note="Takvimden türetildi" noteClass="text-emerald-400" />
                <MiniStat label="Toplam müşteri" value={String(customers.length)} note="/customers endpointi" noteClass="text-fuchsia-400" />
                <MiniStat label="Aktif personel" value={String(activeStaffCount)} note="/staff endpointi" noteClass="text-cyan-400" />
                <MiniStat label="Hizmet sayısı" value={String(services.length)} note="/services endpointi" noteClass="text-amber-400" />
              </div>
            </div>
          </section>

          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
            <div>
              <p className="text-[12px] text-zinc-400">Kanal Performansı</p>
              <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Bugünün akışı</h2>
            </div>

            <div className="mt-4 space-y-2.5">
              {[
                {
                  name: "WhatsApp",
                  detail: "Kanal bazlı konuşma endpointi gerekli",
                  accent: "from-emerald-400 to-emerald-500",
                  icon: MessageCircle,
                },
                {
                  name: "Instagram",
                  detail: "Kanal bazlı DM istatistiği endpointi gerekli",
                  accent: "from-fuchsia-500 via-pink-500 to-orange-400",
                  icon: Instagram,
                },
                {
                  name: "Mail",
                  detail: "Mail konuşma/list endpointi gerekli",
                  accent: "from-cyan-400 to-blue-500",
                  icon: Mail,
                },
              ].map((channel) => {
                const Icon = channel.icon;
                return (
                  <div key={channel.name} className="rounded-[20px] border border-white/6 bg-[#0d1726] p-3.5">
                    <div className="flex items-start gap-3.5">
                      <div className={`rounded-2xl bg-gradient-to-br p-2.5 ${channel.accent}`}>
                        <Icon size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[13px] text-zinc-300">{channel.name}</p>
                        <p className="mt-1 text-[20px] font-semibold leading-none">Veri yok</p>
                        <p className="mt-2 text-[12px] text-zinc-500">{channel.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Bugünkü Randevu",
              value: String(todayAppointmentsCount),
              change: `${appointments.length} toplam`,
              sub: "Randevu listesi üzerinden hesaplandı",
              icon: CalendarDays,
            },
            {
              title: "Toplam Müşteri",
              value: String(customers.length),
              change: "canlı",
              sub: "Müşteri havuzundaki kişi sayısı",
              icon: Users,
            },
            {
              title: "Aktif Personel",
              value: String(activeStaffCount),
              change: `${staff.length} kayıt`,
              sub: "isActive=false dışındaki tüm kayıtlar",
              icon: TrendingUp,
            },
            {
              title: "Hizmet Kataloğu",
              value: String(services.length),
              change: "canlı",
              sub: "Satışa açık hizmet adedi",
              icon: MessageCircle,
            },
          ].map((item) => {
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
                <p className="text-[12px] text-zinc-400">Randevular</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Bugün sıradakiler</h2>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
                {todayAppointments.length} kayıt
              </div>
            </div>

            {todayAppointments.length === 0 ? (
              <div className="mt-4 rounded-[20px] border border-dashed border-white/10 bg-[#0d1726] p-4 text-sm text-zinc-400">
                Bugün için randevu bulunamadı veya tarih alanı eksik.
              </div>
            ) : (
              <div className="mt-4 space-y-2.5">
                {todayAppointments.map((item) => (
                  <div key={item.id} className="rounded-[20px] border border-white/6 bg-[#0d1726] p-3.5">
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
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Canlı Konuşmalar</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Anlık durum</h2>
              </div>
              <div className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-300">
                endpoint gerekli
              </div>
            </div>

            <div className="mt-4 rounded-[20px] border border-dashed border-white/10 bg-[#0d1726] p-4 text-[13px] leading-6 text-zinc-400">
              Canlı konuşma/lead listesi mevcut endpoint setinde bulunmuyor.
            </div>
          </section>

          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Son Aktiviteler</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Sistem hareketleri</h2>
              </div>
              <div className="rounded-full bg-amber-500/10 px-3 py-1 text-[11px] text-amber-300">
                endpoint gerekli
              </div>
            </div>

            <div className="mt-4 rounded-[20px] border border-dashed border-white/10 bg-[#0d1726] p-4 text-[13px] leading-6 text-zinc-400">
              Sistem aktivite akışı için audit/log endpointi gerekli.
            </div>
          </section>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[24px] border border-white/6 bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Haftalık Trend</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">Randevu yoğunluğu</h2>
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-zinc-300">
                son 7 gün
              </div>
            </div>

            <div className="mt-6 flex h-[240px] items-end gap-3">
              {sevenDaySeries.map((item) => (
                <div key={item.label} className="flex flex-1 flex-col items-center gap-2.5">
                  <div
                    className="w-full rounded-t-[18px] bg-gradient-to-t from-fuchsia-500 via-cyan-400 to-emerald-400 shadow-[0_8px_16px_rgba(0,0,0,0.16)]"
                    style={{ height: `${Math.max((item.count / maxWeekly) * 180, 10)}px` }}
                  />
                  <span className="text-[11px] text-zinc-500">{item.label}</span>
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
                veri yok
              </div>
            </div>

            <div className="mt-4 rounded-[20px] border border-dashed border-white/10 bg-[#0d1726] p-4 text-[13px] leading-6 text-zinc-400">
              Öneri üretebilmek için performans/öneri endpointi gerekli.
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
