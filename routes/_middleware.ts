/*
 * @Date: 2023-02-21 01:24:24
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-24 08:13:38
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
    ctx.state.lang = req.headers.get("cookie")!.includes("lang=en")
      ? "en"
      : "cn";
    setLangCookie = false;
  } else if (req.headers.get("accept-language")?.includes("en")) {
    ctx.state.lang = "en";
  } else {
    ctx.state.lang = "cn";
  }
  ctx.state.t = ctx.state.lang === "en" ? en : cn;
  const res = await ctx.next();
  setLangCookie && res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
  return res;
}
