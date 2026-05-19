"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";

export function PullToRefresh({ children }: { children: React.ReactNode }) {
  const [isPulling, setIsPulling] = useState(false);
  const [pullProgress, setPullProgress] = useState(0);
  const startY = useRef(0);
  const router = useRouter();
  
  const MAX_PULL = 80;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // 스크롤이 맨 위에 있을 때만 pull-to-refresh 작동
      if (window.scrollY === 0) {
        startY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY !== 0 || startY.current === 0) return;
      
      const currentY = e.touches[0].clientY;
      const diff = currentY - startY.current;

      if (diff > 0) {
        setIsPulling(true);
        setPullProgress(Math.min(diff, MAX_PULL));
        // 스크롤 방지
        if (e.cancelable) e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (isPulling) {
        if (pullProgress >= MAX_PULL - 10) {
          // 충분히 당겼을 때 새로고침
          router.refresh();
        }
        setIsPulling(false);
        setPullProgress(0);
      }
      startY.current = 0;
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isPulling, pullProgress, router]);

  return (
    <div className="relative min-h-screen">
      {/* Pull indicator */}
      <div 
        className="absolute w-full flex justify-center items-center py-4 top-0 left-0 overflow-hidden"
        style={{ 
          height: `${pullProgress}px`,
          opacity: pullProgress / MAX_PULL 
        }}
      >
        <RefreshCw 
          className={`w-6 h-6 text-slate-400 ${pullProgress >= MAX_PULL - 10 ? 'animate-spin' : ''}`} 
          style={{ transform: `rotate(${pullProgress * 3}deg)` }}
        />
      </div>
      
      {/* Content wrapper */}
      <div 
        style={{ transform: `translateY(${pullProgress}px)` }}
        className="transition-transform duration-200"
      >
        {children}
      </div>
    </div>
  );
}
