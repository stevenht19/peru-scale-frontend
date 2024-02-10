import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'

export const UserRootLayout = () => {
  return (
    <div className='grid overflow-hidden' style={{ gridTemplateColumns: 'auto 1fr' }}>
      <Sidebar />
      <main className='w-full p-4'>
        <Outlet />
      </main>
    </div>
  )
}
