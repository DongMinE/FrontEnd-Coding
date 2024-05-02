export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Post 1</h1>
      <p>{params.slug}</p>
    </main>
  );
}
