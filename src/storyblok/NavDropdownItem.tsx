import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import type { NavDropdownItemContent } from '../content'
import type {
  AssetLinkContent,
  EmailLinkContent,
  StoryLinkContent,
  UrlLinkContent,
} from '../delivery-api'

export type NavDropdownItemProps = {
  blok: NavDropdownItemContent
}

const hrefFromStoryLink = (slugs: string): string =>
  '/' + slugs.split('/').slice(1).join('/')

function NavDropdownItem({ blok }: NavDropdownItemProps) {
  const className = `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
    blok.highlighted
      ? 'bg-emerald-700 text-white hover:bg-emerald-800'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }`

  const content = (
    <div className="flex items-center justify-between w-full gap-4">
      <span>{blok.label}</span>
      {blok.description ? (
        <span
          className={`text-xs ${blok.highlighted ? 'text-emerald-100' : 'text-gray-500'}`}
        >
          {blok.description}
        </span>
      ) : null}
    </div>
  )

  if (!blok.link) {
    return (
      <div {...storyblokEditable(blok)} className={className}>
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
          className={className}
        >
          {content}
        </Link>
      ) : null}
      {blok.link.linktype === 'story' ? (
        <Link
          href={hrefFromStoryLink((blok.link as StoryLinkContent).cached_url)}
          target={blok.link.target}
          className={className}
        >
          {content}
        </Link>
      ) : null}
      {blok.link.linktype === 'email' ? (
        <Link
          href={`mailto:${(blok.link as EmailLinkContent).email}`}
          className={className}
        >
          {content}
        </Link>
      ) : null}
      {blok.link.linktype === 'asset' ? (
        <Link
          href={(blok.link as AssetLinkContent).cached_url}
          target={blok.link.target}
          className={className}
        >
          {content}
        </Link>
      ) : null}
    </div>
  )
}

export default NavDropdownItem
