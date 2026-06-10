export default function LoadingBlogArticle() {
  return (
    <main className="min-h-screen bg-[#070706] px-5 py-12 text-[#fff7e8] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="h-4 w-28 rounded bg-[#d6b15f]/20" />
        <div className="mt-8 h-12 w-5/6 rounded bg-[#fff7e8]/10" />
        <div className="mt-4 h-12 w-2/3 rounded bg-[#fff7e8]/10" />
        <div className="mt-8 aspect-[16/9] rounded-lg bg-[#fff7e8]/[0.045]" />
        <div className="mt-8 space-y-4">
          <div className="h-4 rounded bg-[#fff7e8]/10" />
          <div className="h-4 rounded bg-[#fff7e8]/10" />
          <div className="h-4 w-4/5 rounded bg-[#fff7e8]/10" />
        </div>
      </div>
    </main>
  );
}
