import { Input, message } from 'antd'
import { useState } from 'react'

type Props = {
  id: number
  discount: number
  name: string
  listPrice: number
  quantity: number
  handleEditProducts(productValue: any, id: number): void
}

export const ProductDiscount = ({
  id,
  discount,
  name,
  listPrice,
  quantity,
  handleEditProducts
}: Props) => {
  const [discountValue, setDiscount] = useState(Number(discount) ?? 0)
  const price = Number(listPrice * quantity)

  const showToast = () => {
    message.error('Descuento maximos hasta del 10%')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const discount = Number(e.target.value)

    if (discount < 0) {
      return
    }

    if (discount > 10) {
      showToast()
      return
    }

    handleEditProducts({
      [name]: price - (price / 100) * discount,
      descuentos: discount
    }, id)

    setDiscount(Number(e.target.value))
  }

  return (
    <td>
      <Input
        addonAfter={'%'}
        type='number'
        style={{ width: 120 }}
        max={10}
        value={discountValue}
        onChange={onChange}
      />
    </td>
  )
}