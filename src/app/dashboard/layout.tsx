import { ReactNode } from "react";
// import Logo from "../../../public/logo.svg";

import { CircleUser } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/dashboard/ThemeToggle";
import { DashboardItems } from "@/components/dashboard/DashboardItems";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { cookies } = await import("next/headers");
  return (
    <>
      <section className="overflow-hidden">
        <div />
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="flex-1 md:hidden">
              <nav className="flex items-start px-2 font-medium lg:px-4">
                <DashboardItems />
              </nav>
            </div>
            <div className="ml-auto flex items-center gap-x-5">
              <ThemeToggle />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Button className="w-full flex">Logout</Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
        </div>

        <SidebarLayout
          defaultOpen={cookies().get("sidebar:state")?.value === "true"}
        >
          <AppSidebar />
          <div className="  mt-12 mb-24 border-gray-200 p-2 border rounded-md m-4  flex-col-reverse w-full ">
            {children}
          </div>
          <main className="flex h-full   p-2 transition-all duration-300 ease-in-out">
            <div className="h-12 bg-gray-200 rounded-md ml-2 p-2">
              <SidebarTrigger className="text-red-500 " />
            </div>
          </main>
        </SidebarLayout>
      </section>
    </>
  );
}
