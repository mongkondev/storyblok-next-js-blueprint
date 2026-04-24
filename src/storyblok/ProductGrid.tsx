import * as React from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import type { ProductGridContent } from '../content'
import ProductIcon from './ProductIcon'

export type ProductGridProps = {
  blok: ProductGridContent
}

function ProductGrid({ blok }: ProductGridProps) {
  const products = blok.products ?? []

  return (
    <section
      {...storyblokEditable(blok)}
      className="py-10 sm:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {blok.title && (
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 text-center mb-8">
            {blok.title}
          </h2>
        )}
        {products.length === 0 && (
          <p className="text-center text-gray-400 italic">No products added</p>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {products.map((product) => (
            <ProductIcon key={product._uid} blok={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
