import { Dropdown, MenuProps, Divider } from 'antd'
import { Routes } from 'consts/routes';
import { useSession } from 'hooks/use-session';
import { Link } from 'react-router-dom';
// import from ./models/users_management.ts


export function Header() {
  const { user } = useSession()


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
    <header className='border-b px-4 top-0 sticky bg-white z-30'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link to={Routes.HOME}>
          <img src='/logo.png' alt='Logo de la empresa Peru Scale' width={205} height={46} />
        </Link>
        <div className='flex items-center gap-3'>
          {user ? (
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
          )}
          <Divider type={'vertical'} style={{ height: 30 }} />
          <Link to={Routes.PRODUCTS}>Productos</Link>
          <Divider type={'vertical'} style={{ height: 30 }} />
          <span>Servicios</span>
          <Divider type={'vertical'} style={{ height: 30 }} />
          <Link to={Routes.LIST}>Lista pre-cotización</Link>
          <Divider type={'vertical'} style={{ height: 30 }} />
          <Link to={Routes.ADMIN_USER}>Administracion usuarios</Link>

        </div>
      </nav>
    </header>
  )
}
