import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Me from "../components/Me.tsx";
import Project from "../islands/Project.tsx";
import { Translation } from "../i18n/types.ts";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";

type Data = {
  lang: State["lang"];
  t: Translation;
};

export const handler: Handlers<Data, State> = {
  GET(_req, ctx) {
    return ctx.render({
      lang: ctx.state.lang,
      t: ctx.state.t,
    });
  },
};

function Projects() {
  return (
    <section
      id="projects"
      class="lg:grid-cols-desktop grid scroll-mt-16 grid-cols-1 gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
        {T.value!.titles.projects}
      </h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Project
          title="基于rust+tauri+vue3的随手记"
          href="https://github.com/shijianzhong/tarui-vue3-handle-note"
          text="tauri, rust, vue3, note,chatgpt"
          github="https://github.com/shijianzhong/tarui-vue3-handle-note"
        />
        <Project
          title="一起学rust"
          href="https://github.com/shijianzhong/Let-s-learn-rust-together"
          text="Rust,word,xmind,笔记"
          github="https://github.com/shijianzhong/Let-s-learn-rust-together"
        />
        {/* <Project
          title="Advent of JS/CSS"
          href="https://guigui64-advent-of-js-css.deno.dev/"
          text="2022 JS/CSS challenges (WIP)"
          github="#"
        />
        <Project
          title="stybulate"
          href="https://crates.io/crates/stybulate"
          text="Rust experiment"
          github="#"
        />
        <Project
          title="Bookfinder"
          href="https://guigui64.github.io/bookfinder/"
          text="React, Google books API"
          github="#"
        /> */}
      </div>
    </section>
  );
}

function Recommendations() {
  return <section id="recommendations"></section>;
}

export default function Home(props: PageProps<Data>) {
  T.value = props.data.t;
  const LINKS = [
    { name: props.data.t.titles.aboutme, href: "#about-me" },
    { name: props.data.t.titles.projects, href: "#projects" },
    { name: props.data.t.titles.contact, href: "#contact" },
  ];
  return (
    <>
      <Head>
        <title>sking - Full Stack Web Developer</title>
        <meta
          name="description"
          content="sking - Full Stack Web Developer"
        />
        <meta name="sking" content="全栈开发工程师"></meta>
        <meta name="keywords" content="html5,web,前端,rust,tauri"></meta>
      </Head>
      <Header active="/" left={LINKS} lang={props.data.lang} />
      <Hero />
      <main class="mx-auto max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div class="space-y-10">
          <Me />
          <Projects />
          <Recommendations />
          {/* <Contact /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
