import * as React from 'react'

function FooterView() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://tccmocupweb.my.canva.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
          >
            Micro site
          </a>
          <a
            href="https://tccmocupweb.my.canva.site/fullpage"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
          >
            Web site
          </a>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © TCC by THAI GROUP. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterView
