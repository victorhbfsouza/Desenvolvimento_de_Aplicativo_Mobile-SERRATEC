
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap:30,
      backgroundColor: '#142344',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 23,
      color: 'white',
      textAlign:'center',
      paddingHorizontal: 20
    },
    signupContainer:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'flex-end',
      alignContent: 'flex-end',
      padding: 10,
      gap: 5,
    },
    firstText:{
      fontSize: 20,
      color: 'white',
    },
    secondText:{
      fontSize: 20,
      fontWeight: 700,
      color: 'white',
    },
    logo: {
      width: 200,
      height: 200,
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
    inputError:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f8bebe',
      color: 'black',
      width: '100%',
      fontSize: 20,
      borderRadius: 15,
      padding: 10,
      borderColor: '#e6474a',
      borderWidth: 2
    },
    textInput:{
      width: '100%',
      height: '100%',
      padding: 10,
      backgroundColor: 'transparent'
    },
    invalidCredentialsContainer:{
      flex: 1,
      width: '100%',
      height: 2,
      alignItems: "flex-end",
      justifyContent: 'center'
    },
    invalidCredentials:{
      color: '#e6474a',
      fontSize: 16
    },
    buttonContent:{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    },
    loginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e6474a',
      width: '100%',
      height: '30%',
      borderRadius: 10,
        text: {
          fontSize: 20,
          color: 'white'
        }
    }
});