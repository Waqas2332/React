import React, { useState } from "react";
import "./AddBlog.css";
const AddBlog = (props) => {
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
    setName("");
    setContent("");
    props.onSave(blogData);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={nameChangeHandler}
        value={name}
      />
      <label>Content</label>
      <textarea
        type="text"
        placeholder="Content"
        onChange={contentChangeHandler}
        value={content}
        cols={50}
        rows={6}
      ></textarea>

      <button>Submit</button>
    </form>
  );
};

export default AddBlog;
