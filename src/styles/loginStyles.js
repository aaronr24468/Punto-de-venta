import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 5
  },

  logoContainer: {
    width: '100%',
    height: '30%',
    borderWidth: 3,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoFont:{
    fontSize: 30,
  },


  
  infoContainer: {
    width: '100%',
    height: '53%',
    borderWidth: 3,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap:50
  },
  containerInfoMain:{
    gap: 10
  },
  inputUserContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    boxShadow: 'inset 0px 0px 3px 0px rgb(0,0,0)'
  },
  inputUsername:{
    width: 350,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  inputPasswordContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    boxShadow: 'inset 0px 0px 3px 0px rgb(0,0,0)'
  },
  inputPassword:{
    width: 350,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  loginBtn:{
    width: 200,
    height: 40,
    borderRadius: 10,
    boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center'
  },



  registerContainer: {
    width: '100%',
    height: '16.6%',
    borderWidth: 3,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  registerBtn: {
    width: "auto",
    height: 40,
    padding: 10,
    boxShadow: '0px 0px 5px 0px rgb(0,0,0), 5px 5px 10px 0px rgb(0,0,0)',
    borderRadius: 10
  }
})