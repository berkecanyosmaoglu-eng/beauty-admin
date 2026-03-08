import ChatComposer from "./chat-composer";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import CustomerPanel from "./customer-panel";
import InboxSidebar from "./inbox-sidebar";

export default function InboxPage() {
  return (
    <div className="flex h-screen bg-[#08111d] text-white">
      <InboxSidebar />

      <div className="flex min-w-0 flex-1 flex-col bg-[#07111f]">
        <ChatHeader />
        <ChatMessages />
        <ChatComposer />
      </div>

      <CustomerPanel />
    </div>
  );
}