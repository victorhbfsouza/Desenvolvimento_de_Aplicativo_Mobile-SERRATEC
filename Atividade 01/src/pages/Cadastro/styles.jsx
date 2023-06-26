
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#142344',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      gap: 30
    },
    header:{
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 10
    },
    logo: {
      width: 200,
      height: 200,
    },
    title:{
      fontSize: 23,
      color: 'white',
      textAlign:'center',
      paddingHorizontal: 20
    },
    mainContainer:{
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      gap: 30,
      width: '80%'
    },
    inputContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      color: 'black',
      width: '100%',
      fontSize: 20,
      borderRadius: 15,
      padding: 10,
    },
    textInput:{
      width: '100%',
      height: '100%',
      padding: 10
    },
    signupButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e6474a',
      width: '100%',
      height: '20%',
      borderRadius: 10,
        text: {
          fontSize: 20,
          color: 'white'
        }
    },
    buttonContent:{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    },
    errorContainer:{
      flex: 1,
      width: '100%',
      alignItems: "flex-end",
      justifyContent: 'center'
    },
    textError:{
      color: '#e6474a',
      fontSize: 14
    }
  });