import { Avatar } from 'antd'
import { useSession } from 'hooks/use-session'

export const UserCard: React.FC = () => {
  const { user } = useSession()

  return (
    <div className='p-3 border-t'>
      <div className='flex gap-3'>
        <div className='relative'>
          <Avatar size={40} className='uppercase font-medium bg-gray-400/75'>
            {user?.nombres?.charAt(0)} {user?.apellidos?.charAt(0)}
          </Avatar>
          <div className='absolute w-3 h-3 bg-green-400 bottom-0 right-0 rounded-full' />
        </div>
        <div className='pt-1'>
          <h2 className='text-gray-900 mb-0.5'>{user?.nombres} {user?.apellidos?.split(' ')[0]}</h2>
          <p className='text-sm text-gray-500 capitalize'>{user?.nombre_rol}</p>
        </div>
      </div>
    </div>
  )
}
