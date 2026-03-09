"use client";

import AppShell from "@/components/admin/app-shell";
import {
  Archive,
  ArrowLeft,
  Filter,
  Mail,
  MoreHorizontal,
  Reply,
  ReplyAll,
  Search,
  Send,
  Star,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type MailItem = {
  id: string;
  fromName: string;
  fromEmail: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  starred?: boolean;
  labels?: string[];
};

const mailFolders = [
  { key: "inbox", label: "Gelen Kutusu", count: 28 },
  { key: "starred", label: "Yıldızlı", count: 6 },
  { key: "sent", label: "Gönderilen", count: 14 },
  { key: "drafts", label: "Taslaklar", count: 3 },
  { key: "spam", label: "Spam", count: 1 },
  { key: "trash", label: "Çöp Kutusu", count: 0 },
];

const mailLabels = [
  "VIP",
  "Teklif",
  "Randevu",
  "Instagram Lead",
  "WhatsApp Lead",
];

const mailItems: MailItem[] = [
  {
    id: "mail-1",
    fromName: "Pınar Demir",
    fromEmail: "pinar@example.com",
    subject: "Fiyat bilgisi ve uygun saat talebi",
    preview:
      "Merhaba, cilt bakımı için hafta içi uygun saat ve fiyat bilgisi alabilir miyim?",
    time: "11:24",
    unread: true,
    starred: true,
    labels: ["Teklif", "Randevu"],
  },
  {
    id: "mail-2",
    fromName: "Instagram Reklam Formu",
    fromEmail: "lead@meta-mail.com",
    subject: "Yeni lead: Dilan Aras",
    preview:
      "Kullanıcı reklama tıklayıp bilgi talebi bıraktı. Hizmet: Protez Tırnak",
    time: "10:58",
    unread: true,
    labels: ["Instagram Lead"],
  },
  {
    id: "mail-3",
    fromName: "Zeynep Kaya",
    fromEmail: "zeynepkaya@gmail.com",
    subject: "Randevu saat değişikliği mümkün mü?",
    preview: "Yarınki 15:00 randevumu 16:00 civarına alma şansımız var mı?",
    time: "09:41",
    unread: false,
    labels: ["Randevu"],
  },
  {
    id: "mail-4",
    fromName: "Berna Demir",
    fromEmail: "berna.demir@hotmail.com",
    subject: "Lazer paketi hakkında",
    preview: "Merhaba, lazer için 6 seans paket fiyatınızı öğrenmek istiyorum.",
    time: "Dün",
    unread: false,
    labels: ["Teklif"],
  },
];

const openedMail = {
  fromName: "Pınar Demir",
  fromEmail: "pinar@example.com",
  to: "info@beautyadmin.com",
  subject: "Fiyat bilgisi ve uygun saat talebi",
  time: "Bugün 11:24",
  body: `Merhaba,

Cilt bakımı için hafta içi uygun saat ve fiyat bilgisi alabilir miyim?

Özellikle salı veya çarşamba günü öğleden sonra boşluk varsa bilgi verirseniz çok sevinirim.

Teşekkürler,
Pınar Demir`,
};

export default function MailRoutePage() {
  const initialMail = useMemo(() => mailItems[0], []);
  const [selectedMailId, setSelectedMailId] = useState(initialMail.id);
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");
  const [mobileMetaOpen, setMobileMetaOpen] = useState(false);

  const selectedMail = mailItems.find((m) => m.id === selectedMailId) ?? mailItems[0];

  const handleSelectMail = (mailId: string) => {
    setSelectedMailId(mailId);
    setMobileView("detail");
  };

  return (
    <AppShell>
      <div className="flex h-[calc(100vh-0px)] overflow-hidden bg-[#08111d] text-white">
        <div className="hidden xl:flex w-[260px] shrink-0 flex-col border-r border-white/5 bg-[#0d1726]">
          <div className="border-b border-white/5 p-5">
            <button className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg">
              Yeni Mail
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {mailFolders.map((folder) => (
                <button
                  key={folder.key}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
                    folder.key === "inbox"
                      ? "bg-cyan-500/10 text-cyan-300"
                      : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <span>{folder.label}</span>
                  <span className="text-xs text-zinc-500">{folder.count}</span>
                </button>
              ))}
            </div>

            <div className="mt-6">
              <p className="px-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Etiketler
              </p>
              <div className="mt-3 flex flex-wrap gap-2 px-3">
                {mailLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            mobileView === "list" ? "flex" : "hidden"
          } w-full md:flex md:w-[380px] shrink-0 flex-col border-r border-white/5 bg-[#0f1724]`}
        >
          <div className="border-b border-white/5 p-4 md:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h1 className="text-xl font-semibold tracking-tight">Mail</h1>
                <p className="mt-1 text-sm text-zinc-400">Gelen kutusu · 28 mail</p>
              </div>
              <button className="rounded-xl bg-white/5 p-2 text-zinc-300">
                <Filter size={18} />
              </button>
            </div>

            <div className="mt-4 flex h-11 items-center rounded-2xl border border-white/5 bg-[#0a1320] px-3">
              <Search size={16} className="text-zinc-500" />
              <input
                placeholder="Mail ara..."
                className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            <div className="space-y-2">
              {mailItems.map((item) => {
                const active = item.id === selectedMailId;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectMail(item.id)}
                    className={`block w-full rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-cyan-400/25 bg-cyan-400/10"
                        : "border-transparent hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p
                            className={`truncate text-sm ${
                              item.unread ? "font-semibold text-white" : "text-zinc-200"
                            }`}
                          >
                            {item.fromName}
                          </p>
                          {item.starred ? (
                            <Star size={13} className="fill-amber-300 text-amber-300" />
                          ) : null}
                        </div>

                        <p
                          className={`mt-1 truncate text-sm ${
                            item.unread ? "font-medium text-zinc-100" : "text-zinc-300"
                          }`}
                        >
                          {item.subject}
                        </p>

                        <p className="mt-2 truncate text-xs text-zinc-500">{item.preview}</p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.labels?.map((label) => (
                            <span
                              key={label}
                              className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-zinc-300"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>

                      <span className="shrink-0 text-[11px] text-zinc-500">{item.time}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`${
            mobileView === "detail" ? "flex" : "hidden"
          } min-w-0 flex-1 flex-col bg-[#07111f] md:flex`}
        >
          <div className="flex h-[78px] items-center justify-between border-b border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-4 md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={() => setMobileView("list")}
                className="rounded-xl bg-white/5 p-2 text-zinc-300 md:hidden"
              >
                <ArrowLeft size={18} />
              </button>

              <div className="min-w-0">
                <p className="truncate text-lg font-semibold text-white md:text-xl">
                  {selectedMail.subject}
                </p>
                <p className="mt-1 truncate text-xs text-zinc-400">
                  {selectedMail.fromName} · {selectedMail.fromEmail}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMetaOpen(true)}
                className="rounded-xl bg-white/5 p-2 text-zinc-300 xl:hidden"
              >
                <UserRound size={18} />
              </button>
              <button className="rounded-xl bg-white/5 p-2 text-zinc-300">
                <Archive size={18} />
              </button>
              <button className="rounded-xl bg-white/5 p-2 text-zinc-300">
                <Trash2 size={18} />
              </button>
              <button className="rounded-xl bg-white/5 p-2 text-zinc-300">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-5 md:px-8 md:py-6">
            <div className="mx-auto max-w-4xl rounded-[28px] border border-white/5 bg-white/5 p-5 md:p-6">
              <div className="flex flex-col gap-4 border-b border-white/5 pb-5 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 font-semibold text-white">
                    PD
                  </div>

                  <div>
                    <p className="font-semibold text-white">{openedMail.fromName}</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      {openedMail.fromEmail} → {openedMail.to}
                    </p>
                    <p className="mt-2 text-xs text-zinc-500">{openedMail.time}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="rounded-xl bg-white/5 px-3 py-2 text-sm text-zinc-300">
                    <Reply size={16} className="mr-2 inline-block" />
                    Yanıtla
                  </button>
                  <button className="rounded-xl bg-white/5 px-3 py-2 text-sm text-zinc-300">
                    <ReplyAll size={16} className="mr-2 inline-block" />
                    Tümünü yanıtla
                  </button>
                </div>
              </div>

              <div className="mt-6">
                {openedMail.body.split("\n").map((line, i) => (
                  <p key={i} className="mb-4 text-sm leading-7 text-zinc-200">
                    {line || "\u00A0"}
                  </p>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/5 bg-[#0d1726] p-4">
                <p className="text-sm font-medium text-zinc-300">Hızlı aksiyonlar</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="rounded-full bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-300">
                    Randevuya çevir
                  </button>
                  <button className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
                    Hazır şablon gönder
                  </button>
                  <button className="rounded-full bg-amber-500/10 px-3 py-1.5 text-xs text-amber-300">
                    Teklif etiketi ekle
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 bg-[#0d1726] px-4 py-4 md:px-6">
            <div className="mb-3 flex flex-wrap gap-2">
              <button className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
                Hazır yanıt
              </button>
              <button className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
                Dosya ekle
              </button>
              <button className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
                Etiketle
              </button>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0a1320] px-4 py-3">
              <Mail size={18} className="text-zinc-500" />
              <input
                placeholder="Yanıt yazın..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
              <button className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 p-2.5 text-white transition hover:opacity-90">
                <Send size={17} />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex w-[340px] shrink-0 flex-col border-l border-white/5 bg-[#0d1726]">
          <MailMetaPanel />
        </div>

        {mobileMetaOpen ? (
          <div className="fixed inset-0 z-50 xl:hidden">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileMetaOpen(false)}
            />
            <div className="absolute inset-x-0 bottom-0 top-[20%] rounded-t-[28px] border-t border-white/10 bg-[#0d1726]">
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                <p className="text-lg font-semibold text-white">Mail Detayı</p>
                <button
                  onClick={() => setMobileMetaOpen(false)}
                  className="rounded-xl bg-white/5 p-2 text-zinc-300"
                >
                  <X size={18} />
                </button>
              </div>

              <MailMetaPanel />
            </div>
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}

function MailMetaPanel() {
  return (
    <div className="flex-1 overflow-y-auto p-5">
      <div className="space-y-4">
        <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
          <p className="text-xs text-zinc-400">Gönderen</p>
          <p className="mt-2 text-lg font-semibold text-white">Pınar Demir</p>
          <p className="mt-1 text-sm text-zinc-400">pinar@example.com</p>
        </div>

        <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
          <p className="text-xs text-zinc-400">Etiketler</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
              Teklif
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              Randevu
            </span>
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
              Sıcak lead
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
          <p className="text-xs text-zinc-400">Özet</p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Kullanıcı fiyat ve uygun saat bilgisi istiyor. Hafta içi öğleden sonra boşluk arıyor.
          </p>
        </div>

        <div className="rounded-3xl border border-white/5 bg-white/5 p-4">
          <p className="text-xs text-zinc-400">Önerilen işlem</p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Uygun saat önerisi + fiyat şablonu gönderilip hızlıca rezervasyona çekilebilir.
          </p>
        </div>
      </div>
    </div>
  );
}