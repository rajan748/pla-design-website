export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFE6DD]">
      <div className="text-center">
        <h1 className="font-serif text-3xl text-neutral-900 mb-2">
          Blog Post: {params.slug}
        </h1>
        <p className="text-neutral-500">Coming soon...</p>
      </div>
    </div>
  );
}