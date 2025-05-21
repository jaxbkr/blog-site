import { getAllPosts } from "@/utils/cosmic";
import PostCard from "./PostCard";

export async function PostList() {
  let posts = await getAllPosts();

  return (
    <>
      {!posts && "No Posts"}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
    </>
  );
}
