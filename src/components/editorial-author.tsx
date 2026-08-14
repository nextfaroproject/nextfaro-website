import Image from "next/image";
import { editorialAuthor } from "@/lib/site";

export function EditorialAuthor({ publishedAt, updatedAt }: { publishedAt: string; updatedAt?: string }) {
  return (
    <aside className="mt-10 flex gap-4 rounded-lg border border-[#b88a2d]/20 bg-[#fffaf1] p-5 text-[#3d3427]">
      <Image
        src={editorialAuthor.image}
        alt="Identidad visual del equipo editorial de NextFaro"
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 object-contain"
      />
      <div>
        <p className="font-semibold text-[#17130d]">{editorialAuthor.name}</p>
        <p className="mt-1 text-sm leading-6">{editorialAuthor.description}</p>
        <p className="mt-2 text-xs text-[#74654f]">
          Publicado el <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          {updatedAt ? (
            <> · Actualizado el <time dateTime={updatedAt}>{formatDate(updatedAt)}</time></>
          ) : null}
        </p>
      </div>
    </aside>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
