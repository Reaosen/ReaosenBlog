module.exports = {
  // 添加标题和描述
  title: "Reaosen's blog",
  description: "这是我的个人网站，用来存放一些有用或者没用的碎碎念",
  lang: 'zh-CN',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/reaosen_favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "CSDN", link: "https://blog.csdn.net/qq_31698207?type=blog" },
      { text: "Github", link: "https://github.com/Reaosen" },
    ],
    // 侧边栏
    sidebar: [
      {
        title: '工作笔记',   // 必要的
        collapsable: true,// 是否可折叠，默认为true
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '7月工作笔记',   // 必要的
            path: '/workExperience/julyWork.md',     // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          }
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
        title: '菜单',
        collapsable: true,
        children: [
          {
            title: '红烧肉',
            path: '/cooking/hongshaorou.md',
            
          }
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
  },
}; 
