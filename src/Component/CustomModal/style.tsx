import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContent: {
    //   backgroundColor: 'red',
      padding:15,
      borderRadius: 8,
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'white',
      marginHorizontal: 20,
      marginTop:300,
     
    },
    modalText: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
      color: "grey",
    },
    modalTextLocked: {
      marginVertical: 20,
      textAlign: 'center',
      fontWeight: "700",
      fontSize: 20,
    },
    lockStyle: {
      width: 25,
      height: 25,
    },
    imageContainer:{
      padding:10,
      borderRadius:25,
      backgroundColor:'#FEF1F1'
    },
})