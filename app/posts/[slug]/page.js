import { getPost } from "@/utils/cosmic";
import { Suspense } from "react";
import { sanitize } from "isomorphic-dompurify";

export default async function Post({ params }) {
  const post = await getPost(params.slug);
  return (
    <>
      <div className="post text-2xl"
        dangerouslySetInnerHTML={{
          __html: sanitize(post.metadata.content) ?? "",
        }}
      ></div>
    </>
  );
}
