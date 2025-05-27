import { getPost } from "@/utils/cosmic";
import { Suspense } from "react";
import { sanitize } from "isomorphic-dompurify";
import { Loading } from "@/components/Loading"

export default async function Post({ params }) {
  const { slug }= await params;
  const post = await getPost(slug);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <h2>{post.title}</h2>
        <div
          className="flex flex-col post text-xl"
          dangerouslySetInnerHTML={{
            __html: sanitize(post.metadata.content) ?? "",
          }}
        ></div>
      </Suspense>
    </>
  );
}
