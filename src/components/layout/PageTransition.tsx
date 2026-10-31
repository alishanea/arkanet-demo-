"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    // Only scroll to top if there is no hash in URL
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return <div className="w-full min-h-screen flex flex-col">{children}</div>;
};
