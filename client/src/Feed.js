import React, { useEffect, useState } from "react";
import axios from "axios";

function Feed({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h3>Feed</h3>
      {posts.map((post) => (
        <div key={post._id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <p>
            <b>{post.author}</b>
          </p>
          <img src={post.image} alt="post" width="200" />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;