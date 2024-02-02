import { DeleteOutlined } from '@ant-design/icons'
import { Button, Image, Popconfirm, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { PreQuotedProduct } from 'models/Products'

interface PreQuoteListProps {
  products: PreQuotedProduct[]
  onDeleteProduct(id: PreQuotedProduct['id']): void
}

export function PreQuoteList({ products, onDeleteProduct }: PreQuoteListProps) {
  const columns: ColumnsType<PreQuotedProduct> = [
    {
      title: '',
      key: 1,
      dataIndex: 'imagen',
      render(image, product) {
        return (
          <Image width={40} height={40} src={image} alt={product.nombre} />
        )
      }
    },
    {
      title: 'Producto',
      key: 2,
      dataIndex: 'nombre'
    },
    {
      title: 'Descripcion',
      key: 2,
      dataIndex: 'descripcion'
    },
    {
      title: 'Cantidad',
      key: 3,
      dataIndex: 'quantity'
    },
    {
      title: '',
      key: 4,
      dataIndex: 'id',
      render(id) {
        return (
          <div className='flex'>
            <Popconfirm
              title='Estas seguro de eliminar de la lista?'
              onConfirm={() => onDeleteProduct(id)}
            >
              <Button icon={<DeleteOutlined />} />
            </Popconfirm>
          </div>
        )
      }
    }
  ]

  return (
    <Table columns={columns} dataSource={products} rowKey={(product) => product.id} />
  )
}
