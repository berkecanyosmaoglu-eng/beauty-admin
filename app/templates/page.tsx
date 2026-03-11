import AppShell from "@/components/admin/app-shell";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  FileText,
  Filter,
  Instagram,
  Mail,
  MessageCircle,
  Plus,
  Search,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Chip from "@/components/ui/chip";
import Input from "@/components/ui/input";

const templateStats = [
  { label: "Toplam şablon", value: "36", note: "aktif kullanım", color: "text-cyan-400" },
  { label: "WhatsApp", value: "14", note: "hazır akış", color: "text-emerald-400" },
  { label: "Instagram", value: "11", note: "DM cevapları", color: "text-fuchsia-400" },
  { label: "Mail", value: "11", note: "teklif / bilgi", color: "text-blue-400" },
];

const templates = [
  {
    title: "Karşılama mesajı",
    description: "Yeni gelen kullanıcıyı karşılayan ilk otomatik mesaj.",
    channel: "WhatsApp",
    channelVariant: "wa" as const,
    category: "İlk temas",
    usage: "Günde ~28 kullanım",
  },
  {
    title: "Fiyat bilgisi cevabı",
    description: "Hizmet fiyatı soran müşteriye standart ama doğal cevap.",
    channel: "Instagram",
    channelVariant: "ig" as const,
    category: "Fiyat",
    usage: "Günde ~16 kullanım",
  },
  {
    title: "Randevu hatırlatma maili",
    description: "Randevu öncesi gönderilecek hatırlatma şablonu.",
    channel: "Mail",
    channelVariant: "mail" as const,
    category: "Hatırlatma",
    usage: "Günde ~9 kullanım",
  },
  {
    title: "İptal sonrası yeniden yönlendirme",
    description: "İptal edilen müşteriye yeni saat önerme metni.",
    channel: "WhatsApp",
    channelVariant: "wa" as const,
    category: "İptal / yeniden kazanım",
    usage: "Haftada ~12 kullanım",
  },
];

const categories = [
  "Karşılama",
  "Fiyat",
  "Randevu",
  "Hatırlatma",
  "İptal",
  "Takip",
];

const aiSuggestions = [
  "Soğuk görünen müşterilere daha kısa ve güven veren ton kullan.",
  "Instagram DM için daha sıcak ve sosyal bir dil öner.",
  "Mail tarafında kurumsal ama kısa yanıt şablonları oluştur.",
];

export default function TemplatesPage() {
  return (
    <AppShell>
      <div className="min-h-screen px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <div className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
          <section className="rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(217,70,239,0.05),rgba(255,255,255,0.025))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300">
                  <WandSparkles size={13} />
                  Hazır cevap ve akış yönetimi
                </div>

                <h1 className="mt-4 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[40px]">
                  Şablonları tek yerden yönet.
                </h1>

                <p className="mt-3 max-w-xl text-[14px] leading-7 text-zinc-300">
                  WhatsApp, Instagram ve mail için hazır cevapları burada düzenle;
                  tonu standartlaştır, dönüşüm odaklı metinler üret.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <Button variant="primary">
                    <Plus size={14} />
                    Yeni şablon
                  </Button>
                  <Button variant="secondary">AI ile öneri üret</Button>
                </div>
              </div>

              <div className="grid min-w-[248px] grid-cols-2 gap-2.5">
                {templateStats.map((item) => (
                  <MiniStat
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    note={item.note}
                    noteClass={item.color}
                  />
                ))}
              </div>
            </div>
          </section>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Kategori Yapısı</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Hızlı filtreler
                </h2>
              </div>
              <button className="rounded-2xl border border-white/8 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Chip key={category} variant="muted">
                  {category}
                </Chip>
              ))}
            </div>

            <div className="mt-5 rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
              <p className="text-[13px] font-medium text-zinc-200">Not</p>
              <p className="mt-2 text-[13px] leading-6 text-zinc-400">
                İleride burada sektör bazlı hazır şablon paketleri olacak:
                güzellik, klinik, turizm, e-ticaret gibi.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Şablon Listesi</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Tüm metinler
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <Input
                  withSearchIcon
                  placeholder="Şablon ara..."
                  wrapperClassName="w-[240px]"
                />
                <Button variant="secondary" size="sm">
                  <Filter size={14} />
                  Filtrele
                </Button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {templates.map((template) => (
                <div
                  key={template.title}
                  className="rounded-[22px] border border-white/6 bg-[#0d1726] p-4"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[15px] font-semibold text-white">
                          {template.title}
                        </p>
                        <Chip variant={template.channelVariant}>{template.channel}</Chip>
                        <Chip variant="muted">{template.category}</Chip>
                      </div>

                      <p className="mt-2 text-[13px] leading-6 text-zinc-400">
                        {template.description}
                      </p>

                      <p className="mt-2 text-[12px] text-zinc-500">{template.usage}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button variant="secondary" size="sm">
                        Düzenle
                      </Button>
                      <Button variant="secondary" size="sm">
                        Kopyala
                      </Button>
                      <Button variant="secondary" size="sm">
                        Test et
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div>
              <p className="text-[12px] text-zinc-400">AI Önerileri</p>
              <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                Ton ve içerik geliştirme
              </h2>
            </div>

            <div className="mt-4 space-y-3">
              {aiSuggestions.map((suggestion) => (
                <SuggestionCard key={suggestion} text={suggestion} />
              ))}
            </div>

            <div className="mt-5 rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
              <p className="text-[13px] font-medium text-zinc-200">
                Kanal dağılımı
              </p>

              <div className="mt-3 space-y-2.5">
                <ChannelRow
                  icon={<MessageCircle size={14} />}
                  title="WhatsApp"
                  count="14"
                  chip={<Chip variant="wa">aktif</Chip>}
                />
                <ChannelRow
                  icon={<Instagram size={14} />}
                  title="Instagram"
                  count="11"
                  chip={<Chip variant="ig">aktif</Chip>}
                />
                <ChannelRow
                  icon={<Mail size={14} />}
                  title="Mail"
                  count="11"
                  chip={<Chip variant="mail">aktif</Chip>}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="secondary" size="sm">
                AI metin üret
              </Button>
              <Button variant="secondary" size="sm">
                Şablonları dışa aktar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function MiniStat({
  label,
  value,
  note,
  noteClass,
}: {
  label: string;
  value: string;
  note: string;
  noteClass: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-black/10 p-3.5 backdrop-blur-sm">
      <p className="text-[11px] text-zinc-400">{label}</p>
      <p className="mt-2 text-[24px] font-semibold tracking-tight">{value}</p>
      <p className={`mt-1 text-[11px] font-medium ${noteClass}`}>{note}</p>
    </div>
  );
}

function SuggestionCard({ text }: { text: string }) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-white/5 p-2.5 text-zinc-300">
          <Sparkles size={14} />
        </div>
        <p className="text-[13px] leading-6 text-zinc-300">{text}</p>
      </div>
    </div>
  );
}

function ChannelRow({
  icon,
  title,
  count,
  chip,
}: {
  icon: ReactNode;
  title: string;
  count: string;
  chip: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[18px] border border-white/6 bg-white/5 px-3 py-3">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-white/5 p-2 text-zinc-300">{icon}</div>
        <div>
          <p className="text-[13px] font-semibold text-white">{title}</p>
          <p className="text-[11px] text-zinc-500">{count} şablon</p>
        </div>
      </div>
      {chip}
    </div>
  );
}