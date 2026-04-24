import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import NextImage from 'next/image'
import type { ProductIconContent } from '../content'
import type { StoryLinkContent, UrlLinkContent } from '../delivery-api'

export type ProductIconProps = {
  blok: ProductIconContent
}

const hrefFromStoryLink = (slugs: string): string =>
  '/' + slugs.split('/').slice(1).join('/')

function ProductIcon({ blok }: ProductIconProps) {
  const wrapperClass = `flex flex-col items-center gap-3 p-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 ${
    blok.highlighted
      ? 'bg-white border-2 border-red-500 shadow-md'
      : 'bg-white border border-gray-100 hover:border-emerald-200'
  }`

  const content = (
    <>
      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
        blok.highlighted ? 'bg-red-50' : 'bg-emerald-50'
      }`}>
        {blok.icon?.filename ? (
          <NextImage
            src={blok.icon.filename}
            alt={blok.title}
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke={blok.highlighted ? '#ef4444' : '#059669'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        )}
      </div>
      <span className={`text-xs sm:text-sm font-medium text-center leading-tight ${
        blok.highlighted ? 'text-red-600' : 'text-stone-800'
      }`}>
        {blok.title}
      </span>
      {blok.highlighted && (
        <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">
          แนะนำ
        </span>
      )}
    </>
  )

  if (!blok.link) {
    return (
      <div {...storyblokEditable(blok)} className={wrapperClass}>
        {content}
      </div>
    )
  }

  return (
    <div {...storyblokEditable(blok)}>
      {blok.link.linktype === 'url' ? (
        <Link
          href={(blok.link as UrlLinkContent).cached_url}
          target={blok.link.target}
          className={wrapperClass}
        >
          {content}
        </Link>
      ) : blok.link.linktype === 'story' ? (
        <Link
          href={hrefFromStoryLink((blok.link as StoryLinkContent).cached_url)}
          target={blok.link.target}
          className={wrapperClass}
        >
          {content}
        </Link>
      ) : (
        <div className={wrapperClass}>{content}</div>
      )}
    </div>
  )
}

export default ProductIcon
