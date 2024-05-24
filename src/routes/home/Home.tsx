import Logo from "@/components/common/logo/Logo"
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonLinkProps {
  href: string
  className: string
  children: ReactNode
  type: 'primary' | 'secondary'
  size: 'md' | 'lg'
  label: string
  target: React.HTMLAttributeAnchorTarget
}

const ButtonLink = ({
  href,
  className,
  children,
  type = 'primary',
  size = 'md',
  label,
  target = '_self',
  ...props
} : ButtonLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const buttonVariants = ''

  return (
    <a
      href={href}
      className={buttonVariants}
      aria-label={label}
      target={target}
      {...props}
    >
      {children}
    </a>
  )
}

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className='flex flex-col items-center mx-5 mt-12 mb-20'>
        <Logo className='text-brand w-24 transition-[width] my-4 lg:w-28'/>
        <h1 className='text-[40px] text-[#23272F] font-[600]'>React</h1>
        <p className='text-[32px] text-center text-[#404756]'>
          The library for web and native user interfaces
        </p>
        <div className='flex gap-2 mt-5'>
          <button className='bg-brand px-6 py-3 text-white text-[17px] font-semibold rounded-full transition-opacity duration-75 hover:opacity-50'>
            Learn React
          </button>
          <button className='border border-[##E5E7EB] px-6 py-3 rounded-full text-[#23272F] font-semibold hover:bg-gray-50/5'>
            API Reference
          </button>
          <ButtonLink
            href='/'
            className=''
            label='Homepage'
            target='_self'
            type='primary'
            size='md'
          >
            Test Link
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}

export default Home