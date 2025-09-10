import React, { useState } from "react";
import axios from "axios";

function Upload({ user }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [msg, setMsg] = useState("");

  const upload = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/posts", {
        caption,
        image,
        author: user.username
      });
      setMsg("Post uploaded!");
      setCaption("");
      setImage("");
    } catch {
      setMsg("Upload failed");
    }
  };

  return (
    <div>
      <h3>Upload Post</h3>
      <form onSubmit={upload}>
        <input placeholder="Caption" value={caption} onChange={e => setCaption(e.target.value)} /><br />
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} /><br />
        <button type="submit">Upload</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}

export default Upload;