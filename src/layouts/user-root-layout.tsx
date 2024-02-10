import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'

export const UserRootLayout = () => {
  return (
    <div className='grid grid-cols-5'>
      <Sidebar />
      <main className='p-4 col-span-4'>
        <Outlet />
      </main>
    </div>
  )
}
