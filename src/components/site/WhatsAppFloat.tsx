import { socials } from "@/content/eduardo";

export function WhatsAppFloat() {
  return (
    <a
      href={socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a equipe de Eduardo Vidal no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-brand-green px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-transform hover:-translate-y-0.5 md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 32 32" aria-hidden className="size-6 fill-white">
        <path d="M16.02 3C8.83 3 3 8.83 3 16.02c0 2.29.6 4.53 1.75 6.5L3 29l6.65-1.72a13 13 0 0 0 6.37 1.65h.01C23.2 28.93 29 23.1 29 15.92 29 8.74 23.2 3 16.02 3Zm0 23.36h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-3.95 1.02 1.05-3.84-.26-.4a10.77 10.77 0 0 1-1.65-5.75c0-5.96 4.86-10.8 10.83-10.8 5.96 0 10.79 4.84 10.79 10.8 0 5.96-4.85 10.71-10.9 10.71Zm5.93-8.06c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.28-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.72-1.76-.99-2.4-.26-.63-.52-.55-.72-.56h-.62c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.3c.16.21 2.24 3.44 5.43 4.82.76.33 1.35.52 1.81.67.76.24 1.46.2 2 .12.61-.09 1.92-.78 2.19-1.54.27-.76.27-1.42.19-1.55-.08-.14-.29-.22-.61-.38Z" />
      </svg>
      <span className="hidden font-display text-xs font-bold tracking-widest text-white sm:inline">
        WHATSAPP
      </span>
    </a>
  );
}