import React, { ReactNode } from 'react'

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      Navbar
      {children}
      Sidebar
    </main>
  )
}

export default RootLayout;