/*
 * @Date: 2023-02-22 16:21:25
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-23 15:48:28
 * @FilePath: /www-main/components/BlogTable.tsx
 */
import { Post } from "../utils/posts.ts";
import { changeBg } from "../utils/randomColor.ts";

export function BlogTable(props: { posts: [Post] }) {
  const { posts } = props;
  return (
    <table class="max-w-full w-full text-left border-collapse">
      <thead>
        <tr class="w-full overscroll-auto">
          <th class="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white dark:bg-gray-800 dark:text-white p-0 w-2/4">
            <div class="pb-2 pr-2 border-b border-gray-200">Name</div>
          </th>
          <th class="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white dark:bg-gray-800 dark:text-white p-0 w-1/4">
            <div class="pb-2 pl-2 border-b border-gray-200">Tags</div>
          </th>
          <th class="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white dark:bg-gray-800 dark:text-white p-0 w-1/4">
            <div class="pb-2 pl-2 border-b border-gray-200">Slug</div>
          </th>
        </tr>
      </thead>
      <tbody class="align-baseline">
        {posts.map((post) => (
          <tr class="w-full overscroll-auto">
            <td
              translate="no"
              class="hover:text-indigo-800 cursor-pointer py-2 pr-2 font-mono text-xs text-violet-600 whitespace-nowrap border-b border-gray-200"
            >
              <a href={`/blog/${post.slug}`}>{post.title}</a>
              
            </td>
            <td
              translate="no"
              class="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-b border-gray-200"
            >
              {
              post.tags.map((o,index)=>(
                <span  className={changeBg(index)}>{o}</span>
              ))}
            </td>
            <td
              translate="no"
              class="py-2 pr-2 font-mono text-xs text-violet-600 whitespace-nowrap border-b border-gray-200"
            >
              {`${post.publishedAt.getFullYear()}-${post.publishedAt.getMonth()}-${post.publishedAt.getDate()}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
