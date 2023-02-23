/*
 * @Date: 2023-02-21 01:24:24
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-21 20:05:22
 * @FilePath: /www-main/routes/_middleware.ts
 */
import { MiddlewareHandlerContext } from "$fresh/server.ts";

// import fr from "../i18n/fr.json" assert { type: "json" };
import en from "../i18n/en.json" assert { type: "json" };
import cn from "../i18n/cn.json" assert { type: "json" };
import { Translation } from "../i18n/types.ts";

export type State = {
  lang: "cn"| "en";
  t: Translation;
};

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  let setLangCookie = true;
  if (
    req.headers.has("cookie") &&
    req.headers.get("cookie")!.includes("lang") 
  ) {
    ctx.state.lang = req.headers.get("cookie")!.includes("lang=cn")
      ? "cn"
      : "en";
    setLangCookie = false;
  } else if (req.headers.get("accept-language")?.includes("cn")) {
    ctx.state.lang = "cn";
  } else {
    ctx.state.lang = "en";
  }
  ctx.state.t = ctx.state.lang === "cn" ? cn : en;
  const res = await ctx.next();
  setLangCookie && res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
  return res;
}
