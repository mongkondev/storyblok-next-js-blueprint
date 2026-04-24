import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import NextImage from 'next/image'
import type { PromotionCardContent } from '../content'
import type { StoryLinkContent, UrlLinkContent } from '../delivery-api'

export type PromotionCardProps = {
  blok: PromotionCardContent
}

const hrefFromStoryLink = (slugs: string): string =>
  '/' + slugs.split('/').slice(1).join('/')

function PromotionCard({ blok }: PromotionCardProps) {
  const cardContent = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden">
        {blok.image?.filename ? (
          <NextImage
            src={blok.image.filename}
            alt={blok.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
        {blok.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
            {blok.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-stone-900 mb-1">{blok.title}</h3>
        {blok.description && (
          <p className="text-sm text-gray-600 line-clamp-2">{blok.description}</p>
        )}
      </div>
    </>
  )

  if (!blok.link) {
    return (
      <div
        {...storyblokEditable(blok)}
        className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
      >
        {cardContent}
      </div>
    )
  }

  return (
    <div {...storyblokEditable(blok)}>
      {blok.link.linktype === 'url' ? (
        <Link
          href={(blok.link as UrlLinkContent).cached_url}
          target={blok.link.target}
          className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          {cardContent}
        </Link>
      ) : blok.link.linktype === 'story' ? (
        <Link
          href={hrefFromStoryLink((blok.link as StoryLinkContent).cached_url)}
          target={blok.link.target}
          className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          {cardContent}
        </Link>
      ) : (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          {cardContent}
        </div>
      )}
    </div>
  )
}

export default PromotionCard
