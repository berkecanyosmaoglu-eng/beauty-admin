import AppShell from "@/components/admin/app-shell";
import Card from "@/components/ui/card";
import { appointmentDate, formatDateTime, loadTenantData } from "@/lib/backend";

export default async function ContactsPage() {
  const { customers, appointments, errors } = await loadTenantData();
  const appointmentCountByCustomer = new Map<string, number>();

  appointments.forEach((a) => {
    if (a.customerId) {
      appointmentCountByCustomer.set(a.customerId, (appointmentCountByCustomer.get(a.customerId) ?? 0) + 1);
    }
  });

  const rows = customers
    .map((customer) => {
      const customerAppointments = appointments
        .filter((a) => a.customerId === customer.id)
        .map((a) => ({ ...a, date: appointmentDate(a) }))
        .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));

      return {
        id: customer.id,
        name: customer.name ?? "İsim bilgisi yok",
        phone: customer.phone ?? "Telefon bilgisi yok",
        email: customer.email ?? "E-posta bilgisi yok",
        totalAppointments: appointmentCountByCustomer.get(customer.id) ?? 0,
        lastAppointment: formatDateTime(customerAppointments[0]?.date ?? null),
      };
    })
    .sort((a, b) => b.totalAppointments - a.totalAppointments);

  return (
    <AppShell>
      <div className="min-h-screen space-y-4 px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <Card className="p-5">
          <h1 className="text-2xl font-semibold">Kişiler</h1>
          <p className="mt-2 text-sm text-zinc-400">Kaynak endpointler: /customers ve /appointments.</p>
          {errors.length > 0 ? <p className="mt-2 text-xs text-amber-300">{errors.join(" · ")}</p> : null}
        </Card>

        <Card className="p-5">
          {rows.length === 0 ? (
            <p className="text-sm text-zinc-400">Müşteri kaydı bulunamadı.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-zinc-400">
                  <tr>
                    <th className="pb-3">Ad</th>
                    <th className="pb-3">Telefon</th>
                    <th className="pb-3">E-posta</th>
                    <th className="pb-3">Randevu sayısı</th>
                    <th className="pb-3">Son randevu</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id} className="border-t border-white/10">
                      <td className="py-3">{row.name}</td>
                      <td className="py-3 text-zinc-300">{row.phone}</td>
                      <td className="py-3 text-zinc-300">{row.email}</td>
                      <td className="py-3">{row.totalAppointments}</td>
                      <td className="py-3 text-zinc-300">{row.lastAppointment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </AppShell>
  );
}
