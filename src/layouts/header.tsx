import { Dropdown, MenuProps, Divider } from 'antd'
import { Routes } from 'consts/routes';
import { useSession } from 'hooks/use-session';
import { Link } from 'react-router-dom'

export function Header() {
  const { user } = useSession()
  console.log(user)

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to={Routes.SIGNIN}>
          Iniciar Sesión
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={Routes.SIGNUP}>
          Registrate
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Mi Cuenta
        </a>
      ),
    },
  ];


  return (
    <header className='border-b px-4'>
      <nav className='flex justify-between items-center'>
        <Link to={Routes.HOME}>
          <img src='/logo.png' alt='Logo de la empresa Peru Scale' width={205} height={46} />
        </Link>
        <div className='flex items-center gap-3'>
          {
            user ? (
              <span className='leading-5 py-3'>
                Hola, <strong className='block mt-0.5'>{`${user.nombres} ${user.apellidos?.split(' ')[0]}`}</strong>
              </span>
            ) : (
              <Dropdown
                menu={{ items }}
                overlayStyle={{
                  width: 150
                }}
                placement='bottomRight'
                arrow={{ pointAtCenter: true }}
              >
                <span className='leading-5 py-3'>
                  Hola, <strong className='block mt-0.5'>Inicie Sesión</strong>
                </span>
              </Dropdown>
            )
          }
          <Divider type={'vertical'} style={{ height: 30 }} />
          <span>Productos</span>
          <Divider type={'vertical'} style={{ height: 30 }} />
          <span>Servicios</span>
        </div>
      </nav>
    </header>
  )
}
