import AppShell from "@/components/admin/app-shell";
import Card from "@/components/ui/card";
import { loadTenantData } from "@/lib/backend";

export default async function SettingsPage() {
  const { staff, services, errors } = await loadTenantData();

  return (
    <AppShell>
      <div className="min-h-screen space-y-4 px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <Card className="p-5">
          <h1 className="text-2xl font-semibold">Ayarlar</h1>
          <p className="mt-2 text-sm text-zinc-400">Bu sayfa yalnızca mevcut endpointlerden doğrulanabilen alanları gösterir.</p>
          {errors.length > 0 ? <p className="mt-2 text-xs text-amber-300">{errors.join(" · ")}</p> : null}
        </Card>
        <Card className="p-5 text-sm text-zinc-300">
          <p>Personel kaydı: {staff.length}</p>
          <p className="mt-1">Aktif personel: {staff.filter((s) => s.isActive !== false).length}</p>
          <p className="mt-1">Hizmet kaydı: {services.length}</p>
          <p className="mt-3 text-xs text-zinc-500">Webhook, kanal anahtarları ve otomasyon kuralı endpointleri olmadığı için bu ayarlar gösterilmiyor.</p>
        </Card>
      </div>
    </AppShell>
  );
}
