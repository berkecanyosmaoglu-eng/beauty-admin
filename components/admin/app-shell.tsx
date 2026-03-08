import type { ReactNode } from "react";
import Sidebar from "./sidebar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#07111f]">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 bg-[#08111d]">{children}</main>
      </div>
    </div>
  );
}