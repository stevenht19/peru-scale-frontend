import { View, Image, Text } from '@react-pdf/renderer'
import { OptionalServiceQuotationRequest } from 'shared/quotation'
import { styles } from './theme'
import dayjs from 'dayjs'

type Props = OptionalServiceQuotationRequest & {
  totalProducts: number
}

export const Header: React.FC<Props> = ({
  totalProducts,
  nombre_asignado,
  apellidos_asignado
}) => {
  const getText = () => {
    if (!totalProducts) {
      return 'nos es grato remitirles la siguiente cotización de su servicio solicitado'
    }

    if (totalProducts === 1) {
      return 'nos es grato remitirles la siguiente cotización de una balanza electrónica.'
    }
    
    if (totalProducts > 1) {
      return 'nos es grato remitirles la siguiente cotización de estas balanzas electrónica.'
    }
  }

  return <>
    <View style={styles.pb}>
      <Image src='/assets/cot.png' />
    </View>
    <View style={styles.pt}>
      <Text style={styles.pb}>
        Lima, {dayjs().format('D MMMM')} del {dayjs().year()}
      </Text>
      <Text style={styles.pb}>
        Señores: <Text style={styles.bold}>SAC</Text>
      </Text>
      <Text style={[styles.pb, styles.fontMd]}>
        Atención: {nombre_asignado} {apellidos_asignado}
      </Text>
      <Text style={styles.pb}>
        En atención a su solicitud, {getText()}
      </Text>
    </View>
  </>
}
