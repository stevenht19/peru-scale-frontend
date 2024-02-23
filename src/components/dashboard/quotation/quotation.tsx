import { Document, Page, StyleSheet, Text, View, Image } from '@react-pdf/renderer'
import dayjs from 'dayjs'
import { QuoteViewResponse } from 'pages/quote view/quote_view'
import { currencyFormat } from 'utils/money'

dayjs.locale('es')

const styles = StyleSheet.create({
  main: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 50,
    fontSize: 13,
    fontWeight: 200,
  },
  table: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 25
  },
  price: {
    fontSize: 18,
    paddingBottom: 13
  },
  pl: {
    paddingLeft: 50
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #EEE',
    paddingTop: 8,
    paddingBottom: 8,
  },
  pb: {
    paddingBottom: 5
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  },
  header: {
    borderTop: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },
  row1: {
    width: '10%',
  },
  row2: {
    width: '20%',
  },
  row3: {
    width: '70%',
  },
})

export const QuotationProductPDF = ({
  quotation,
  products
}: QuoteViewResponse) => {

  const totalPrice = products
    .reduce((acc, p) => (p.precio_unitario ? Number(p?.precio_unitario) : (p?.precio * p.cantidad)) + acc, 0)


  console.log(quotation, products)
  return (
    <Document>
      <Page size={'A4'}>
        <View style={styles.main}>
          <View style={styles.pb}>
            <Image src='/assets/cot.png' />
          </View>
          <View>
            <Text style={styles.pb}>
              Lima, {dayjs().format('D MMMM')} del {dayjs().year()}
            </Text>
            <Text style={styles.pb}>
              Señores: <Text style={styles.bold}>SAC</Text>
            </Text>
            <Text style={styles.pb}>
              Atención: {quotation.nombre_asignado} {quotation.apellidos_asignado}
            </Text>
            <Text style={styles.pb}>
              En atención a su solicitud, nos es grato remitirles la siguiente cotización de una balanza electrónica.
            </Text>
          </View>
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row1}>Item</Text>
              <Text style={styles.row2}>Cant</Text>
              {products.length > 1 && (
                <Text style={styles.row2}>Precio</Text>
              )}
              <Text style={styles.row3}>Descripción</Text>
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
          <View style={styles.col}>
            <View style={styles.pb}>
              <Text style={styles.pb}>
                Precio Total: <Text style={styles.price}>S/. {currencyFormat(totalPrice)}</Text> No inc IGV
              </Text>
              <Text style={styles.pb}>
                Forma de pago <Text style={styles.pl}>:</Text> CONTADO ADELANTADO
              </Text>
            </View>
            <View style={styles.pb}>
              <Text style={styles.pb}>
                Cta BCP Soles <Text style={styles.pl}>:</Text> 121 231 123 12334
              </Text>
              <Text style={styles.pb}>
                Cta Interbancario Interbank (CCI) <Text style={styles.pl}>:</Text> 00223443324343532932211
              </Text>
            </View>
            <View style={styles.pb}>
              <Text style={styles.pb}>
                Tiempo de entrega <Text style={styles.pl}>:</Text> <Text>
                  7 días después de la confirmación de orden de compra
                </Text>
              </Text>
              <Text style={styles.pb}>
                Cta Interbancario Interbank (CCI) <Text style={styles.pl}>:</Text> 00223443324343532932211
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}