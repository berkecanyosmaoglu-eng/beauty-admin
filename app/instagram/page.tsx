import AppShell from "@/components/admin/app-shell";
import InboxPage from "@/components/inbox/inbox-page";
import { instagramConfig } from "@/components/inbox/inbox-data";

export default function InstagramPage() {
  return (
    <AppShell>
      <InboxPage config={instagramConfig} />
    </AppShell>
  );
}