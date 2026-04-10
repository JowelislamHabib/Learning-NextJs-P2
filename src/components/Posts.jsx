"use client";
import React, { use } from "react";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  console.log(posts);
  return (
    <div>
      <h2>Total Posts: {posts.length}</h2>
    </div>
  );
};

export default Posts;
