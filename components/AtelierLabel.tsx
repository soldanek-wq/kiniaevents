interface AtelierLabelProps {
  text: string;
  className?: string;
}

/**
 * Secondary signature motif: a small swing-tag, styled after a couture
 * garment label or a vintage travel sticker, that surfaces on hover.
 * Used sparingly — only where it carries real information (a
 * portfolio category) — so it reads as a detail, not decoration.
 */
export default function AtelierLabel({ text, className = "" }: AtelierLabelProps) {
  return (
    <div
      className={`pointer-events-none absolute -right-2 -top-2 rotate-[-4deg] opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-1 group-hover:rotate-[-2deg] group-hover:opacity-100 ${className}`}
    >
      <div className="border border-gold/70 bg-ivory px-3 py-1.5 shadow-[0_8px_20px_-8px_rgba(15,15,15,0.35)]">
        <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-ink/70">{text}</p>
      </div>
    </div>
  );
}
