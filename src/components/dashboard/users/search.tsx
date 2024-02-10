import { Input } from 'antd'

type SearchProps = {
  onChange(search: string): void
}

export const Search: React.FC<SearchProps> = ({
  onChange
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className='mb-4 flex justify-end'>
      <Input.Search
        placeholder='Escriba un nombre completo'
        className='w-[15rem]'
        onChange={handleSearch}
      />
    </div>
  )
}