/*
 * @Date: 2023-02-23 09:54:13
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-02-23 10:00:16
 * @FilePath: /www-main/utils/RandomColor.ts
 */
const tagsColor = ["red", "yellow", "green", "blue", "indigo", "purple", "pink",]
export const changeBg = (index, weight = 300) => {
    if (index > 6) {
        index = index % 6
    }
    return `bg-${tagsColor[index]}-${weight} p-1 mr-1 rounded-sm`
}