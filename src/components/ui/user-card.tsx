import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import { Routes } from 'consts/routes'
import { useSession } from 'hooks/use-session'
import { useNavigate } from 'react-router-dom'

export const UserCard: React.FC = () => {
  const { user, logoutUser } = useSession()
  const navigate = useNavigate()
  
  const logout = () => {
    logoutUser()
    navigate(Routes.SIGNIN)
  }

  return (
    <div className='border-t flex justify-between p-3'>
      <div className='flex gap-3 justify-between'>
        <div className='relative'>
          <Avatar size={40} className='uppercase font-medium bg-gray-400/75'>
            {user?.nombres?.charAt(0)}{user?.apellidos?.charAt(0)}
          </Avatar>
          <div className='absolute w-3 h-3 bg-green-400 bottom-[.2rem] right-0 rounded-full' />
        </div>
        <div className='pt-1'>
          <h2 className='text-gray-900 mb-0.5'>{user?.nombres} {user?.apellidos?.split(' ')[0]}</h2>
          <p className='text-sm text-gray-500 capitalize'>{user?.nombre_rol}</p>
        </div>
      </div>
      <Button size='small' icon={<LogoutOutlined />} onClick={logout} />
    </div>
  )
}
