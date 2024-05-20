import { Link, LinkProps } from "react-router-dom"
import { ReactNode } from "react"

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

const NavLink = ({
  children,
  ...props
} : NavLinkProps) => {
  return (
    <div className='text-[#404756] font-[500] h-full'>
      <Link
        className='flex items-center h-full px-3 py-[6px] rounded-full transition-[background-color] hover:bg-primary/5'
        {...props}
      >
        {children}
      </Link>
    </div>
  )
}

export default NavLink