import Logo from "@/components/common/logo/Logo"
import { Link } from "react-router-dom"
import { siteConfig } from "@/utils/siteConfig"
import NavLink from "./nav-link/NavLink"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollDetectorRef = useRef<HTMLDivElement>(null)

  const scrollingStyles = isScrolled ? 'border-b border-b-[#E5E7EB] shadow-[0px_16px_32px_-16px_rgba(0,_0,_0,_0.1)]' : ''

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsScrolled(!entry.isIntersecting)
      })
    }, {
      root: null,
      rootMargin: '0px 0px',
      threshold: 0,
    })
    if (scrollDetectorRef.current) {
      observer.observe(scrollDetectorRef?.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={scrollDetectorRef}></div>
      <div className='sticky top-0 z-10'>
        <nav className={scrollingStyles + ' flex items-center bg-wash w-full h-16 py-2 px-4 transition-shadow'}>
          <div className='flex items-center'>
            <Link to='/'>
              <Logo className='text-brand w-10 h-10' />
            </Link>
            <Link
              className="text-gray-50 hover:underline hover:text-link ml-2 mr-4"
              to='/'
            >
              v{siteConfig.version}
            </Link>
          </div>

          {/* SEARCH BAR */}
          <div className='h-full w-full bg-gray-30/20 rounded-full'>

          </div>

          {/* NAV LINKS */}
          <div className='flex gap-[6px] h-full'>
            <NavLink to='/'>
              Learn
            </NavLink>
            <NavLink to='/'>
              Reference
            </NavLink>
            <NavLink to='/'>
              Community
            </NavLink>
            <NavLink to='/'>
              Blog
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header