"use client"

import "../globals.css";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {useRouter} from "next/navigation";
import PageTransitionEffect from "@/components/page-transition-effect";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();
  return (
    <html lang="en">
      <body>
  <div className="flex flex-col min-h-screen">
  <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b border-primary-foreground">
  <div className="flex items-center space-x-16">
    <a className="group text-primary transition-all duration-300 ease-in-out" onClick={() => {
        router.push("/");
    }}>
      <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-2xl font-bold hover:cursor-pointer">
        HumTune AI
      </span>
    </a>
    <a className="group text-primary transition-all duration-300 ease-in-out"
    onClick={() =>  router.push("/project-proposal")}>
      <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg font-bold text-primary hover:cursor-pointer">
        Project Proposal
      </span>
    </a>
  </div>
  <ThemeToggle />
</header>
    <main className="flex-grow mt-16">
      <PageTransitionEffect>
      {children}
      </PageTransitionEffect>
    </main>
  </div>
      </body>
    </html>
  );
}
