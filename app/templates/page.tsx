import AppShell from "@/components/admin/app-shell";
import Card from "@/components/ui/card";
import { loadTenantData } from "@/lib/backend";

export default async function TemplatesPage() {
  const { services, errors } = await loadTenantData();

  return (
    <AppShell>
      <div className="min-h-screen space-y-4 px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <Card className="p-5">
          <h1 className="text-2xl font-semibold">Şablonlar</h1>
          <p className="mt-2 text-sm text-zinc-400">Şablon endpointi olmadığı için hazır metin listesi kaldırıldı.</p>
          {errors.length > 0 ? <p className="mt-2 text-xs text-amber-300">{errors.join(" · ")}</p> : null}
        </Card>
        <Card className="p-5 text-sm text-zinc-300">
          <p>Servis adları şablon kategorisi için referans olabilir:</p>
          {services.length === 0 ? (
            <p className="mt-2 text-zinc-400">Servis verisi bulunamadı.</p>
          ) : (
            <div className="mt-2 flex flex-wrap gap-2">
              {services.map((service) => (
                <span key={service.id} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  {service.name ?? "İsimsiz hizmet"}
                </span>
              ))}
            </div>
          )}
        </Card>
      </div>
    </AppShell>
  );
}
