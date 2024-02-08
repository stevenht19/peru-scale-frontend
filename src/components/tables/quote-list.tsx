/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Image, Popconfirm, Table } from 'antd'
import { EditableCell, EditableRow } from 'components/ui/editable-table'
import { useCounter } from 'hooks/use-count'
import { PreQuotedProduct } from 'models/Products'
import { QuantitySelector } from 'pages/products/[id]/quantity-selector'

interface PreQuoteListProps {
  products: PreQuotedProduct[]
  onDeleteProduct(id: PreQuotedProduct['id']): void
  modifyQuantity(id: PreQuotedProduct['id'], quantity: PreQuotedProduct['quantity']): void
}

export function PreQuoteList({
  products,
  onDeleteProduct,
  modifyQuantity
}: PreQuoteListProps) {
  const columns: any[] = [
    {
      title: '',
      key: 1,
      dataIndex: 'imagen',
      render(image: PreQuotedProduct['imagen'], product: PreQuotedProduct) {
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
      title: 'Precio',
      key: 2,
      dataIndex: 'precio',
      render(_: number, product: PreQuotedProduct) {
        return `S/. ${(product.precio * product.quantity)}`
      }
    },
    {
      title: 'Cantidad',
      key: 3,
      editable: true,
      width: 160,
      dataIndex: 'quantity',
      editableElement: (product: PreQuotedProduct) => {
        return (
          <Quantity product={product} modifyQuantity={modifyQuantity} />
        )
      }

    },
    {
      title: '',
      key: 4,
      dataIndex: 'id',
      render(id: number) {
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

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const editableColumns: any[] = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: PreQuotedProduct) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        editableElement: col.editableElement
      }),
    }
  })

  return (
    <Table
      components={components}
      columns={editableColumns}
      dataSource={products}
      rowClassName={() => 'editable-row'}
      rowKey={(product) => product.id}
    />
  )
}

type QuantityProps = Pick<PreQuoteListProps, 'modifyQuantity'> & {
  product: PreQuotedProduct
}

const Quantity = ({ product, modifyQuantity }: QuantityProps) => {
  const { counter, add, subtract } = useCounter(product.quantity)

  const onAdd = () => {
    modifyQuantity(product.id, product.quantity++)
    add(() => product.stock)
  }

  const onSubtract = () => {
    modifyQuantity(product.id, product.quantity--)
    subtract(() => 1)
  }

  return (
    <QuantitySelector
      counter={counter}
      add={onAdd}
      subtract={onSubtract}
    />
  )
}