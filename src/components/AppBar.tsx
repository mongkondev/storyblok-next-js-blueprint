'use client'
import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const menuItems = [
  {
    label: 'ผลิตภัณฑ์ในเครือ THAI GROUP',
    href: '#',
    dropdown: [
      { label: 'ประกันภัย SE Life', description: 'ประกันชีวิตและสุขภาพ', href: '#', highlighted: true },
      { label: 'ประกันภัย INSURE', description: '', href: '#', highlighted: false },
      { label: 'รถยนต์สามัญ RDD', description: '', href: '#', highlighted: false },
      { label: 'ประกันภัย SE Motor', description: '', href: '#', highlighted: false },
      { label: 'ประกันภัย SI ISUZU', description: '', href: '#', highlighted: false },
    ],
  },
  {
    label: 'โปรโมชั่นพิเศษ',
    href: '#',
    dropdown: [],
  },
  {
    label: 'บทความ',
    href: '#',
    dropdown: [],
  },
  {
    label: 'บริการลูกค้า',
    href: '/services',
    dropdown: [],
  },
  {
    label: 'ติดต่อเรา',
    href: '/about',
    dropdown: [],
  },
]

function AppBarView() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col leading-tight">
              <span className="text-emerald-700 font-bold text-lg sm:text-xl tracking-tight">
                TCC
              </span>
              <span className="text-stone-900 text-[10px] sm:text-xs font-medium tracking-wide">
                connect by THAI GROUP
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown.length > 0 && setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-stone-900 text-sm font-semibold leading-tight py-2 px-3 hover:text-emerald-700 transition-colors"
                >
                  <span>{item.label}</span>
                  {item.dropdown.length > 0 && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${openDropdown === index ? 'rotate-180' : ''}`}>
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {item.dropdown.length > 0 && openDropdown === index && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-50 flex flex-col gap-2">
                    {item.dropdown.map((dropdown) => (
                      <Link
                        key={dropdown.label}
                        href={dropdown.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          dropdown.highlighted
                            ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        <span>{dropdown.label}</span>
                        {dropdown.description && (
                          <span className={`text-xs ${dropdown.highlighted ? 'text-emerald-100' : 'text-gray-500'}`}>
                            {dropdown.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: THAIGROUP Logo */}
          <div className="hidden sm:flex flex-col items-center leading-tight">
            <span className="text-amber-600 font-bold text-xs tracking-wider">THAI</span>
            <span className="text-stone-900 font-bold text-xs tracking-wider">GROUP</span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-2 shadow-lg">
          {menuItems.map((item) => (
            <div key={item.label} className="border-b border-gray-50 pb-2 last:border-0">
              <Link
                href={item.href}
                className="block py-2 text-stone-900 font-semibold text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown.length > 0 && (
                <div className="pl-3 mt-1 flex flex-col gap-1">
                  {item.dropdown.map((dropdown) => (
                    <Link
                      key={dropdown.label}
                      href={dropdown.href}
                      className={`block px-3 py-2 rounded-md text-sm ${
                        dropdown.highlighted
                          ? 'bg-emerald-700 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {dropdown.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AppBarView
