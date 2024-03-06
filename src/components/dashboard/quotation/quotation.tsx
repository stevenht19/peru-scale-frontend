import {
  Document,
  Page,
  Text,
  View,
} from '@react-pdf/renderer'
import { QuoteViewResponse } from 'pages/quote view/quote_view'
import { currencyFormat } from 'utils/money'
import { Header } from './quotation-header'
import { OptionalServiceQuotationRequest } from 'shared/quotation'
import { styles } from './theme'
import dayjs from 'dayjs'
import { Footer } from './quotation-footer'

dayjs.locale('es')

export const QuotationProductPDF = ({
  quotation,
  products
}: QuoteViewResponse) => {

  const totalPrice = products
    .reduce((acc, p) => (p.precio_unitario ? Number(p?.precio_unitario) : (p?.precio * p.cantidad)) + acc, 0)

  return (
    <Document>
      <Page size={'A4'}>
        <View style={styles.main}>
          <Header
            totalProducts={products?.length ?? 0}
            {...quotation as OptionalServiceQuotationRequest}
          />
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={[styles.row1, styles.thead]}>Item</Text>
              <Text style={[styles.row2, styles.thead]}>Cant</Text>
              {products.length > 1 && (
                <Text style={[styles.row2, styles.thead]}>Precio</Text>
              )}
              <Text style={[styles.row3, styles.thead]}>Descripción</Text>
            </View>
            {products.map((product, i) => (
              <View key={product.id} style={styles.row} wrap={false}>
                <Text style={styles.row1}>
                  <Text style={styles.bold}>{i < 10 ? (`0${i + 1}`) : i + 1}</Text>
                </Text>
                <Text style={styles.row2}>{product.cantidad}</Text>
                {
                  products.length > 1 && (
                    <Text style={styles.row2}>S/. {currencyFormat(Number(product?.precio_unitario ? product?.precio_unitario : (product.precio * product.cantidad)))}</Text>
                  )
                }
                <Text style={styles.row3}>{product.descripcion}</Text>
              </View>
            ))}
          </View>
          <Footer totalPrice={totalPrice} />
        </View>
      </Page>
    </Document>
  )
}