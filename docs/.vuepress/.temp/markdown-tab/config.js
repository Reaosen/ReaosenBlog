import { CodeTabs } from "F:/MyCode/ReaosenBlog_v2/node_modules/.pnpm/@vuepress+plugin-markdown-t_e42c042ec14b431e03bfb919212b2d2c/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/MyCode/ReaosenBlog_v2/node_modules/.pnpm/@vuepress+plugin-markdown-t_e42c042ec14b431e03bfb919212b2d2c/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/MyCode/ReaosenBlog_v2/node_modules/.pnpm/@vuepress+plugin-markdown-t_e42c042ec14b431e03bfb919212b2d2c/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
