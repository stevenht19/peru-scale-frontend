import { Input } from 'antd'

type ProductInputProps = {
  name: string
  value: number
  disabled: boolean
  id: number
  handleEditProduct(values: any, productId: number): void
}

export const ProductInput: React.FC<ProductInputProps> = ({
  value,
  id,
  name,
  disabled,
  handleEditProduct
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    handleEditProduct({
      [name]: +e.target.value
    }, id)
  }

  return (
    <td>
      <Input
        className='mb-1.5 w-36'
        name='precio_unitario'
        type='number'
        addonBefore={'S/.'}
        value={value}
        onChange={onChange}
      />
    </td>
  )
}
