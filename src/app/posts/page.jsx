import Posts from "@/components/Posts";
import React, { Suspense } from "react";

const PostsPage = () => {
  const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      <h2>Posts Page</h2>
      <Suspense fallback={<h2 className="text-4xl">Loading...</h2>}>
        <Posts postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
};

export default PostsPage;
