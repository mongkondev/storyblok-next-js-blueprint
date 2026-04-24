'use client'
import * as React from 'react'
import { useState } from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import type { NavMenuItemContent } from '../content'
import type {
  StoryLinkContent,
  UrlLinkContent,
} from '../delivery-api'
import NavDropdownItem from './NavDropdownItem'

export type NavMenuItemProps = {
  blok: NavMenuItemContent
}

const hrefFromStoryLink = (slugs: string): string =>
  '/' + slugs.split('/').slice(1).join('/')

function NavMenuItem({ blok }: NavMenuItemProps) {
  const [open, setOpen] = useState(false)

  const linkClassName =
    'flex items-center gap-1 text-stone-900 text-sm font-semibold leading-tight py-2 px-1 hover:text-emerald-700 transition-colors'

  return (
    <div
      {...storyblokEditable(blok)}
      className="relative"
      onMouseEnter={() => blok.hasDropdown && setOpen(true)}
      onMouseLeave={() => blok.hasDropdown && setOpen(false)}
    >
      {blok.link?.linktype === 'url' ? (
        <Link
          href={(blok.link as UrlLinkContent).cached_url}
          target={blok.link.target}
          className={linkClassName}
        >
          <span>{blok.label}</span>
          {blok.hasDropdown ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform ${open ? 'rotate-180' : ''}`}
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </Link>
      ) : blok.link?.linktype === 'story' ? (
        <Link
          href={hrefFromStoryLink((blok.link as StoryLinkContent).cached_url)}
          target={blok.link.target}
          className={linkClassName}
        >
          <span>{blok.label}</span>
          {blok.hasDropdown ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform ${open ? 'rotate-180' : ''}`}
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </Link>
      ) : (
        <button
          className={linkClassName}
          onClick={() => blok.hasDropdown && setOpen(!open)}
        >
          <span>{blok.label}</span>
          {blok.hasDropdown ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform ${open ? 'rotate-180' : ''}`}
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </button>
      )}

      {blok.hasDropdown && open ? (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-50 flex flex-col gap-2">
          {blok.dropdownItems?.map((item) => (
            <NavDropdownItem key={item._uid} blok={item} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default NavMenuItem
