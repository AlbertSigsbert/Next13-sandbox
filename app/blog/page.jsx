import Link from "next/link";

async function fetchBlogs() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
      //  next:{
      //   revalidate:60
      //  }
  });

  await new Promise(resolve => setTimeout(resolve,1000));

  const posts = await response.json();

  return posts;
}

const BlogsPage = async () => {
  const posts = await fetchBlogs();
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Blogs</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <li className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow" key={post.id}>
            <Link href={`blog/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsPage;
