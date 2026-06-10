export default function LoadingBlogArticle() {
  return (
    <main className="min-h-screen bg-[#f6efe2] px-5 py-12 text-[#17130d] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="h-4 w-28 rounded bg-[#b88a2d]/20" />
        <div className="mt-8 h-12 w-5/6 rounded bg-[#17130d]/10" />
        <div className="mt-4 h-12 w-2/3 rounded bg-[#17130d]/10" />
        <div className="mt-8 aspect-[16/9] rounded-lg bg-[#17130d]/[0.06]" />
        <div className="mt-8 space-y-4">
          <div className="h-4 rounded bg-[#17130d]/10" />
          <div className="h-4 rounded bg-[#17130d]/10" />
          <div className="h-4 w-4/5 rounded bg-[#17130d]/10" />
        </div>
      </div>
    </main>
  );
}
