import AppShell from "@/components/admin/app-shell";
import Card from "@/components/ui/card";
import { appointmentDate, loadTenantData } from "@/lib/backend";

export default async function UsagePage() {
  const { appointments, customers, services, staff, errors } = await loadTenantData();
  const now = new Date();
  const last30 = appointments.filter((a) => {
    const d = appointmentDate(a);
    if (!d) return false;
    return now.getTime() - d.getTime() <= 1000 * 60 * 60 * 24 * 30;
  });

  return (
    <AppShell>
      <div className="min-h-screen space-y-4 px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <Card className="p-5">
          <h1 className="text-2xl font-semibold">Kullanım</h1>
          <p className="mt-2 text-sm text-zinc-400">Metrikler frontend tarafında /appointments, /customers, /services, /staff verilerinden türetildi.</p>
          {errors.length > 0 ? <p className="mt-2 text-xs text-amber-300">{errors.join(" · ")}</p> : null}
        </Card>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card className="p-4"><p className="text-zinc-400 text-sm">Toplam müşteri</p><p className="text-2xl font-semibold">{customers.length}</p></Card>
          <Card className="p-4"><p className="text-zinc-400 text-sm">Toplam randevu</p><p className="text-2xl font-semibold">{appointments.length}</p></Card>
          <Card className="p-4"><p className="text-zinc-400 text-sm">Son 30 gün randevu</p><p className="text-2xl font-semibold">{last30.length}</p></Card>
          <Card className="p-4"><p className="text-zinc-400 text-sm">Aktif personel</p><p className="text-2xl font-semibold">{staff.filter((s) => s.isActive !== false).length}</p></Card>
        </div>

        <Card className="p-5">
          <p className="text-sm text-zinc-400">Hizmet sayısı: <span className="text-white">{services.length}</span></p>
          <p className="mt-2 text-xs text-zinc-500">Maliyet, kanal bazlı konuşma ve dönüşüm oranı gibi alanlar mevcut endpointlerde bulunmadığı için gösterilemiyor.</p>
        </Card>
      </div>
    </AppShell>
  );
}
