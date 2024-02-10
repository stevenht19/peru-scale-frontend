export const ErrorText = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <p className='text-[#ff4d4f] text-center text-sm mt-[.3rem]'>
      {children}
    </p>
  )
}
