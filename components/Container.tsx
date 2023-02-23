/*
 * @Date: 2023-02-22 10:14:25
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-23 16:57:05
 * @FilePath: /www-main/components/Container.tsx
 */
import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
}

export function Container(props: Props) {
  return <div class="px-4 mx-auto w-full max-w-screen-lg m-auto">{props.children}</div>;
}
