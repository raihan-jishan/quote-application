/* eslint-disable react/no-unescaped-entities */
//  initialize imports

import { useContext, useEffect } from "react";
import postContext from "../../context/postContext.jsx";
import BlogItems from "../../components/BlogItems/BlogItems.jsx";
// eslint-disable-next-line no-unused-vars
const BlogPosts = () => {
  const context = useContext(postContext);
  // eslint-disable-next-line no-unused-vars
  const { getBlogPosts, blogPost } = context;

  useEffect(() => {
    getBlogPosts();
  }, [getBlogPosts]);

  return (
    <main className="m-3 mt-8 mb-auto">
      <h1 className="text-center text-5xl font-Comfortaa">Blog Posts </h1>
      {blogPost.map((data) => {
        return <BlogItems key={data._id} data={data} />;
      })}
    </main>
  );
};

export default BlogPosts;
