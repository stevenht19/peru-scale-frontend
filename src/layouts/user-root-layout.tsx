import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'

export const UserRootLayout = () => {
  return (
    <div className='grid' style={{ gridTemplateColumns: 'auto 1fr'}}>
      <Sidebar />
      <main className='overflow-hidden p-4'>
        <Outlet />
      </main>
    </div>
  )
}
