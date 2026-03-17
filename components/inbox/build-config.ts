import { ApiAppointment, ApiCustomer, ApiService, ApiStaff, appointmentDate, formatDateTime } from "@/lib/backend";
import type { InboxConfig } from "./inbox-types";

type BuildParams = {
  variant: "whatsapp" | "instagram";
  appointments: ApiAppointment[];
  customers: ApiCustomer[];
  services: ApiService[];
  staff: ApiStaff[];
};

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((v) => v[0]?.toUpperCase() ?? "")
    .join("") || "--";
}

export function buildInboxConfig({ variant, appointments, customers, services, staff }: BuildParams): InboxConfig {
  const customerById = new Map(customers.map((c) => [c.id, c]));
  const serviceById = new Map(services.map((s) => [s.id, s]));
  const staffById = new Map(staff.map((s) => [s.id, s]));

  const list = appointments
    .map((a) => ({ appointment: a, date: appointmentDate(a) }))
    .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));

  const chats = list.slice(0, 12).map(({ appointment, date }, index) => {
    const customerName = appointment.customerName ?? (appointment.customerId ? customerById.get(appointment.customerId)?.name : null) ?? "Müşteri bilgisi yok";
    const serviceName = appointment.serviceName ?? (appointment.serviceId ? serviceById.get(appointment.serviceId)?.name : null) ?? "Hizmet bilgisi yok";

    return {
      id: appointment.id,
      name: customerName,
      initials: initials(customerName),
      message: serviceName,
      time: date ? new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit" }).format(date) : "--:--",
      unread: index === 0 ? 1 : 0,
      active: index === 0,
      tag: appointment.status ?? "Durum bilgisi yok",
      channel: variant === "whatsapp" ? "WhatsApp" : "Instagram",
    };
  });

  const selected = chats[0];
  const selectedAppointment = list[0]?.appointment;
  const selectedDate = list[0]?.date ?? null;
  const service = selectedAppointment?.serviceName ?? (selectedAppointment?.serviceId ? serviceById.get(selectedAppointment.serviceId)?.name : null) ?? "Hizmet bilgisi yok";
  const assignedStaff = selectedAppointment?.staffName ?? (selectedAppointment?.staffId ? staffById.get(selectedAppointment.staffId)?.name : null) ?? "Personel bilgisi yok";

  return {
    variant,
    title: variant === "whatsapp" ? "WhatsApp" : "Instagram DM",
    subtitle: `${chats.length} randevu kaydı`,
    statusText: "Canlı API verisi",
    accent: variant === "whatsapp" ? "green" : "pink",
    activeChannelLabel: variant === "whatsapp" ? "WhatsApp" : "Instagram",
    customerName: selected?.name ?? "Müşteri yok",
    customerInitials: selected?.initials ?? "--",
    customerStatus: selectedAppointment?.status ?? "Durum bilgisi yok",
    quickActions: ["Randevu detayını aç", "Müşteriyi görüntüle", "Personeli görüntüle"],
    chats,
    messages: selectedAppointment
      ? [
          { from: "them", text: `Talep edilen hizmet: ${service}`, time: selected?.time ?? "--:--" },
          { from: "me", text: `Atanan personel: ${assignedStaff}`, time: selected?.time ?? "--:--" },
          { from: "me", text: `Randevu zamanı: ${formatDateTime(selectedDate)}`, time: selected?.time ?? "--:--" },
        ]
      : [{ from: "them", text: "Bu kanal için gösterilecek randevu kaydı bulunamadı.", time: "--:--" }],
    customerCard: {
      customerName: selected?.name ?? "Müşteri bulunamadı",
      customerPhone: selectedAppointment?.customerId ? customerById.get(selectedAppointment.customerId)?.phone ?? "Telefon bilgisi yok" : "Telefon bilgisi yok",
      labels: [variant === "whatsapp" ? "WhatsApp" : "Instagram", selectedAppointment?.status ?? "Durum bilgisi yok"],
      interestTitle: service,
      interestDescription: "Kaynak: /appointments + /services",
      nextAppointmentTitle: selectedDate ? formatDateTime(selectedDate) : "Yaklaşan randevu yok",
      nextAppointmentDescription: `Atanan personel: ${assignedStaff}`,
      lastActivity: selectedDate ? `Son kayıt: ${formatDateTime(selectedDate)}` : "Aktivite kaydı yok",
      botNote: "Bu alanlar mevcut endpointlerden türetilmiştir.",
    },
  };
}
