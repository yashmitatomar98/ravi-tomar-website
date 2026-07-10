"use client";

import { useSmoothScroll } from "@/lib/smooth-scroll";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();
  return <>{children}</>;
}
