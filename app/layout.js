import './styles/globals.css'
import './styles/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorTrailWrapper from './components/CursorTrailWrapper'
import { ThemeProvider } from './components/ThemeProvider'
import PageRevealWrapper from './components/PageRevealWrapper'
import ThemeSettings from './components/ThemeSettings'

export const metadata = {
  title: 'Miracle Nnaji - Frontend Developer Portfolio',
  description: 'Portfolio of Miracle Nnaji, a frontend developer specializing in React, Next.js, and modern web technologies.',
  icons: {
    icon: '/Kachi-logoo.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <PageRevealWrapper />
          <CursorTrailWrapper />
          <Navbar />
          <ThemeSettings />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
