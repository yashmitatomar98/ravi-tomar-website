import { ArrowRight } from "lucide-react";

/** Phone-only cue that the row below scrolls sideways. */
export default function SwipeHint({ count, label, tone = "light" }: { count: number; label: string; tone?: "light" | "dark" }) {
  return (
    <p
      className={`mt-8 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.18em] sm:hidden ${
        tone === "dark" ? "text-white/60" : "text-slate"
      }`}
    >
      <span aria-hidden className="h-px w-8 bg-gold" />
      Swipe · {count} {label}
      <ArrowRight aria-hidden size={14} strokeWidth={1.5} className="text-gold" />
    </p>
  );
}
