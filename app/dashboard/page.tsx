import AppShell from "@/components/admin/app-shell";

const statCards = [
  { title: "Bugünkü Randevu", value: "24", sub: "+4 dünden fazla" },
  { title: "Aktif Konuşma", value: "16", sub: "7 sohbet botta" },
  { title: "Toplam Müşteri", value: "1.284", sub: "Bu ay +86 yeni kişi" },
  { title: "Doluluk Oranı", value: "%82", sub: "Bu hafta güçlü gidiyor" },
];

const activities = [
  "Elif Kaya için 14:30 lazer randevusu oluşturuldu",
  "Ayşe Yılmaz Instagram DM’den lead bıraktı",
  "2 saat sonra hatırlatma kuyruğa alındı",
  "Jarvis 6 müşteriye otomatik cevap verdi",
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="min-h-screen bg-[#08111d] p-8 text-white">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">Genel Bakış</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">Dashboard</h1>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            Sistem aktif
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-sm text-zinc-400">{card.title}</p>
              <p className="mt-4 text-4xl font-semibold">{card.value}</p>
              <p className="mt-3 text-sm text-zinc-500">{card.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Haftalık Performans</p>
                <h2 className="mt-1 text-xl font-semibold">Mesaj ve randevu akışı</h2>
              </div>
              <div className="text-sm text-zinc-500">Son 7 gün</div>
            </div>

            <div className="flex h-[320px] items-end gap-4">
              {[55, 72, 48, 88, 64, 91, 76].map((n, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-3">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-violet-600 to-cyan-400"
                    style={{ height: `${n * 2.4}px` }}
                  />
                  <span className="text-xs text-zinc-500">
                    {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">Son Aktiviteler</p>
            <h2 className="mt-1 text-xl font-semibold">Canlı hareketler</h2>

            <div className="mt-6 space-y-4">
              {activities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-black/10 p-4 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}