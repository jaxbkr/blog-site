import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? "",
  readKey: process.env.COSMIC_READ_KEY ?? "",
});
export default cosmic;

export async function getAllPosts() {
  try {
    const data = await Promise.resolve(
      cosmic.objects
        .find({ type: "posts" })
        .props("id,type,slug,title,metadata,created_at")
        .depth(1)
    );
    const posts = await data.objects;
    return Promise.resolve(posts);
  } catch (error) {
    console.log("getAllPosts failed:", error);
  }
  return Promise.resolve([]);
}

export async function getPost(slug) {
  try {
    const data = await Promise.resolve(
      cosmic.objects
        .findOne({ type: "posts", slug })
        .props(["id","type","slug","title","metadata","created_at"])
        .depth(1)
    );
    const post = await data.object;
    return post
  } catch (error) {
    console.log("getPost failed:", error);
  }
  return Promise.resolve({});
}
