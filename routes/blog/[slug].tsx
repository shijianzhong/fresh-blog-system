/*
 * @Date: 2023-02-22 14:47:22
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-03-13 11:09:55
 * @FilePath: /www-main/routes/blog/[slug].tsx
 */
import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { Container } from "../../components/Container.tsx";
import { loadPost, Post } from "../../utils/posts.ts";
import  BlogDetailHeader  from "../../components/BlogDetailHeader.tsx";
import { ServerCodePage } from "../_404.tsx";
import Footer from "../../components/Footer.tsx";
interface Data {
  post: Post | null;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.slug);
    return ctx.render({ ...ctx.state, post });
  },
};

export default function PostPage(props: PageProps<Data>) {
  const { post } = props.data;
  return post
    ? (
      <>
        <BlogDetailHeader title={post.title} />
        <Container >
          <h1 class="font-bold text-5xl pt-20">{post.title}</h1>
          <time class="inline-block mt-4">
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
          <article
            class="mt-12 markdown-body pb-[25.5rem] md:pb-[13.5rem]"
            dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
          />
        </Container>
        <div class="h-5"></div>
        <Footer></Footer>
      </>
    )
    : (
      <ServerCodePage
        serverCode={404}
        codeDescription={"We couldn't find the post you're looking for."}
      />
    );
}
