import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

    login: {
      marginBottom: 22,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',

      icon: {
        width: 30,
        height: 30,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: '50%',
      },

      text: {
        marginLeft: 10,
      },
    },

    currentOutPay: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 14,

      text: {
        fontSize: 10,
        color: '#fff',
      },
    },

    currentOutPayMoney: {
      marginBottom: 11,

      text: {
        fontSize: 36,
        fontWeight: '400',
        lineHeight: 44,
        color: '#fff',
      },
    },
  },
})
