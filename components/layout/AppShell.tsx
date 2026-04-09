'use client'

import { usePathname } from 'next/navigation'
import { Sidebar } from '@/components/layout/Sidebar'
import { ViewToggle } from '@/components/layout/ViewToggle'
import { ViewProvider } from '@/context/ViewContext'

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname === '/login') {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <ViewProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-slate-200 px-6 py-2.5 flex items-center justify-end">
            <ViewToggle />
          </header>
          <main className="flex-1 px-8 py-7">{children}</main>
        </div>
      </div>
    </ViewProvider>
  )
}
