import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Reaosen\'s blog',
  description: '这是我的个人网站，用来存放一些有用或者没用的碎碎念',

  theme: defaultTheme({
    logo: '/reaosen_favicon.ico',

    navbar: [
      '/',
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

    theme: defaultTheme({
      // 侧边栏数组
      // 所有页面会使用相同的侧边栏
      sidebar: [
        // SidebarItem
        {
          title: '工作笔记',   // 必要的
          collapsable: true,// 是否可折叠，默认为true
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: '7月工作笔记',   // 必要的
              path: '/workExperience/julyWork.md',     // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
              title: '8,9月工作笔记',   // 必要的
              path: '/workExperience/Aug&Sept.md',     // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
              title: '离职（9.22）',   // 必要的
              path: '/workExperience/QihuaSoft.md',     // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
          ]
        },
        {
          title: '技术笔记',
          collapsable: true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: '面试题',
              path: '/technologyStack/interviewQuestions.md',
            },
            {
              title: 'Tomcat日志在idea控制台乱码',
              path: '/technologyStack/Tomcat&Idea.md',
            },
            {
              title: '如何提升代码健壮性',
              path: '/technologyStack/robustnessOfCode.md',
            },
          ]
        },
        {
          title: '读书笔记',
          collapsable: true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: '哲学启蒙-大众哲学',
              path: '/readingNotes/philosophyStart.md',
            }
          ]
        },
        {
          title: '菜谱',
          collapsable: true,
          children: [
            {
              title: '红烧肉',
              path: '/cooking/hongshaorou.md',

            },
            {
              title: '蒜苔炒肉',
              path: '/cooking/suantaichaorou.md',
            },
            {
              title: '肥牛抱蛋饭',
              path: '/cooking/FeiNiuBaoDanFan.md',
            },
          ]
        },
        {
          title: '游戏攻略',
          collapsable: true,
          children: [
            {
              title: '三角洲行动-卡战备',
              path: '/games/DeltaForceClient/KaZhanBei.md',
            },

          ]
        },
        {
          title: '碎碎念',
          collapsable: true,
          children: [
            {
              title: '无',
              path: '',
            }
          ]
        },
      ],
      lastUpdated: '更新时间', // string | boolean
    }),
  }),

  plugins: [
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
