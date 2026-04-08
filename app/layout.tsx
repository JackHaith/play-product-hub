import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'
import { ViewToggle } from '@/components/layout/ViewToggle'
import { ViewProvider } from '@/context/ViewContext'

export const metadata: Metadata = {
  title: 'BBC Play · Product hub',
  description: 'Internal product operating hub for BBC Play — embedded games in articles',
}

const bbcReith = localFont({
  src: [
    {
      path: '../public/fonts/bbcreith_v2.300/BBCReithSans_V2.300/Web/WOFF2/BBCReithSans_W_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/bbcreith_v2.300/BBCReithSans_V2.300/Web/WOFF2/BBCReithSans_W_It.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/bbcreith_v2.300/BBCReithSans_V2.300/Web/WOFF2/BBCReithSans_W_Md.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/bbcreith_v2.300/BBCReithSans_V2.300/Web/WOFF2/BBCReithSans_W_MdIt.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/bbcreith_v2.300/BBCReithSans_V2.300/Web/WOFF2/BBCReithSans_W_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/bbcreith_v2.300/BBCReithSans_V2.300/Web/WOFF2/BBCReithSans_W_BdIt.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-bbc-reith',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={bbcReith.className}>
        <ViewProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
              {/* Top bar */}
              <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-slate-200 px-6 py-2.5 flex items-center justify-end">
                <ViewToggle />
              </header>
              {/* Page content */}
              <main className="flex-1 px-8 py-7">
                {children}
              </main>
            </div>
          </div>
        </ViewProvider>
      </body>
    </html>
  )
}
