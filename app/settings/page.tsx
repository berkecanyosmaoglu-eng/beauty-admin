import AppShell from "@/components/admin/app-shell";
import type { ReactNode } from "react";
import {
  Bell,
  Bot,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Globe,
  Instagram,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Chip from "@/components/ui/chip";
import Input from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="min-h-screen px-4 py-4 text-white md:px-5 md:py-5 xl:px-6">
        <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(217,70,239,0.05),rgba(255,255,255,0.025))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300">
                  <Sparkles size={13} />
                  Kanal ve bot yönetimi
                </div>

                <h1 className="mt-4 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[40px]">
                  Sistem ayarlarını buradan yönet.
                </h1>

                <p className="mt-3 max-w-xl text-[14px] leading-7 text-zinc-300">
                  WhatsApp, Instagram, mail, bot davranışı, çalışma saatleri,
                  takeover ve bildirim ayarlarını tek merkezden kontrol et.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <Button variant="primary">Değişiklikleri kaydet</Button>
                  <Button variant="secondary">Test mesajı gönder</Button>
                </div>
              </div>

              <div className="grid min-w-[240px] grid-cols-2 gap-2.5">
                <MiniSettingStat
                  label="Aktif kanal"
                  value="3"
                  note="WA + IG + Mail"
                  noteClass="text-emerald-400"
                />
                <MiniSettingStat
                  label="Bot modu"
                  value="Hibrit"
                  note="AI + guardrails"
                  noteClass="text-fuchsia-400"
                />
                <MiniSettingStat
                  label="Takeover"
                  value="Açık"
                  note="İnsan devralabilir"
                  noteClass="text-cyan-400"
                />
                <MiniSettingStat
                  label="Sessiz saat"
                  value="23:00"
                  note="Gece modu başlar"
                  noteClass="text-amber-400"
                />
              </div>
            </div>
          </section>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-zinc-400">Sistem Durumu</p>
                <h2 className="mt-1 text-[20px] font-semibold tracking-tight">
                  Genel sağlık
                </h2>
              </div>
              <Chip variant="success">stabil</Chip>
            </div>

            <div className="mt-4 space-y-3">
              <StatusRow
                icon={<MessageCircle size={15} />}
                title="WhatsApp bağlantısı"
                description="Webhook ve mesaj akışı aktif"
                chip={<Chip variant="wa">bağlı</Chip>}
              />
              <StatusRow
                icon={<Instagram size={15} />}
                title="Instagram bağlantısı"
                description="DM akışı senkron"
                chip={<Chip variant="ig">bağlı</Chip>}
              />
              <StatusRow
                icon={<Mail size={15} />}
                title="Mail bağlantısı"
                description="Gelen kutusu erişimi açık"
                chip={<Chip variant="mail">bağlı</Chip>}
              />
              <StatusRow
                icon={<Bot size={15} />}
                title="Bot motoru"
                description="Yanıtlayıcı aktif çalışıyor"
                chip={<Chip variant="success">aktif</Chip>}
              />
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]">
          <Card className="p-5">
            <SectionTitle
              title="Kanal Bağlantıları"
              subtitle="Müşteri kanallarını buradan yönet"
            />

            <div className="mt-4 space-y-3">
              <ChannelCard
                icon={<MessageCircle size={16} />}
                title="WhatsApp"
                subtitle="Twilio / Meta bağlantısı"
                chip={<Chip variant="wa">aktif</Chip>}
                buttonText="Bağlantıyı yönet"
              />
              <ChannelCard
                icon={<Instagram size={16} />}
                title="Instagram"
                subtitle="DM ve lead akışı"
                chip={<Chip variant="ig">aktif</Chip>}
                buttonText="Bağlantıyı yönet"
              />
              <ChannelCard
                icon={<Mail size={16} />}
                title="Mail"
                subtitle="Gelen kutusu ve yanıt sistemi"
                chip={<Chip variant="mail">aktif</Chip>}
                buttonText="Bağlantıyı yönet"
              />
            </div>
          </Card>

          <Card className="p-5">
            <SectionTitle
              title="Bot Davranışı"
              subtitle="Yanıt mantığı ve takeover kuralları"
            />

            <div className="mt-4 space-y-4">
              <ToggleRow
                title="Bot otomatik yanıtlasın"
                description="Gelen mesajlara bot ilk yanıtı versin"
                enabled
              />
              <ToggleRow
                title="İnsan devralma açık"
                description="Operatör istediğinde konuşmayı devralsın"
                enabled
              />
              <ToggleRow
                title="Çalışma saati dışında sessiz mod"
                description="Gece saatlerinde yalnızca bilgi mesajı ver"
                enabled
              />
              <ToggleRow
                title="Konuşma özeti üret"
                description="Her sıcak lead için otomatik özet çıkar"
                enabled={false}
              />
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]">
          <Card className="p-5">
            <SectionTitle
              title="İşletme Ayarları"
              subtitle="Temel operasyon bilgileri"
            />

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <FormField label="İşletme adı">
                <Input defaultValue="Beauty Admin Demo" />
              </FormField>

              <FormField label="Zaman dilimi">
                <Input defaultValue="Europe/Istanbul" />
              </FormField>

              <FormField label="Açılış saati">
                <Input defaultValue="09:00" />
              </FormField>

              <FormField label="Kapanış saati">
                <Input defaultValue="20:00" />
              </FormField>

              <div className="md:col-span-2">
                <FormField label="Adres / kısa açıklama">
                  <Input defaultValue="Merkez şube · güzellik ve bakım hizmetleri" />
                </FormField>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <SectionTitle
              title="Bildirim ve Hatırlatma"
              subtitle="Rezervasyon ve operasyon uyarıları"
            />

            <div className="mt-4 space-y-4">
              <ToggleRow
                title="2 saat önce müşteri hatırlatması"
                description="Randevudan 2 saat önce WhatsApp mesajı gönder"
                enabled
              />
              <ToggleRow
                title="İşletme sahibine rezervasyon bildirimi"
                description="Yeni rezervasyon oluşunca anlık haber ver"
                enabled
              />
              <ToggleRow
                title="İptal / değişiklik bildirimi"
                description="Tüm kritik değişikliklerde uyarı oluştur"
                enabled
              />
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]">
          <Card className="p-5">
            <SectionTitle
              title="Güvenlik ve Yetki"
              subtitle="Erişim ve kontrol ayarları"
            />

            <div className="mt-4 space-y-3">
              <SecurityRow
                icon={<ShieldCheck size={15} />}
                title="Yönetici oturumu"
                description="Tek cihazdan aktif yönetim"
              />
              <SecurityRow
                icon={<UserRound size={15} />}
                title="Operatör erişimi"
                description="Rol bazlı erişim sonradan açılacak"
              />
              <SecurityRow
                icon={<Globe size={15} />}
                title="Webhook koruması"
                description="İmzalı istek doğrulama aktif"
              />
            </div>
          </Card>

          <Card className="p-5">
            <SectionTitle
              title="Hazır Eylemler"
              subtitle="Hızlı yönetim butonları"
            />

            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="secondary" size="sm">
                Kanal testi yap
              </Button>
              <Button variant="secondary" size="sm">
                Botu yeniden başlat
              </Button>
              <Button variant="secondary" size="sm">
                Şablonları güncelle
              </Button>
              <Button variant="secondary" size="sm">
                Hatırlatma kuyruğunu gör
              </Button>
              <Button variant="secondary" size="sm">
                Logları incele
              </Button>
            </div>

            <div className="mt-5 rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
              <p className="text-[13px] font-medium text-zinc-200">
                Öneri
              </p>
              <p className="mt-2 text-[13px] leading-6 text-zinc-400">
                Şu an en iyi operasyon modu: WhatsApp ve Instagram’da bot aktif,
                takeover açık, rezervasyon sonrası işletme sahibine anlık bildirim.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <p className="text-[12px] text-zinc-400">{subtitle}</p>
      <h2 className="mt-1 text-[20px] font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function MiniSettingStat({
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

function StatusRow({
  icon,
  title,
  description,
  chip,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  chip: ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-[#0d1726] p-3.5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="mt-0.5 rounded-xl bg-white/5 p-2 text-zinc-300">
            {icon}
          </div>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-white">{title}</p>
            <p className="mt-1 text-[13px] text-zinc-400">{description}</p>
          </div>
        </div>
        {chip}
      </div>
    </div>
  );
}

function ChannelCard({
  icon,
  title,
  subtitle,
  chip,
  buttonText,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  chip: ReactNode;
  buttonText: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="rounded-xl bg-white/5 p-2.5 text-zinc-300">{icon}</div>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-white">{title}</p>
            <p className="mt-1 text-[13px] text-zinc-400">{subtitle}</p>
          </div>
        </div>
        {chip}
      </div>

      <div className="mt-4">
        <Button variant="secondary" size="sm">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

function ToggleRow({
  title,
  description,
  enabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
      <div className="min-w-0">
        <p className="text-[14px] font-semibold text-white">{title}</p>
        <p className="mt-1 text-[13px] leading-6 text-zinc-400">{description}</p>
      </div>

      <div
        className={`mt-1 flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition ${
          enabled ? "bg-emerald-500/80" : "bg-white/10"
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white transition ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-[12px] font-medium text-zinc-400">{label}</p>
      {children}
    </div>
  );
}

function SecurityRow({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-[#0d1726] p-4">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-white/5 p-2.5 text-zinc-300">{icon}</div>
        <div>
          <p className="text-[14px] font-semibold text-white">{title}</p>
          <p className="mt-1 text-[13px] leading-6 text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  );
}