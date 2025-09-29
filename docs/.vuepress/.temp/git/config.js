import { GitContributors } from "F:/MyCode/ReaosenBlog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_8470a0d1a5b65c5f89e55d4c00a10cde/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "F:/MyCode/ReaosenBlog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_8470a0d1a5b65c5f89e55d4c00a10cde/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
