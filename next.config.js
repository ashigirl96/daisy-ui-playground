import rehypeHighlight from 'rehype-highlight'

/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
})
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
})

// module.exports = nextConfig
