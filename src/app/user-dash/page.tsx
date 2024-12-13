"use client";

import { Sidebar } from "../components/user-sidebar-with-header/Sidebar";
import { UserPostOrderDash } from "./_components/dashboard/UserPostOrderDash";

export default function DashboardPage() {
  return (
    <Sidebar>
      <UserPostOrderDash />
    </Sidebar>
  );
}
