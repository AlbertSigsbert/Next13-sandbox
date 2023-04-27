const fetchBlog =  async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    await new Promise(resolve => setTimeout(resolve,1000));
  
    const post = await response.json();
  
    return post;
}

const BlogDetails = async ({ id }) => {
  const blog = await fetchBlog(id);
  return (
    <div className="block max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {blog.title}
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {blog.body}
      </p>
    </div>
  );
};

export default BlogDetails;
