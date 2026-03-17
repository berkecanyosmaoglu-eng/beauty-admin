import AppShell from "@/components/admin/app-shell";
import Card from "@/components/ui/card";
import { loadTenantData } from "@/lib/backend";

export default async function HomePage() {
  const { customers, appointments, errors } = await loadTenantData();

  return (
    <AppShell>
      <div className="min-h-screen space-y-4 px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <Card className="p-5">
          <h1 className="text-2xl font-semibold">Genel Bakış</h1>
          <p className="mt-2 text-sm text-zinc-400">Bu sayfa canlı API verilerinden özet gösterir.</p>
          {errors.length > 0 ? <p className="mt-2 text-xs text-amber-300">{errors.join(" · ")}</p> : null}
        </Card>
        <Card className="p-5 text-sm text-zinc-300">
          <p>Toplam müşteri: {customers.length}</p>
          <p className="mt-1">Toplam randevu: {appointments.length}</p>
        </Card>
      </div>
    </AppShell>
  );
}
