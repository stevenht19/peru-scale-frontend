import { NavLink } from 'components/ui/nav-link'
import { UserCard } from 'components/ui/user-card'
import { ROLES } from 'consts/roles'
import { Routes } from 'consts/routes'
import { UserGuard } from 'hocs/user-guard'

export const Sidebar: React.FC = () => {
  return (
    <aside className='border-r h-screen sticky top-0 flex flex-col w-[16.5rem]'>
      <ul className='flex flex-col flex-1 p-2 gap-2'>
        <UserGuard role={[ROLES.ADMIN]} nullable>
          <NavLink to={`${Routes.DASHBOARD}/${Routes.USER_ADMIN}`}>
            <SolarShieldUserBold />
            Usuarios
          </NavLink>
        </UserGuard>
        <NavLink to={`${Routes.DASHBOARD}/${Routes.REQUESTS}`}>
          <SolarNotificationLinesRemoveBold />
          Solicitudes
        </NavLink>
      </ul>
      <UserCard />
    </aside>
  )
}


export function SolarShieldUserBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24" {...props}><path fill="#aba9a9" fillRule="evenodd" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zM14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" clipRule="evenodd"></path></svg>
  )
}

export function SolarNotificationLinesRemoveBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24" {...props}><g fill="#aba9a9" fillRule="evenodd" clipRule="evenodd"><path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h.258c-.405.567-.578 1.205-.662 1.831c-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577c.104.779.348 1.578 1.002 2.233c.655.654 1.454.898 2.233 1.002c.714.096 1.595.096 2.577.096h.184c.982 0 1.863 0 2.577-.096c.626-.084 1.264-.257 1.831-.662V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-5.75-8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></path><path d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841c-.659.659-1.72.659-3.841.659m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06"></path></g></svg>
  )
}