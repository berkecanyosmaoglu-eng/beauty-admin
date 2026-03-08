import AppShell from "@/components/admin/app-shell";
import InboxPage from "@/components/inbox/inbox-page";
import { whatsappConfig } from "@/components/inbox/inbox-data";

export default function WhatsAppPage() {
  return (
    <AppShell>
      <InboxPage config={whatsappConfig} />
    </AppShell>
  );
}