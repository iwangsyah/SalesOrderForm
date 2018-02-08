import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 360,
  },
  containerForm: {
  },
  input: {
    padding: 5,
    height: 30,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
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
