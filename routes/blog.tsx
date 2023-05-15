/*
 * @Date: 2023-02-21 01:24:24
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-05-15 14:19:07
 * @FilePath: /www-main/routes/blog.tsx
 */
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import TrafficCone from "@tabler/icons/traffic-cone.tsx";
import Footer from "../components/Footer.tsx";
import { Translation } from "../i18n/types.ts";
import { State } from "./_middleware.ts";
import { T } from "../state.ts";
import { listPosts, Post } from "../utils/posts.ts";
import { State } from "../utils/state.ts";
import { Container } from "../components/Container.tsx";
import { PostPreview } from "../components/PostPreview.tsx";
import {BlogTable} from "../components/BlogTable.tsx";
interface Data extends State {
  posts: Post[];
  lang: State["lang"];
  t: Translation;
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ 
      ...ctx.state, 
      posts,  
      lang: ctx.state.lang,
      t: ctx.state.t, 
    });
  },
};

export default function Blog(props: PageProps<Data>) {
  T.value = props.data.t;
  const { posts } = props.data;
  return (
    <>
      <Head>
        <title>Sking's Blog</title>
        <meta
          name="description"
          content="sking - Full Stack Web Developer - Blog"
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8317527679530231"
     crossorigin="anonymous"></script>
      </Head>
      <Header active="/blog" lang={props.data.lang} />
      <main class="mx-auto mt-12 max-w-screen-lg w-full  overflow-x-auto px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        {/* <div class="flex flex-col justify-center gap-1"> */}
          {/* <TrafficCone /> */}
          {/* <div>{props.data.t.blog.wip}</div> */}
          {/* <Container> */}
            <BlogTable posts={posts}></BlogTable>
            {/* <ul class="mt-16">
              {posts.map((post) => <PostPreview post={post} />)}
            </ul> */}
          {/* </Container> */}
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
}
