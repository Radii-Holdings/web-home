"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'


// Normalize image src coming from Markdown/MDX so authors can reference
// files under `public/` using relative paths like "../../public/...".
// Also safely handle spaces in filenames.
const normalizeSrc = (src) => {
  if (!src || typeof src !== 'string') return src
  // Strip any leading ../ segments before `public`
  let out = src.replace(/^(\.\.\/)+public\/?/i, '/')
  // If it still starts with './', normalize to root-based path
  if (out.startsWith('./')) out = out.slice(1)
  // Ensure it begins with '/'
  if (!out.startsWith('/')) out = '/' + out
  // Encode spaces and other unsafe URI chars while preserving slashes
  // Split by '/' and encode each segment
  out = out
    .split('/')
    .map((seg, idx) => (idx === 0 ? seg : encodeURIComponent(seg)))
    .join('/')
  return out
}

// Map Markdown `![]()` -> <img> with normalized src
const MdxImg = (props) => {
  const { src, alt, ...rest } = props
  const normalized = normalizeSrc(src)
  return <img src={normalized} alt={alt || ''} {...rest} />
}

// Fallback: If Markdown image wasn't parsed (due to spaces in URL),
// the MDX ends up as a <p> with the literal text "![alt](src)".
// This component upgrades that specific case into a real <img>.
const MdxP = (props) => {
  const { children, ...rest } = props
  let text = children
  if (Array.isArray(children) && children.length === 1 && typeof children[0] === 'string') {
    text = children[0]
  }
  if (typeof text === 'string') {
    const match = text.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (match) {
      const alt = match[1] || ''
      let src = match[2].trim()
      // Strip surrounding <> or quotes if provided
      if ((src.startsWith('<') && src.endsWith('>')) || (src.startsWith('"') && src.endsWith('"')) || (src.startsWith("'") && src.endsWith("'"))) {
        src = src.slice(1, -1)
      }
      const normalized = normalizeSrc(src)
      return <img src={normalized} alt={alt} />
    }
  }
  return <p {...rest}>{children}</p>
}

const mdxComponents = {
  Image,
  img: MdxImg,
  p: MdxP,
}

const RenderMdx = ({blog}) => {

    const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl
    


    '> 
        <MDXContent components={mdxComponents}/>
    </div>
  )
}

export default RenderMdx
