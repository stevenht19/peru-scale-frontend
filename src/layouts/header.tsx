import { Dropdown, MenuProps, Divider } from 'antd'
import { ROLES } from 'consts/roles';
import { Routes } from 'consts/routes';
import { UserGuard } from 'hocs/user-guard';
import { useSession } from 'hooks/use-session';
import { Link } from 'react-router-dom';
import { auth } from 'services/auth'

export function Header() {
  const { user } = useSession()

  const onClick = async () => {
    await auth.logout()
    window.location.href = '/'
  }

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
  ];

  const employeeItems: MenuProps['items'] = [
    {
      key: (user?.nombre_rol !== ROLES.CLIENT) ? 0 : 1,
      label: (
        <Link to={Routes.EDITACCOUNT}>
          Mi Cuenta
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <button onClick={onClick}>
          Cerrar Sesión
        </button>
      ),
    },
  ].filter(item => Boolean(item.key))

  return (
    <header className='border-b px-4 top-0 sticky bg-white z-30'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link to={Routes.HOME}>
          <img src='/logo.png' alt='Logo de la empresa Peru Scale' width={205} height={46} />
        </Link>
        <div className='flex items-center gap-3'>
          <UserGuard
            role={[ROLES.ADMIN, ROLES.SELLER, ROLES.CLIENT]}
            nullable
          >
            <Dropdown
              menu={{ items: employeeItems }}
              overlayStyle={{
                width: 150
              }}
              placement='bottomRight'
              arrow={{ pointAtCenter: true }}
            >
              <span className='leading-5 py-3'>
                Hola, <strong className='block mt-0.5'>{`${user?.nombres} ${user?.apellidos?.split(' ')[0]}`}</strong>
              </span>
            </Dropdown>
          </UserGuard>
          {
            !user && (
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
          <Link to={Routes.PRODUCTS}>Productos</Link>
          <Divider type={'vertical'} style={{ height: 30 }} />
          <Link to={Routes.SERVICES}>Servicios</Link>
          <Divider type={'vertical'} style={{ height: 30 }} />
          <Link to={Routes.LIST}>Pre-cotización</Link>
        </div>
      </nav>
    </header>
  )
}
