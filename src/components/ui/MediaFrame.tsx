import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  /** Short descriptor shown on the placeholder (what belongs here). */
  label?: string;
  meta?: string;
  className?: string;
  imgClassName?: string;
  cursor?: "view" | "media" | "read";
  priority?: boolean;
  sizes?: string;
  /** true = grayscale that colourises on hover */
  bw?: boolean;
  rounded?: boolean;
  /** Show the small "awaiting approved asset" note. Off by default. */
  showStatus?: boolean;
  /**
   * Reference URL of the social post / publication the correct photo lives in.
   * Rendered on the placeholder (rule #7) so an un-downloaded slot always
   * carries its exact source. NEVER hotlink Instagram/Facebook CDN URLs here —
   * this is the human-readable POST url, not an image CDN url.
   */
  sourceUrl?: string;
};

/**
 * Renders a verified local/CDN image via next/image, or an elegant branded
 * placeholder when no approved asset is available yet. Placeholders never
 * fabricate imagery — they read as an intentional editorial frame.
 */
export default function MediaFrame({
  src,
  alt,
  label,
  meta,
  className = "",
  imgClassName = "",
  cursor = "view",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  bw = false,
  rounded = false,
  showStatus = false,
  sourceUrl,
}: Props) {
  return (
    <figure
      data-cursor={cursor}
      className={`group relative overflow-hidden bg-lab-deep ${
        rounded ? "rounded-sm" : ""
      } ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${bw ? "bw-photo" : ""} ${imgClassName}`}
        />
      ) : (
        <Placeholder
          label={label}
          meta={meta}
          showStatus={showStatus}
          sourceUrl={sourceUrl}
        />
      )}
      {/* subtle lens vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lab-black/50 via-transparent to-transparent" />
    </figure>
  );
}

function prettyHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "source";
  }
}

function Placeholder({
  label,
  meta,
  showStatus,
  sourceUrl,
}: {
  label?: string;
  meta?: string;
  showStatus?: boolean;
  sourceUrl?: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      {/* deep editorial gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 20%, #12241f 0%, #0d1b18 40%, #07110f 100%)",
        }}
      />
      {/* soft directional light, like a studio portrait */}
      <div
        className="absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 70% at 68% 32%, rgba(121,199,181,0.14), transparent 60%), radial-gradient(50% 60% at 20% 85%, rgba(184,155,94,0.10), transparent 60%)",
        }}
      />
      {/* very faint measurement grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(243,240,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(243,240,232,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* faint reticle, decorative */}
      <svg
        className="absolute h-40 w-40 text-sci/[0.10] transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="1.5" fill="currentColor" />
        <line x1="50" y1="10" x2="50" y2="24" stroke="currentColor" strokeWidth="0.4" />
        <line x1="50" y1="76" x2="50" y2="90" stroke="currentColor" strokeWidth="0.4" />
        <line x1="10" y1="50" x2="24" y2="50" stroke="currentColor" strokeWidth="0.4" />
        <line x1="76" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.4" />
      </svg>

      {/* corner ticks — editorial frame */}
      <span className="absolute left-4 top-4 h-3 w-3 border-l border-t border-ivory/15" />
      <span className="absolute right-4 top-4 h-3 w-3 border-r border-t border-ivory/15" />
      <span className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-ivory/15" />
      <span className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-ivory/15" />

      {(label || meta) && (
        <div className="relative z-10 max-w-[82%] px-6 text-center">
          {label && (
            <p className="font-serif text-lg italic leading-tight text-ivory/55">
              {label}
            </p>
          )}
          {meta && (
            <p className="mt-2 font-sans text-[9px] uppercase tracking-widest2 text-muted/60">
              {meta}
            </p>
          )}
        </div>
      )}

      {sourceUrl ? (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 z-10 max-w-[86%] truncate px-3 text-center font-sans text-[8px] uppercase tracking-widest2 text-champagne/50 underline decoration-champagne/20 underline-offset-2 transition-colors hover:text-champagne/80"
          title={sourceUrl}
        >
          Source · {prettyHost(sourceUrl)}
        </a>
      ) : (
        showStatus && (
          <p className="absolute bottom-5 z-10 font-sans text-[8px] uppercase tracking-widest2 text-muted/40">
            Awaiting approved asset
          </p>
        )
      )}
    </div>
  );
}
