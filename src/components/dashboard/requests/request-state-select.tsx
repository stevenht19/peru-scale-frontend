import { Select, SelectProps } from 'antd'
import { QuotationRequestState } from 'models/Quotation'


export const RequestStateSelect = ({ onChange }: SelectProps) => {
  return (
    <Select
      style={{ width: 120 }}
      onChange={onChange}
      placeholder='Estado'
      options={[
        {
          label: QuotationRequestState.PENDING,
          value: QuotationRequestState.PENDING
        },
        {
          label: QuotationRequestState.ATTENDED,
          value: QuotationRequestState.ATTENDED,
        },
      ]}

    />
  )
}
