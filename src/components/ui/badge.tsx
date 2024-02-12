export const Badge = ({ total = 0 }) => {
  return (
    <div className='mt-2 bg-blue-100/30 border-none px-2 py-0.5 text-xs rounded-md'>
      Total: {total}
    </div>
  )
}
