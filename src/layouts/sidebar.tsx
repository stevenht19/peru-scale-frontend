import { UserCard } from 'components/ui/user-card'
import { ROLES } from 'consts/roles'
import { Routes } from 'consts/routes'
import { UserGuard } from 'hocs/user-guard'
import { NavLink } from 'react-router-dom'

export const Sidebar: React.FC = () => {
  const defaultClassname = 'p-2 flex gap-2 items-center rounded'
  const activeClassname = 'bg-gray-100'

  return (
    <aside className='border-r h-screen sticky top-0 flex flex-col'>
      <ul className='flex flex-col flex-1 p-2'>
        <UserGuard role={[ROLES.ADMIN]} nullable>
          <NavLink
            to={`${Routes.DASHBOARD}/${Routes.USER_ADMIN}`}
            className={({ isActive }) => {
              return isActive ? `${defaultClassname} ${activeClassname}` : defaultClassname
            }}
          >
            <SolarShieldUserBold />
            Usuarios
          </NavLink>
        </UserGuard>
      </ul>
      <UserCard />
    </aside>
  )
}


export function SolarShieldUserBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24" {...props}><path fill="#888888" fillRule="evenodd" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zM14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" clipRule="evenodd"></path></svg>
  )
}