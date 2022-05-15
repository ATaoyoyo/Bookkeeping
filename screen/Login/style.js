import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
  },

  desc: {
    info: {
      marginBottom: 16,
    },
  },

  labelText: {
    paddingLeft: 16,
    marginBottom: 16,
    fontSize: 16,

    text: {
      color: '#f1f1f1',
    },
  },

  from: {
    fromItem: {
      position: 'relative',
      marginTop: 24,

      input: {
        borderRadius: 31.5,
      },

      text: {
        position: 'absolute',
        top: 16,
        left: 16,
      },

      code: {
        position: 'absolute',
        paddingLeft: 16,
        right: 16,
        bottom: 16,
        borderLeftWidth: 1,
        borderColor: '#666',

        text: {
          color: '#12C765',
        },
      },
    },

    loginButton: {
      marginTop: 40,
      fontSize: 18,
      height: 48,
      borderRadius: 31.5,
      backgroundColor: '#12C765',
      borderColor: '#12C765',
    },
  },

  bottom: {
    marginTop: 80,
  },

  otherLogin: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
  },

  otherChat: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',

    icon: {
      marginTop: 26,
      marginLeft: 16,
      marginRight: 16,
      width: 44,
      height: 44,
      borderRadius: '50%',
    },
  },
})
