import { Document, Page, StyleSheet, Text, View, Image } from '@react-pdf/renderer'
import dayjs from 'dayjs'
import { OptionalServiceQuotationRequest } from 'shared/quotation'
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
  px: {
    paddingHorizontal: 20
  },
  price: {
    display: 'flex',
    fontSize: 18,
    paddingBottom: 13,
    paddingHorizontal: 20
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
    width: '40%',
  },
  row2: {
    width: '80%',
  },
})

type QuotationServiceProps = {
  quotation: OptionalServiceQuotationRequest
}

export const QuotationServicePDF = ({
  quotation,
}: QuotationServiceProps) => {
  
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
              Atención: {quotation!.nombre_asignado} {quotation!.apellidos_asignado}
            </Text>
            <Text style={styles.pb}>
              En atención a su solicitud, nos es grato remitirles la siguiente cotización de su servicio solicitado
            </Text>
          </View>
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row1}>Servicio</Text>
              <Text style={styles.row2}>Descripcion</Text>
            </View>
            <View style={styles.row} wrap={false}>
              <Text style={styles.row1}>{quotation.descripcion_servicio}</Text>
              <Text style={styles.row2}>{quotation.balanzaDescripcion} {quotation.capacidadBalanza}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.pb}>
              <Text style={styles.pb}>
                Precio Total: <Text style={styles.price}>S/. {currencyFormat(+quotation!.precio!)}</Text> No inc IGV
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
                Esperando a ser favorecidos por su amable preferencia, quedamos de Uds. muy atentamente.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}