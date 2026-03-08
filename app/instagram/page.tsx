import AppShell from "@/components/admin/app-shell";

export default function InstagramPage() {
  return (
    <AppShell>
      <div className="flex min-h-screen items-center justify-center bg-[#08111d] p-10 text-white">
        <div className="rounded-3xl border border-white/5 bg-white/5 px-10 py-8 text-center">
          <p className="text-sm text-zinc-400">Yakında</p>
          <h1 className="mt-2 text-3xl font-semibold">Instagram Paneli</h1>
        </div>
      </div>
    </AppShell>
  );
}