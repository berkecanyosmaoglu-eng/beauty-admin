"use client";

import { useMemo, useState } from "react";
import type { InboxChat, InboxConfig } from "./inbox-types";
import ChatComposer from "./chat-composer";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import CustomerPanel from "./customer-panel";
import InboxSidebar from "./inbox-sidebar";

type InboxPageProps = {
  config: InboxConfig;
};

export default function InboxPage({ config }: InboxPageProps) {
  const initialChat = useMemo<InboxChat | null>(
    () => config.chats.find((chat) => chat.active) ?? config.chats[0] ?? null,
    [config.chats]
  );

  const [selectedChat, setSelectedChat] = useState<InboxChat | null>(initialChat);
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");
  const [mobileDetailsOpen, setMobileDetailsOpen] = useState(false);

  const handleSelectChat = (chat: InboxChat) => {
    setSelectedChat(chat);
    setMobileView("chat");
    setMobileDetailsOpen(false);
  };

  return (
    <div className="flex h-[calc(100vh-56px)] overflow-hidden bg-[#08111d] text-white lg:h-screen">
      <div
        className={`${
          mobileView === "list" ? "flex" : "hidden"
        } h-full w-full md:flex md:w-[340px] xl:w-[360px]`}
      >
        <InboxSidebar
          config={config}
          selectedChatId={selectedChat?.id ?? ""}
          onSelectChat={handleSelectChat}
        />
      </div>

      <div
        className={`${
          mobileView === "chat" ? "flex" : "hidden"
        } min-w-0 flex-1 flex-col bg-[#07111f] md:flex`}
      >
        {!selectedChat ? (
          <div className="flex flex-1 items-center justify-center p-6 text-sm text-zinc-400">
            Bu kanal için gösterilecek kayıt bulunamadı.
          </div>
        ) : (
          <>
        <ChatHeader
          config={config}
          chat={selectedChat ?? config.chats[0]}
          onBack={() => setMobileView("list")}
          onOpenDetails={() => setMobileDetailsOpen(true)}
        />
        <ChatMessages messages={config.messages} config={config} />
        <ChatComposer config={config} />
          </>
        )}
      </div>

      <CustomerPanel
        config={config}
        mobileOpen={mobileDetailsOpen}
        onCloseMobile={() => setMobileDetailsOpen(false)}
      />
    </div>
  );
}