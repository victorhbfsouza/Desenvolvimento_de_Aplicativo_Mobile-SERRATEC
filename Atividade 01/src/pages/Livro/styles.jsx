
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        flexDirection: 'column',
        padding: 8,
        gap: 10
    },
    container:{
        flex: 1/2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    rightMenu:{
        flex:1,
        height: '100%',
        maxHeight: 200,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }, 
    bookCurrency:{
        fontSize: 10,
        fontWeight: 100
    } ,
    bookInfo:{
        flex: 1,
        flexDirection: 'column'
    },
    bookTitle:{
        fontSize: 20,
        fontWeight: 600
    },
    bookAuthor:{
        fontSize: 16,
        color: "#767575",
    },
    bookPublisher:{
        fontSize: 14,
        color: "#A8A3A3"
    },
    priceContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2,
    },
    addCartBtn:{
       flexWrap: 'nowrap',
       flexDirection: 'row',
       gap: 10,
       maxWidth: 400,
       minWidth:100,
       padding: 10,
       alignItems: 'center',
       justifyContent: 'center',
       color: '#ffffff',
       backgroundColor: '#3176ca',
       borderRadius: 8
    },
    btnText:{
        color: '#ffffff'
    },
    bookPrice:{
        fontSize: 23
    },
    description:{
    },  
    descriptionTitle:{
        fontSize: 27,
        textAlign: 'justify'
    },
    descriptionText:{

    },
})