export const DetailInfoParagraph = ({
  label = '',
  info = ''
}) => {
  return (
    <li>
      <span className='mr-2'>
        {label}
      </span>
      {!!info.length && (
        info
      )}
    </li>
  )
}