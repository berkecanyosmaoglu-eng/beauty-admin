import { apiGet } from "@/lib/api";

export type ApiAppointment = {
  id: string;
  date?: string;
  startAt?: string;
  startTime?: string;
  createdAt?: string;
  customerName?: string;
  customerId?: string;
  serviceName?: string;
  serviceId?: string;
  staffName?: string;
  staffId?: string;
  status?: string;
};

export type ApiCustomer = {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  createdAt?: string;
};

export type ApiStaff = {
  id: string;
  name?: string;
  isActive?: boolean;
};

export type ApiService = {
  id: string;
  name?: string;
};

export type TenantData = {
  appointments: ApiAppointment[];
  customers: ApiCustomer[];
  staff: ApiStaff[];
  services: ApiService[];
  errors: string[];
};

export function getTenantId(): string | null {
  return process.env.NEXT_PUBLIC_TENANT_ID ?? null;
}

async function safeGet<T>(promise: Promise<T>): Promise<{ data: T | null; error: string | null }> {
  try {
    return { data: await promise, error: null };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Bilinmeyen API hatası";
    return { data: null, error: message };
  }
}

export async function loadTenantData(): Promise<TenantData> {
  const tenantId = getTenantId();
  if (!tenantId) {
    return {
      appointments: [],
      customers: [],
      staff: [],
      services: [],
      errors: ["NEXT_PUBLIC_TENANT_ID tanımlı değil."],
    };
  }

  const [appointmentsRes, customersRes, staffRes, servicesRes] = await Promise.all([
    safeGet(apiGet<ApiAppointment[]>("/appointments", { tenantId })),
    safeGet(apiGet<ApiCustomer[]>("/customers", { tenantId })),
    safeGet(apiGet<ApiStaff[]>("/staff", { tenantId })),
    safeGet(apiGet<ApiService[]>("/services", { tenantId })),
  ]);

  return {
    appointments: appointmentsRes.data ?? [],
    customers: customersRes.data ?? [],
    staff: staffRes.data ?? [],
    services: servicesRes.data ?? [],
    errors: [appointmentsRes.error, customersRes.error, staffRes.error, servicesRes.error].filter(
      Boolean
    ) as string[],
  };
}

export function parseDate(value?: string): Date | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function appointmentDate(item: ApiAppointment): Date | null {
  return parseDate(item.startAt) ?? parseDate(item.startTime) ?? parseDate(item.date) ?? parseDate(item.createdAt);
}

export function formatDateTime(value: Date | null): string {
  if (!value) return "Tarih bilgisi yok";
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}
