'use client'
import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import NextImage from 'next/image'
import type { SplitHeroContent } from '../content'
import type { StoryLinkContent, UrlLinkContent } from '../delivery-api'
import ProductIcon from './ProductIcon'

export type SplitHeroProps = {
  blok: SplitHeroContent
}

const hrefFromStoryLink = (slugs: string): string =>
  '/' + slugs.split('/').slice(1).join('/')

function SplitHero({ blok }: SplitHeroProps) {
  const leftCta = blok.left_cta_link

  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left column: Video + Branding */}
          <div className="flex flex-col gap-4">
            {/* Video box */}
            <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden">
              {blok.video_url ? (
                <video
                  src={blok.video_url}
                  className="w-full h-full object-cover"
                  controls
                  poster={blok.left_logo?.filename}
                />
              ) : blok.left_logo?.filename ? (
                <NextImage
                  src={blok.left_logo.filename}
                  alt={blok.left_brand ?? 'Brand'}
                  fill
                  className="object-contain p-8"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Video box (add video_url or logo)
                </div>
              )}
            </div>

            {/* Brand info */}
            <div className="flex flex-col items-center text-center gap-2">
              {blok.left_brand && (
                <p className="text-emerald-700 font-medium text-sm">{blok.left_brand}</p>
              )}
              {blok.left_tagline && (
                <p className="text-stone-900 font-semibold text-base">{blok.left_tagline}</p>
              )}
              {blok.left_cta_text && leftCta && (
                <>
                  {leftCta.linktype === 'url' && (
                    <Link
                      href={(leftCta as UrlLinkContent).cached_url}
                      target={leftCta.target}
                      className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-full transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {blok.left_cta_text}
                    </Link>
                  )}
                  {leftCta.linktype === 'story' && (
                    <Link
                      href={hrefFromStoryLink((leftCta as StoryLinkContent).cached_url)}
                      target={leftCta.target}
                      className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-full transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {blok.left_cta_text}
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Right column: Title + Products */}
          <div className="flex flex-col gap-5">
            {/* Text section */}
            {(blok.title || blok.description) && (
              <div className="bg-gray-50 rounded-xl p-5 sm:p-6">
                {blok.title && (
                  <h1 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight mb-2">
                    {blok.title}
                  </h1>
                )}
                {blok.description && (
                  <p className="text-sm sm:text-base text-gray-600">
                    {blok.description}
                  </p>
                )}
              </div>
            )}

            {/* Product grid */}
            {blok.products && blok.products.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {blok.products.map((product) => (
                  <ProductIcon key={product._uid} blok={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitHero
