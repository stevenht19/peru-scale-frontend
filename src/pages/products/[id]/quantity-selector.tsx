import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'

type QuantitySelectorProps = {
  quantity: number
  onAdd: () => void
  onSubtract: () => void
}

export const QuantitySelector = ({ quantity, onAdd, onSubtract }: QuantitySelectorProps) => {
  return (
    <Space.Compact size='large'>
      <Input style={{ width: '30%' }} defaultValue={1} value={quantity} />
      <Button onClick={onSubtract} className='px-3 flex justify-center items-center' style={{ width: '10%' }} icon={<MinusOutlined style={{ fontSize: 12 }} />} />
      <Button onClick={onAdd} className='px-3 flex justify-center items-center' style={{ width: '10%' }} icon={<PlusOutlined style={{ fontSize: 12 }} />} />
    </Space.Compact>
  )
}
