"use client";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Newspaper, Receipt, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-52 max-w-[200px]">
      <u className="list-none no-underline flex flex-col gap-1 ">
        <Link href={"/u/dashboard"}>
          <li
            className={cn(
              "flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer active:scale-[0.97] hover:bg-gray-200",
              pathname === "/u/dashboard" && "bg-gray-200"
            )}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </li>
        </Link>
        <Link href={"/u/selfolio"}>
          <li
            className={cn(
              "flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer active:scale-[0.97] hover:bg-gray-200",
              pathname === "/u/selfolio" && "bg-gray-200"
            )}
          >
            <Newspaper size={18} />
            <span>Selfolio</span>
          </li>
        </Link>
        <Link href={"/u/billing"}>
          <li
            className={cn(
              "flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer active:scale-[0.97] hover:bg-gray-200",
              pathname === "/u/billing" && "bg-gray-200"
            )}
          >
            <Receipt size={18} />
            <span>Plan & Billing</span>
          </li>
        </Link>
        <Link href={"/u/settings"}>
          <li
            className={cn(
              "flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer active:scale-[0.97] hover:bg-gray-200",
              pathname === "/u/settings" && "bg-gray-200"
            )}
          >
            <Settings size={18} />
            <span>Settings</span>
          </li>
        </Link>
      </u>
    </aside>
  );
};

export default Sidebar;
