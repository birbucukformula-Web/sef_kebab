import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home    from './pages/Home'
import About   from './pages/About'
import Menu    from './pages/Menu'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 page-enter">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"           element={<Layout><Home /></Layout>} />
        <Route path="/hakkimizda" element={<Layout><About /></Layout>} />
        <Route path="/menu"       element={<Layout><Menu /></Layout>} />
        <Route path="/galeri"     element={<Layout><Gallery /></Layout>} />
        <Route path="/iletisim"   element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
