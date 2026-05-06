import Image from "next/image";
import Link from "next/link";

export function LegalPageHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className="flex w-fit items-center gap-3 text-sm font-semibold text-[#fff7e8] transition hover:text-[#d6b15f]"
        aria-label="Volver a NextFaro Audiolibros"
      >
        <Image
          src="/images/nextfaro-logo-transparent.png"
          alt="NextFaro Audiolibros"
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 object-contain"
        />
        <span>NextFaro Audiolibros</span>
      </Link>

      <Link
        href="/"
        className="w-fit rounded-md border border-[#e9c46a]/40 px-4 py-2 text-sm font-semibold text-[#d6b15f] transition hover:border-[#fff7e8] hover:bg-[#fff7e8] hover:text-[#070706]"
      >
        Volver al inicio
      </Link>
    </header>
  );
}
