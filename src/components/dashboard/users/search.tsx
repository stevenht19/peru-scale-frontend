import { Input } from 'antd'

export const Search: React.FC = () => {
  return (
    <div className='mb-4 flex justify-end'>
      <Input.Search
        placeholder='Escriba un nombre completo'
        className='w-[15rem]'
      />
    </div>
  )
}