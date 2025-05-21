import React, { Suspense } from "react";
import { PostList } from "@/components/PostList";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <div>
      <h3>Blog Posts</h3>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}
