import { getSortedPostsData } from "@/lib/posts";
import Posts from "./components/Posts";
import Search from "./components/Search";

export default function Home() {
  const posts = getSortedPostsData();
  return (
    <main className="px-6 mx-auto">
      {/* TODO: search filter for articles */}
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Ozan</span>
        </span>
      </p>
      <Search posts={posts} />
      <Posts />
    </main>
  );
}
