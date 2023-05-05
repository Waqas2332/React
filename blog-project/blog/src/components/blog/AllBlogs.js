import React from "react";
import "./AllBlogs.css";
import NotFound from "./NotFound";
const AllBlogs = (props) => {
  const { blogs } = props;
  return (
    <ul className="blogs-list">
      <h2>List of All Blogs</h2>
      {blogs.length ? (
        blogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.name}</h3>
            <p>{blog.content}</p>
          </li>
        ))
      ) : (
        <NotFound />
      )}
    </ul>
  );
};

export default AllBlogs;
