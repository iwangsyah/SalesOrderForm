import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  containerForm: {
  },
  input: {
    borderWidth:1,
    height: 32,
    width: '90%',
    alignSelf: 'center'
  },
  text: {
    marginTop: 15,
    color: 'white',
    fontSize: 40,
    alignSelf:'center',
    fontWeight: '900',
    fontFamily: 'Arial'
  },
  textTitle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
