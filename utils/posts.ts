/*
 * @Date: 2023-02-22 10:12:37
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-23 09:15:40
 * @FilePath: /www-main/utils/posts.ts
 */
 import { extract } from "$std/encoding/front_matter.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  tags:Array
}

export async function loadPost(slug: string): Promise<Post | null> {
  let text: string;
  try {
    text = await Deno.readTextFile(`./data/posts/${decodeURIComponent(slug)}.md`);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return null;
    }
    throw err;
  }
  const { attrs, body } = extract(text);
  const params = attrs as Record<string, string>;
  const publishedAt = new Date(params.published_at);
  const tags = params.tags?params.tags:[]
  return {
    slug,
    title: params.title,
    publishedAt,
    content: body,
    tags
  };
}

export async function listPosts(): Promise<Post[]> {
  const promises = [];
  for await (const entry of Deno.readDir("./data/posts")) {
    const slug = entry.name.replace(".md", "");
    promises.push(loadPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}