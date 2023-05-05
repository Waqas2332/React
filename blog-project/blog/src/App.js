import React, { useState } from "react";
import Nav from "./components/Navigation/Nav";
import Blog from "./components/blog/Blog";
const App = () => {
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
      <Nav />
      <Blog onSave={blogData} blogs={blogs} />
    </div>
  );
};

export default App;
