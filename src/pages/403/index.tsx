import { Result } from 'antd'

export const UnauthorizedPage = () => {
  return (
    <Result
      status="403"
      title="No permitido"
      subTitle="No estás autorizado para entrar a está pagina"
    />
  )
}
