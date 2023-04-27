import BlogDetails from "@/app/components/BlogDetails";

const BlogPage = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Blog Details</h1>
      <BlogDetails id={id} />
    </div>
  );
};

export default BlogPage;
