import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom'


export const NavLink = ({ to, children }: NavLinkProps) => {
  const defaultClassname = 'p-2 flex gap-2 items-center rounded'
  const activeClassname = 'bg-gray-100 font-medium'

  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? `${defaultClassname} ${activeClassname}` : defaultClassname
      }}
    >
      {children}
    </RouterNavLink>
  )
}
