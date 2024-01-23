import { Dropdown, MenuProps, Divider } from 'antd'

export function Header() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Iniciar Sesión
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Registrate
        </a>
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
    <header className='border-b'>
      <nav className='flex justify-between items-center'>
        <div>
          <img src='/logo.png' alt='Logo de la empresa Peru Scale' width={205} height={46} />
        </div>
        <div className='flex items-center gap-3'>
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
          <Divider type={'vertical'} style={{ height: 30 }} />
        </div>
      </nav>
    </header>
  )
}
