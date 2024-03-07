import { Tag } from 'antd'
import { useSession } from 'hooks/use-session'

const Welcome = () => {
  const { user } = useSession()

  return (
    <section className='p-4'>
      <div className='flex items-center gap-3'>
        <h2 className='font-semibold text-xl'>Bienvenido, {user?.nombres} {user?.apellidos}</h2>
        <Tag className='mt-2'>
          {user?.nombre_rol}
        </Tag>
      </div>
    </section>
  )
}
export default Welcome