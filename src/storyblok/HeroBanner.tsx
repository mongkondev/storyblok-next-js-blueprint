'use client'
import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import NextImage from 'next/image'
import type { HeroBannerContent } from '../content'
import type { StoryLinkContent, UrlLinkContent } from '../delivery-api'

export type HeroBannerProps = {
  blok: HeroBannerContent
}

const hrefFromStoryLink = (slugs: string): string =>
  '/' + slugs.split('/').slice(1).join('/')

function HeroBanner({ blok }: HeroBannerProps) {
  const ctaLink = blok.ctaLink

  return (
    <div
      {...storyblokEditable(blok)}
      className="relative w-full overflow-hidden bg-gray-50"
    >
      <div className="relative max-w-7xl mx-auto">
        {blok.image?.filename ? (
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7]">
            <NextImage
              src={blok.image.filename}
              alt={blok.image.alt ?? blok.headline}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>
        ) : (
          <div className="w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7] bg-gradient-to-r from-emerald-800 to-emerald-600"></div>
        )}

        <div className="absolute inset-0 flex items-center">
          <div className="px-4 sm:px-8 lg:px-16 max-w-2xl">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 drop-shadow-lg">
              {blok.headline}
            </h1>
            {blok.subtext && (
              <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-5 drop-shadow">
                {blok.subtext}
              </p>
            )}
            {blok.ctaText && ctaLink && (
              <>
                {ctaLink.linktype === 'url' && (
                  <Link
                    href={(ctaLink as UrlLinkContent).cached_url}
                    target={ctaLink.target}
                    className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
                  >
                    {blok.ctaText}
                  </Link>
                )}
                {ctaLink.linktype === 'story' && (
                  <Link
                    href={hrefFromStoryLink((ctaLink as StoryLinkContent).cached_url)}
                    target={ctaLink.target}
                    className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
                  >
                    {blok.ctaText}
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
