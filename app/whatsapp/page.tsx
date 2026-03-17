import AppShell from "@/components/admin/app-shell";
import { buildInboxConfig } from "@/components/inbox/build-config";
import InboxPage from "@/components/inbox/inbox-page";
import { loadTenantData } from "@/lib/backend";

export default async function WhatsAppPage() {
  const data = await loadTenantData();
  const config = buildInboxConfig({ variant: "whatsapp", ...data });

  return (
    <AppShell>
      <InboxPage config={config} />
    </AppShell>
  );
}
