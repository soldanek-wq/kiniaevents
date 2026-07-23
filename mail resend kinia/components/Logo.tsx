import Image from "next/image";

type LogoVariant = "on-dark" | "on-light" | "gold";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  /** Intrinsic size hint for next/image — keep in sync with the CSS box. */
  size?: number;
  priority?: boolean;
}

const SOURCES: Record<LogoVariant, string> = {
  "on-dark": "/logo/mark-on-dark.png",
  "on-light": "/logo/mark-on-light.png",
  gold: "/logo/mark-gold.png",
};

/**
 * The studio's monogram mark, supplied as artwork rather than drawn —
 * three pre-recolored variants (ivory for dark surfaces, ink for light
 * surfaces, gold for accent placements) so the correct contrast is
 * always used instead of trying to recolor a raster file with CSS.
 */
export default function Logo({ variant = "on-dark", className = "h-10 w-10", size = 80, priority = false }: LogoProps) {
  return (
    <Image
      src={SOURCES[variant]}
      alt="Monogram KN — Kinga Nagiewicz Events Atelier"
      width={size}
      height={size}
      priority={priority}
      className={`${className} object-contain`}
    />
  );
}

/** The full lockup (monogram + wordmark + tagline) — used once, large, as a decorative watermark. */
export function LogoLockup({
  variant = "on-dark",
  className = "",
}: {
  variant?: Extract<LogoVariant, "on-dark" | "on-light">;
  className?: string;
}) {
  const src = variant === "on-dark" ? "/logo/lockup-on-dark.png" : "/logo/lockup-on-light.png";
  return (
    <Image
      src={src}
      alt="Kinga Nagiewicz — Events Atelier"
      width={1626}
      height={684}
      className={`${className} object-contain`}
    />
  );
}
