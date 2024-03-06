import { Font, StyleSheet } from '@react-pdf/renderer';

Font.register({ family: 'Roboto', src: '/fonts/Roboto-Regular.ttf' })
Font.register({ family: 'RobotoBold', src: '/fonts/Roboto-Bold.ttf' })
Font.register({ family: 'RobotoMedium', src: '/fonts/Roboto-Medium.ttf' });

export const styles = StyleSheet.create({
  main: {
    paddingTop: 22,
    paddingBottom: 20,
    paddingHorizontal: 50,
    fontSize: 13,
    color: '#1A202C',
    fontWeight: 200,
    fontFamily: 'Roboto'
  },
  table: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 25
  },
  price: {
    display: 'flex',
    fontSize: 18,
    paddingHorizontal: 40,
    fontFamily: 'RobotoMedium'
  },
  pl: {
    paddingLeft: 30
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  thead: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontFamily: 'RobotoMedium'
  },
  bold: {
    fontWeight: 'bold',
  },
  fontMd: {
    fontFamily: 'RobotoMedium'
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
  pt: {
    paddingTop: 10,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ptMax: {
    paddingTop: 15
  },
  formapago: {
    display: 'flex',
    paddingLeft: 20
  },
  garantia: {
    paddingLeft: 88
  },
  message: {
    paddingLeft: 145
  },
  serviceRow1: {
    width: '40%'
  },
  serviceRow2: {
    width: '60%'
  }
})