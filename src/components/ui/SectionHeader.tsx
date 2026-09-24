type Props = {
  index?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
  tone?: "light" | "dark";
};

export default function SectionHeader({ index, eyebrow, title, intro, className = "", tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <header data-reveal className={`max-w-2xl ${className}`}>
      <p className={dark ? "eyebrow-light" : "eyebrow"}>
        {index && <span className={dark ? "text-gold" : "text-bronze"}>{index}</span>}
        {eyebrow}
      </p>
      <h2 className={`h-section ${dark ? "text-white" : ""}`}>{title}</h2>
      {intro && <p className={`lede mt-6 ${dark ? "text-white/70" : ""}`}>{intro}</p>}
    </header>
  );
}
