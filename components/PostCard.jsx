import Link from "next/link";
import { sanitize } from "isomorphic-dompurify";
import { ArrowRight } from "lucide-react";


export default function PostCard({ post }) {
  return (
    <div className="w-full flex flex-col">
      {post.metadata.hero?.imgix_url && (
        <Link
          className="w-full flex justify-center bg-black rounded-2xl transition transform hover:scale-101 hover:-translate-y-1 duration-300"
          href={`/posts/${post.slug}`}
        >
          <img
            className="h-auto w-2xl rounded-2xl"
            src={`${post.metadata.hero?.imgix_url}`}
            alt={post.title}
          />
        </Link>
      )}

      <h2>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="mt-4 mb-4">
        Post written by {post.metadata.author.title} on{" "}
        {post.metadata.published_date}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: sanitize(post.metadata.teaser) }}
      ></div>
      <div>
        <div className="flex flex-row align-middle">
          <h4 className="text-accent">
            <Link href={`/posts/${post.slug}`}>Continue to post</Link>
          </h4>
          <ArrowRight className="text-accent mt-2.5 ml-2"/>
        </div>
      </div>
    </div>
  );
}
