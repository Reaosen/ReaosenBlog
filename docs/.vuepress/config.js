import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Reaosen\'s blog',
  description: '这是我的个人网站，用来存放一些有用或者没用的碎碎念',

  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'CSDN',
        link: "https://blog.csdn.net/qq_31698207?type=blog",
      },
      {
        text: 'Github',
        link: "https://github.com/Reaosen",
      },
    ],

    // sidebar: {
    //   '/sidebar/': [
    //     {
    //       text: '工作笔记',
    //       collapsible: true,
    //       // 基于项目路径的 .md 或 .html 后缀是可以省略的
    //       prefix: 'workExperience/',
    //       children: ['julyWork', 'QihuaSoft'],
    //     },
    //     {
    //       text: 'Bundlers Reference',
    //       collapsible: true,
    //       // 前缀可以是相对路径，等同于 `prefix: /reference/bundler/`
    //       // prefix: 'bundler/',
    //       children: ['interviewQuestions', 'robustnessOfCode'],
    //     },
    //   ],
    // },
    sidebar: [
      // SidebarItem
      {
        text: '工作笔记',   // 必要的
        collapsible: true,// 是否可折叠，默认为true
        children: [
          {
            text: '7月工作笔记',   // 必要的
            link: '/sidebar/workExperience/julyWork.md',     // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
          {
            text: '8,9月工作笔记',   // 必要的
            link: '/sidebar/workExperience/Aug&Sept.md',     // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
          {
            text: '离职（9.22）',   // 必要的
            link: '/sidebar/workExperience/QihuaSoft.md',     // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
        ]
      },
      {
        text: '技术笔记',
        collapsible: true,
        children: [
          {
            text: '面试题',
            link: '/sidebar/technologyStack/interviewQuestions.md',
          },
          {
            text: 'Tomcat日志在idea控制台乱码',
            link: '/sidebar/technologyStack/Tomcat&Idea.md',
          },
          {
            text: '如何提升代码健壮性',
            link: '/sidebar/technologyStack/robustnessOfCode.md',
          },
        ]
      },
      {
        text: '读书笔记',
        collapsible: true,
        children: [
          {
            text: '哲学启蒙-大众哲学',
            link: '/sidebar/readingNotes/philosophyStart.md',
          }
        ]
      },
      {
        text: '菜谱',
        collapsible: true,
        children: [
          {
            text: '红烧肉',
            link: '/sidebar/cooking/hongshaorou.md',

          },
          {
            text: '蒜苔炒肉',
            link: '/sidebar/cooking/suantaichaorou.md',
          },
          {
            text: '肥牛抱蛋饭',
            link: '/sidebar/cooking/FeiNiuBaoDanFan.md',
          },
        ]
      },
      {
        text: '游戏攻略',
        collapsible: true,
        children: [
          {
            text: '三角洲行动-卡战备',
            link: '/sidebar/games/DeltaForceClient/KaZhanBei.md',
          },

        ]
      },
      {
        text: '碎碎念',
        collapsible: true,
        children: [
          {
            text: '无',
            link: '',
          }
        ]
      },
    ],
  }),

  plugins: [
    shikiPlugin({
      // 配置项
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'java'],
    }),
    searchPlugin({
      // 配置项
    }),
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),
      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
