import React, { useState } from "react";
import AddBlog from "./AddBlog";
import AllBlogs from "./AllBlogs";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  function blogData(blog) {
    const blogData = { ...blog, id: Math.random() };
    setBlogs((prevState) => {
      return [...prevState, blogData];
    });
    console.log(blogs);
  }
  return (
    <div>
      <AddBlog onSave={blogData} />
      <AllBlogs />
    </div>
  );
};

export default Blog;
