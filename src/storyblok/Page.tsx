import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import AppBarView from '../components/AppBar'
import FooterView from '../components/Footer'
import type { PageContent } from '../content'
import Content from './Content'
import AppBar from './AppBar'
import Footer from './Footer'

export type PageProps = {
  blok: PageContent
}

function Page(props: PageProps) {
  const header = Array.isArray(props.blok.header)
    ? props.blok.header[0]
    : props.blok.header
  const footer = Array.isArray(props.blok.footer)
    ? props.blok.footer[0]
    : props.blok.footer

  return (
    <div
      className="flex flex-col items-stretch min-h-screen"
      {...storyblokEditable(props.blok)}
    >
      {header ? (
        <AppBar blok={header} />
      ) : (
        <AppBarView />
      )}
      <main className="flex-1">
        {props.blok.body?.map((content, index) => (
          <Content
            blok={content}
            key={index}
          />
        ))}
      </main>
      {footer ? (
        <Footer blok={footer} />
      ) : (
        <FooterView />
      )}
    </div>
  )
}

export default Page
