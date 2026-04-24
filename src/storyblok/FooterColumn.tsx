import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import type { FooterColumnContent } from '../content'
import FooterLink from './FooterLink'

export type FooterColumnProps = {
  blok: FooterColumnContent
}

function FooterColumn({ blok }: FooterColumnProps) {
  return (
    <div {...storyblokEditable(blok)} className="flex flex-col gap-3">
      <h3 className="text-stone-900 font-semibold text-base">{blok.title}</h3>
      <div className="flex flex-col gap-2">
        {blok.links?.map((link) => (
          <FooterLink key={link._uid} blok={link} />
        ))}
      </div>
    </div>
  )
}

export default FooterColumn
