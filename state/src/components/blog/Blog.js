import React, { useState } from "react";
const Blog = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  function nameChangeHandler(event) {
    // name = event.target.value; BTS
    setName(event.target.value);
  }
  function contentChangeHandler(event) {
    setContent(event.target.value);
  }
  function formSubmitHandler(event) {
    event.preventDefault();
    const blogData = {
      name: name,
      content: content,
    };
    console.log(blogData);
    setName("");
    setContent("");
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={nameChangeHandler}
        value={name}
      />
      <input
        type="text"
        placeholder="Content"
        onChange={contentChangeHandler}
        value={content}
      />
      <button>Submit</button>
    </form>
  );
};

export default Blog;
