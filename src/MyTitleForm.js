import React, { useState } from "react";
import "./styles.css";

function MyTitleForm() {
  const [title, setTitle] = useState("Awesome Title");
  const handleChange = (event) => {
    if (!event.target.value.includes("*")) setTitle(event.target.value);
  };

  return (
    <div>
      <h1>{title}</h1>
      <label htmlFor="title">Title: </label>
      <input id="title" type="text" value={title} onChange={handleChange} />
    </div>
  );
}

export default MyTitleForm;
