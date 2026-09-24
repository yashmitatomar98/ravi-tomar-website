import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Shown on the placeholder when no approved image is set. */
  monogram?: string;
  caption?: string;
  /** CSS object-position for the image, e.g. "50% 20%". */
  position?: string;
};

/**
 * Renders an approved image, or a navy monogram panel when none is hosted yet.
 * The placeholder is deliberately non-photographic so it can never be mistaken
 * for a real photograph.
 */
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  monogram,
  caption,
  position = "50% 50%",
}: Props) {
  return (
    <figure className={`relative overflow-hidden bg-navy ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={90} className="object-cover" style={{ objectPosition: position }} />
      ) : (
        <div role="img" aria-label={alt} className="texture-lines absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute inset-5 border border-gold/30" />
          {monogram && (
            <span className="font-serif text-[4.5rem] font-medium leading-none tracking-[0.06em] text-gold/80 sm:text-[5.5rem]">
              {monogram}
            </span>
          )}
          {caption && (
            <span className="mt-5 text-[0.65rem] uppercase tracking-[0.28em] text-white/45">{caption}</span>
          )}
        </div>
      )}
    </figure>
  );
}
