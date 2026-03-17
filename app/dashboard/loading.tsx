import AppShell from "@/components/admin/app-shell";

export default function DashboardLoading() {
  return (
    <AppShell>
      <div className="min-h-screen px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <div className="animate-pulse space-y-4">
          <div className="h-44 rounded-[26px] bg-white/5" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-40 rounded-[22px] bg-white/5" />
            ))}
          </div>
          <div className="grid gap-4 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-72 rounded-[24px] bg-white/5" />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
