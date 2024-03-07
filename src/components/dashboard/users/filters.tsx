import { Badge } from 'components/ui/badge'

type FiltersProps = {
  totalData: number
  children: React.ReactNode
}

export const Filters: React.FC<FiltersProps> = ({
  totalData,
  children
}) => {
  return (
    <div className='flex items-start gap-3 mt-2'>
      <Badge total={totalData} />
      <div className='flex justify-end gap-3 flex-1'>
        {children}
      </div>
    </div>
  )
}
