import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'
import { CounterProps } from 'hooks/use-count'

export const QuantitySelector = ({ counter, add, subtract }: CounterProps) => {
  return (
    <Space.Compact size='large'>
      <Input style={{ width: '100%' }} defaultValue={1} value={counter} />
      <Button onClick={() => subtract()} className='px-3 flex justify-center items-center' style={{ width: '10%' }} icon={<MinusOutlined style={{ fontSize: 12 }} />} />
      <Button onClick={() => add()} className='px-3 flex justify-center items-center' style={{ width: '10%' }} icon={<PlusOutlined style={{ fontSize: 12 }} />} />
    </Space.Compact>
  )
}
