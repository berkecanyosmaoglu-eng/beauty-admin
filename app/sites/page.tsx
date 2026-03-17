import AppShell from "@/components/admin/app-shell";
import Card from "@/components/ui/card";
import { appointmentDate, loadTenantData } from "@/lib/backend";

export default async function SitesPage() {
  const { appointments, services, staff, errors } = await loadTenantData();
  const now = new Date();

  const upcoming = appointments
    .map((a) => ({ ...a, date: appointmentDate(a) }))
    .filter((a) => a.date && a.date >= now)
    .sort((a, b) => a.date!.getTime() - b.date!.getTime())
    .slice(0, 15);

  const serviceById = new Map(services.map((s) => [s.id, s.name]));
  const staffById = new Map(staff.map((s) => [s.id, s.name]));

  return (
    <AppShell>
      <div className="min-h-screen space-y-4 px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <Card className="p-5">
          <h1 className="text-2xl font-semibold">Randevu Akışı</h1>
          <p className="mt-2 text-sm text-zinc-400">Kaynak endpoint: /appointments (+ /services, /staff eşleştirmesi).</p>
          {errors.length > 0 ? <p className="mt-2 text-xs text-amber-300">{errors.join(" · ")}</p> : null}
        </Card>

        <Card className="p-5">
          {upcoming.length === 0 ? (
            <p className="text-sm text-zinc-400">Yaklaşan randevu kaydı bulunamadı.</p>
          ) : (
            <div className="space-y-2">
              {upcoming.map((item) => (
                <div key={item.id} className="rounded-xl border border-white/10 p-3 text-sm">
                  <p className="font-medium">{item.customerName ?? "Müşteri bilgisi yok"}</p>
                  <p className="text-zinc-400">{item.serviceName ?? (item.serviceId ? serviceById.get(item.serviceId) : null) ?? "Hizmet bilgisi yok"}</p>
                  <p className="text-zinc-400">{item.staffName ?? (item.staffId ? staffById.get(item.staffId) : null) ?? "Personel bilgisi yok"}</p>
                  <p className="text-zinc-500">{item.date ? item.date.toLocaleString("tr-TR") : "Tarih bilgisi yok"}</p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </AppShell>
  );
}
