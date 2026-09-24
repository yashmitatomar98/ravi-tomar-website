import type { CSSProperties } from "react";

/** Staggered delay for the nth item in a revealed group (read by CSS as --d). */
export function stagger(i: number, step = 90, base = 0): CSSProperties {
  return { "--d": `${base + i * step}ms` } as CSSProperties;
}
