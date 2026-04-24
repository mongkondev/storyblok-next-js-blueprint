import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import type { ContactSectionContent } from '../content'

export type ContactSectionProps = {
  blok: ContactSectionContent
}

function ContactSection({ blok }: ContactSectionProps) {
  const lineOa = blok.lineOa ?? blok.line_oa

  return (
    <section
      {...storyblokEditable(blok)}
      className="py-10 sm:py-14 bg-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {blok.title && (
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 text-center mb-8">
            {blok.title}
          </h2>
        )}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {lineOa && (
            <a
              href={lineOa.startsWith('http') ? lineOa : `https://line.me/R/ti/p/${lineOa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#06C755">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.64 14.3c-.24.72-1.2 1.32-2.4 1.32-.72 0-1.32-.24-1.68-.6l-1.44 1.44c-.48.48-1.32.48-1.8 0l-1.44-1.44c-.36.36-.96.6-1.68.6-1.2 0-2.16-.6-2.4-1.32-.12-.36-.12-.72 0-1.08.24-.72 1.2-1.32 2.4-1.32.72 0 1.32.24 1.68.6l1.44-1.44c.48-.48 1.32-.48 1.8 0l1.44 1.44c.36-.36.96-.6 1.68-.6 1.2 0 2.16.6 2.4 1.32.12.36.12.72 0 1.08z"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">TCC Chat</span>
                <span className="text-sm font-semibold text-stone-900">LINE OA</span>
              </div>
            </a>
          )}
          {blok.phone && (
            <a
              href={`tel:${blok.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Call</span>
                <span className="text-sm font-semibold text-stone-900">{blok.phone}</span>
              </div>
            </a>
          )}
          {blok.email && (
            <a
              href={`mailto:${blok.email}`}
              className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Email</span>
                <span className="text-sm font-semibold text-stone-900">{blok.email}</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
