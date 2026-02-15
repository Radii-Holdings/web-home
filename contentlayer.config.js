import { makeSource, defineDocumentType } from "contentlayer2/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger"

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: { type: "image" },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    },
    toc: {
      type: "json",
      resolve: async (doc) => {

        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;

          return {
            level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : undefined
          }

        })


        return headings;
      }
    }
  },
}));

import { visit } from 'unist-util-visit'

const remarkMermaid = () => (tree) => {
  visit(tree, 'code', (node) => {
    if (node.lang === 'mermaid' || node.lang === 'graph') {
      // Convert code block to custom Mermaid component
      node.type = 'mdxJsxFlowElement'
      node.name = 'Mermaid'
      node.attributes = [
        { type: 'mdxJsxAttribute', name: 'chart', value: node.value }
      ]
      node.children = []
      // Clear lang so other plugins don't process it (though type change should be enough)
      delete node.lang
      delete node.meta
      delete node.value
    }
  })
}

const codeOptions = {
  theme: 'github-dark',
  grid: false,
}

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMermaid],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }], [rehypePrettyCode, codeOptions]]
  }
});
