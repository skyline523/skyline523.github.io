import path from "path";
import { writeFileSync } from "fs";
import { Feed } from 'feed'
import { type SiteConfig, createContentLoader } from 'vitepress'

const NAME = 'Leet'
const DESCRIPTION = 'Leet\' Blog，包含前端常用知识、学习记录笔记、工具分享等'
const BASE_URL = 'https://skyline523.github.io/'

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: NAME,
    description: DESCRIPTION,
    id: BASE_URL,
    link: BASE_URL,
    language: 'zh-CN',
    image: 'https://avatars.githubusercontent.com/u/76251617',
    favicon: `https://avatars.githubusercontent.com/u/76251617`,
    copyright:
      'Copyright (c) 2023-present Leet',
  })

  const posts = await createContentLoader('**/*.md', {
    excerpt: true,
    render: true,
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter?.date as string)
      - +new Date(a.frontmatter?.date as string),
  )

  for (const { url, frontmatter, html } of posts) {
    let postTitle = '无题'
    postTitle = html?.match(/<h1 id=(.*)>(.*?)<a .*?>/)?.[2] || postTitle
    feed.addItem({
      title: frontmatter?.title || postTitle,
      id: `${BASE_URL}${url.slice(1)}`,
      link: `${BASE_URL}${url.slice(1)}`,
      guid: `${BASE_URL}${url.slice(1)}`,
      description: html,
      content: html,
      author: [
        {
          name: 'Leet',
          link: 'https://github.com/skyline523'
        },
      ],
      date: frontmatter?.date || new Date('2021-07-01'),
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}