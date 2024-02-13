import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'

export const UserRootLayout = () => {
  return (
    <div className='grid grid-flow-col'>
      <Sidebar />
      <main className='overflow-hidden p-4'>
        <Outlet />
      </main>
    </div>
  )
}
