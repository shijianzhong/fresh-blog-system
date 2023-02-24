/*
 * @Date: 2023-02-24 09:14:51
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-24 13:01:46
 * @FilePath: /www-main/routes/img/[type].tsx
 */
import { PageProps } from "$fresh/server.ts";

const selectImg = (type) => {
  switch (type) {
    case "wechat":
      return (<div class="w-screen h-screen flex justify-center items-center">
        <img class="w-1/5" src="./wechat.jpg"></img>
      </div>);
    case "ding":
      return <div>ding</div>;
    default:
      return <div>ding1</div>;
  }
};
export default function ImgPage(props: PageProps) {
  const { type } = props.params;
  return (
    <main>
      {selectImg(type)}
    </main>
  );
}
