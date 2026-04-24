import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import type { FooterContent } from '../content'
import FooterColumn from './FooterColumn'

export type FooterProps = {
  blok: FooterContent
}

function Footer({ blok }: FooterProps) {
  return (
    <footer
      {...storyblokEditable(blok)}
      className="bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blok.columns?.map((column) => (
            <FooterColumn key={column._uid} blok={column} />
          ))}
        </div>
        {blok.bottomText ? (
          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
            {blok.bottomText}
          </div>
        ) : null}
      </div>
    </footer>
  )
}

export default Footer
