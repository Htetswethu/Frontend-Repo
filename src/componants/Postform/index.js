import React, { useState } from "react";
import "./index.css";

export default function Postform({ addPost }) {
  let [title, setTitle] = useState("");
  let [status, setStatus] = useState("Upcoming");
    // reset form function
  let resetForm = () => {
    setTitle("");
    console.log("reset");
  };
  //upload post function
  let upload_post = (e) => {
    e.preventDefault();
    let post = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      status: status
    };
    addPost(post);
    resetForm()
  };
  return (
    <form className="post-form" onSubmit={upload_post}>
      <h1>Create Post</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Completed">Completed</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Upcoming">Upcoming</option>
        </select>
      </div>
      <button type="button" onClick={resetForm}>
        reset
      </button>
      <p>{title}</p>
      <div className="form-control">
        <button type="submit">Post Now</button>
      </div>
    </form>
  );
}
