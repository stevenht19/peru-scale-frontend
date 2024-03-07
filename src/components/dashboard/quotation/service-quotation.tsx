import { Document, Page,Text, View } from '@react-pdf/renderer'
import { Header } from './quotation-header'
import { OptionalServiceQuotationRequest } from 'shared/quotation'
import { Footer } from './quotation-footer'
import { styles } from './theme'
import dayjs from 'dayjs'

dayjs.locale('es')

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
          <Header {...quotation} totalProducts={0} />
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={[styles.serviceRow1, styles.thead]}>Servicio</Text>
              <Text style={[styles.serviceRow2, styles.thead]}>Descripcion</Text>
            </View>
            <View style={styles.row} wrap={false}>
              <Text style={styles.serviceRow1}>{quotation.descripcion_servicio}</Text>
              <Text style={styles.serviceRow2}>{quotation.balanzaDescripcion} {quotation.capacidadBalanza}</Text>
            </View>
          </View>
          <Footer totalPrice={Number(quotation.precio)} />
        </View>
      </Page>
    </Document>
  )
}