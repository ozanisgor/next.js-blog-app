"use client";

import { ChangeEvent, useState } from "react";

type Props = {
  posts: BlogPost[];
};

export default function Search({ posts }: Props) {
  const [state, setState] = useState<{ query: string; list: BlogPost[] }>({
    query: "",
    list: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const results = posts.filter((post) => {
      if (e.target.value === "") return posts;
      // TODO: improve the search functionality by using the logical OR operator to match the query to other properties in the object
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState({ query: e.target.value, list: results });
  };
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <form>
        <input type="search" value={state.query} onChange={handleChange} />
      </form>
      <ul className="text-gray-400">
        {state.query === ""
          ? "No posts match the query"
          : !state.list.length
          ? "Your query did not return any results"
          : state.list.map((post) => {
              return (
                <li className="text-slate-300" key={post.title}>
                  {post.title}
                </li>
              );
            })}
      </ul>
    </section>
  );
}
