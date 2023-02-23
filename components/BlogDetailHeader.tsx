/*
 * @Date: 2023-02-21 01:24:24
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-23 16:35:54
 * @FilePath: /www-main/components/BlogDetailHeader.tsx
 */
import { asset } from "$fresh/runtime.ts";
import ColorMode from "../islands/ColorMode.tsx";
import Language from "../islands/Language.tsx";
import MobileHeader from "../islands/MobileHeader.tsx";
import { State } from "../routes/_middleware.ts";
import { T } from "../state.ts";

type Menu = { name: string; href: string };
export type HeaderProps = {
  active: string;
  sticky?: boolean;
  left?: Menu[];
  right?: Menu[];
  lang: State["lang"];
};

function LargeHeader(props: Omit<HeaderProps, "sticky">) {
  const t = T.value!;
  return (
    <div class="text-md hidden h-14 flex-row flex-wrap gap-6 px-4 font-bold text-gray-700 dark:text-gray-300 sm:flex">
      <ul class="flex flex-1 items-center gap-6">
        {props.active !== "/" && (
          <li>
            <div class="flex items-center gap-2">
              <a
                href="/"
                class="hover:(text-transparent dark:(from-cyan-400 to-teal-400)) bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text"
              >
                {t?.hero?.author} /
              </a>
              <span>{props.title}</span>
            </div>
          </li>
        )}
        {props.left &&
          props.left.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"hover:(text-gray-900 dark:text-gray-100) border-gray-500 py-1 dark:border-gray-300" +
                  (menu.href === props.active ? " border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
      </ul>
      <ul class="flex items-center gap-6">
        {props.right &&
          props.right.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"hover:(text-gray-900 dark:text-gray-100) border-gray-500 py-1 dark:border-gray-300" +
                  (menu.href === props.active ? " border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
      </ul>
      <div class="flex items-center gap-6">
        <Language lang={props.lang} />
        <ColorMode />
      </div>
    </div>
  );
}

export default function BlogDetailHeader(props: HeaderProps) {
  const menus = [
    { name: T.value?.titles.home, href: "/" },
    { name: T.value?.titles.blog, href: "/blog" },
  ];
  props.right = props.right ?? menus;
  props.isBlogDetailHeader = true;
  return (
    <header
      class={`w-full bg-gray-100 dark:bg-gray-700 ${
        props.sticky ?? "sticky top-0 z-10 -mb-12 sm:-mb-14"
      }`}
    >
      <LargeHeader {...props} />
      <MobileHeader {...props} />
    </header>
  );
}
