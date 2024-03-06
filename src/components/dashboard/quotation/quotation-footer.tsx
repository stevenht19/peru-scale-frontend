import { View, Text } from '@react-pdf/renderer'
import { styles } from './theme'
import { currencyFormat } from 'utils/money'

export const Footer = ({ totalPrice = 0 }) => {
  return (
    <View style={styles.col}>
      <View style={[styles.pb]}>
        <View style={[styles.flex]}>
          <Text>Precio Total :</Text>
          <Text style={styles.price}>S/. {currencyFormat(totalPrice)}</Text>
          <Text>No inc IGV</Text>
        </View>
        <View style={[styles.flex, styles.pb, styles.pt]}>
          <Text>Forma de pago : </Text>
          <Text style={styles.formapago}>
            CONTADO ADELANTADO
          </Text>
        </View>
      </View>
      <View style={styles.pb}>
        <View style={[styles.flex, styles.pb]}>
          <Text>
            Cta BCP Soles :
          </Text>
          <Text style={styles.pl}>
            121 231 123 12334
          </Text>
        </View>
        <Text style={styles.pb}>
          Cta Interbancario Interbank (CCI) <Text style={styles.pl}>:</Text> 00223443324343532932211
        </Text>
      </View>
      <View style={styles.pb}>
        <View style={styles.flex}>
          <Text>
            Tiempo de entrega :
          </Text>
          <Text style={styles.pl}>
            7 días después de la confirmación de orden de compra
          </Text>
        </View>
        <View style={[styles.flex, styles.pb]}>
          <Text style={styles.pb}>
            Garantía :
          </Text>
          <Text style={styles.garantia}>
            1 año (por defecto de fabricación)
          </Text>
        </View>
        <Text style={[styles.pb, styles.message, styles.ptMax]}>
          Esperando a ser favorecidos por su amable preferencia, quedamos de Uds. muy atentamente.
        </Text>
      </View>
    </View>
  )
}
