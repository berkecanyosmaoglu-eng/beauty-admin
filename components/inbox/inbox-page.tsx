import { InboxConfig } from "./inbox-types";
import ChatComposer from "./chat-composer";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import CustomerPanel from "./customer-panel";
import InboxSidebar from "./inbox-sidebar";

type InboxPageProps = {
  config: InboxConfig;
};

export default function InboxPage({ config }: InboxPageProps) {
  return (
    <div className="flex h-screen bg-[#08111d] text-white">
      <InboxSidebar config={config} />

      <div className="flex min-w-0 flex-1 flex-col bg-[#07111f]">
        <ChatHeader config={config} />
        <ChatMessages messages={config.messages} />
        <ChatComposer />
      </div>

      <CustomerPanel config={config} />
    </div>
  );
}