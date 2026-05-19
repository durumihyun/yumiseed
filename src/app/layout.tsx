import type { Metadata, Viewport } from "next";
import { Play } from "lucide-react";
import { PullToRefresh } from "@/components/PullToRefresh";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Daily Vibe | 당신의 아침을 여는 AI 트렌드",
  description: "매일 아침 가장 중요한 미국 AI/Tech 뉴스를 요약하고 비즈니스 인사이트를 제공합니다.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AI Daily Vibe",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 relative overscroll-none">
        
        {/* Mobile App Container */}
        <div className="max-w-md mx-auto min-h-[100dvh] bg-vibe-bg dark:bg-slate-950 shadow-2xl relative flex flex-col">
          
          {/* Main scrollable area wrapped with PullToRefresh */}
          <div className="flex-1 overflow-y-auto pb-24">
            <PullToRefresh>
              {children}
            </PullToRefresh>
          </div>

          {/* Sticky CTA Footer */}
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-vibe-bg via-vibe-bg to-vibe-bg/0 dark:from-slate-950 dark:via-slate-950 dark:to-transparent pt-12 pb-6 z-50">
            <a 
              href="https://youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full h-[56px] rounded-2xl bg-vibe-primary hover:opacity-90 active:scale-[0.98] transition-all duration-200 text-white font-bold text-lg shadow-[0_8px_20px_rgb(232,93,68,0.3)] dark:shadow-[0_8px_20px_rgb(232,93,68,0.2)]"
            >
              <Play className="w-5 h-5 fill-white" />
              더 많은 AI 팁 보러가기
            </a>
          </div>
          
        </div>
      </body>
    </html>
  );
}
