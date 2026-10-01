import { PLAY_STORE_URL } from "../constants";
export default function PlayButton({ className = "" }: { className?: string }) {
  return (
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play"
      className={`inline-flex items-center justify-center gap-3 rounded-xl bg-ink px-5 py-3 text-white transition hover:scale-[1.03] ${className}`}>
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path fill="#34a853" d="M3 2.5v19l10-9.5z"/><path fill="#fbbc04" d="M17 8.5 13 12l4 3.5 4.2-2.4c1-.6 1-1.9 0-2.4z"/><path fill="#ea4335" d="M3 21.5 13 12l4 3.5L4.6 22.6c-.7.4-1.6.1-1.6-1.1z"/><path fill="#4285f4" d="M3 2.5c0-1.2.9-1.5 1.6-1.1L17 8.5 13 12z"/></svg>
      <span className="text-left leading-tight"><span className="block text-[10px] tracking-wide">GET IT ON</span><span className="block text-lg font-semibold">Google Play</span></span>
    </a>
  );
}
