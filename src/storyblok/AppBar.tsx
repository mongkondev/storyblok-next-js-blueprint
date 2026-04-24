'use client'
import * as React from 'react'
import { useState } from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import NextImage from 'next/image'
import type { AppBarContent } from '../content'
import NavMenuItem from './NavMenuItem'

export type AppBarProps = {
  blok: AppBarContent
}

function AppBar({ blok }: AppBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = blok.menuItems ?? blok.menu_items ?? []
  const logoText = blok.logoText ?? blok.logo_text
  const secondaryLogo = blok.secondaryLogo ?? blok.secondary_logo

  return (
    <div
      {...storyblokEditable(blok)}
      className="relative bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {blok.logo?.filename ? (
              <NextImage
                src={blok.logo.filename}
                alt={blok.logo.alt ?? logoText ?? 'Logo'}
                width={140}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            ) : (
              <div className="flex flex-col leading-tight">
                <span className="text-emerald-700 font-bold text-lg sm:text-xl tracking-tight">
                  TCC
                </span>
                <span className="text-stone-900 text-[10px] sm:text-xs font-medium tracking-wide">
                  {logoText ?? 'connect by THAI GROUP'}
                </span>
              </div>
            )}
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.length === 0 && (
              <span className="text-gray-400 text-sm italic">No menu items added</span>
            )}
            {menuItems.map((item) => (
              <NavMenuItem key={item._uid} blok={item} />
            ))}
          </nav>

          {/* Right: Secondary Logo + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {secondaryLogo?.filename ? (
              <NextImage
                src={secondaryLogo.filename}
                alt="THAI GROUP"
                width={80}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            ) : (
              <div className="hidden sm:flex flex-col items-center leading-tight">
                <span className="text-amber-600 font-bold text-xs tracking-wider">
                  THAI
                </span>
                <span className="text-stone-900 font-bold text-xs tracking-wider">
                  GROUP
                </span>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen ? (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-2 shadow-lg">
          {menuItems.length === 0 && (
            <span className="text-gray-400 text-sm italic py-2">No menu items added</span>
          )}
          {menuItems.map((item) => (
            <div key={item._uid} className="border-b border-gray-50 pb-2 last:border-0">
              {item.link ? (
                <Link
                  href={
                    item.link.linktype === 'url'
                      ? item.link.cached_url
                      : item.link.linktype === 'story'
                        ? '/' + item.link.cached_url.split('/').slice(1).join('/')
                        : '#'
                  }
                  target={item.link.target}
                  className="block py-2 text-stone-900 font-semibold text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="block py-2 text-stone-900 font-semibold text-sm">
                  {item.label}
                </span>
              )}
              {(item.hasDropdown ?? item.has_dropdown) && ((item.dropdownItems ?? item.dropdown_items)?.length ?? 0) > 0 ? (
                <div className="pl-3 mt-1 flex flex-col gap-1">
                  {(item.dropdownItems ?? item.dropdown_items)?.map((dropdown) => (
                    <Link
                      key={dropdown._uid}
                      href={
                        dropdown.link?.linktype === 'url'
                          ? dropdown.link.cached_url
                          : dropdown.link?.linktype === 'story'
                            ? '/' + dropdown.link.cached_url.split('/').slice(1).join('/')
                            : '#'
                      }
                      target={dropdown.link?.target}
                      className={`block px-3 py-2 rounded-md text-sm ${
                        dropdown.highlighted
                          ? 'bg-emerald-700 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {dropdown.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default AppBar
