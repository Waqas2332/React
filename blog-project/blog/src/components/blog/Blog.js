import React from "react";
import AddBlog from "./AddBlog";
import AllBlogs from "./AllBlogs";
const Blog = (props) => {
  return (
    <div>
      <AddBlog onSave={props.onSave} />
      <AllBlogs blogs={props.blogs} />
    </div>
  );
};

export default Blog;
