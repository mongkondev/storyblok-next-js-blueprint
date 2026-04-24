import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import type { FooterLinkContent } from '../content'
import type {
  AssetLinkContent,
  EmailLinkContent,
  StoryLinkContent,
  UrlLinkContent,
} from '../delivery-api'

export type FooterLinkProps = {
  blok: FooterLinkContent
}

const hrefFromStoryLink = (slugs: string): string =>
  '/' + slugs.split('/').slice(1).join('/')

function FooterLink({ blok }: FooterLinkProps) {
  if (!blok.link) {
    return (
      <span {...storyblokEditable(blok)} className="text-gray-600 text-sm">
        {blok.label}
      </span>
    )
  }

  return (
    <div {...storyblokEditable(blok)}>
      {blok.link.linktype === 'url' ? (
        <Link
          href={(blok.link as UrlLinkContent).cached_url}
          target={blok.link.target}
          className="text-gray-600 hover:text-emerald-700 text-sm transition-colors"
        >
          {blok.label}
        </Link>
      ) : null}
      {blok.link.linktype === 'story' ? (
        <Link
          href={hrefFromStoryLink((blok.link as StoryLinkContent).cached_url)}
          target={blok.link.target}
          className="text-gray-600 hover:text-emerald-700 text-sm transition-colors"
        >
          {blok.label}
        </Link>
      ) : null}
      {blok.link.linktype === 'email' ? (
        <Link
          href={`mailto:${(blok.link as EmailLinkContent).email}`}
          className="text-gray-600 hover:text-emerald-700 text-sm transition-colors"
        >
          {blok.label}
        </Link>
      ) : null}
      {blok.link.linktype === 'asset' ? (
        <Link
          href={(blok.link as AssetLinkContent).cached_url}
          target={blok.link.target}
          className="text-gray-600 hover:text-emerald-700 text-sm transition-colors"
        >
          {blok.label}
        </Link>
      ) : null}
    </div>
  )
}

export default FooterLink
