type FiltersProps = {
  totalUsers: number
  children: React.ReactNode
}

export const Filters: React.FC<FiltersProps> = ({
  totalUsers,
  children
}) => {
  return (
    <div className='flex items-start gap-3 mt-2'>
      <div className='mt-2 bg-blue-100/30 border-none px-2 py-0.5 text-xs rounded-md'>
        Total: {totalUsers}
      </div>
      <div className='flex justify-end gap-3 flex-1'>
        {children}
      </div>
    </div>
  )
}
