import AppShell from "@/components/admin/app-shell";
import Card from "@/components/ui/card";
import { loadTenantData } from "@/lib/backend";

export default async function MailPage() {
  const { customers, appointments, errors } = await loadTenantData();

  return (
    <AppShell>
      <div className="min-h-screen space-y-4 px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <Card className="p-5">
          <h1 className="text-2xl font-semibold">Mail</h1>
          <p className="mt-2 text-sm text-zinc-400">Mail içeriği endpointi bulunmadığı için bu sayfada uydurma konuşma listesi gösterilmiyor.</p>
          {errors.length > 0 ? <p className="mt-2 text-xs text-amber-300">{errors.join(" · ")}</p> : null}
        </Card>
        <Card className="p-5 text-sm text-zinc-300">
          <p>Gerçek API’den erişilebilen referans veriler:</p>
          <ul className="mt-2 list-disc pl-5 text-zinc-400">
            <li>Müşteri sayısı: {customers.length}</li>
            <li>Randevu sayısı: {appointments.length}</li>
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
