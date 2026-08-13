'use client'

import { usePathname } from 'next/navigation'
import Nav from './Nav'
import Footer from './Footer'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLogin = pathname === '/login'

  return (
    <>
      {!isLogin && <Nav />}
      <main
        id="main-content"
        tabIndex={-1}
        style={isLogin ? undefined : { paddingTop: 'var(--nav-h)' }}
      >
        {children}
      </main>
      {!isLogin && <Footer />}
    </>
  )
}
