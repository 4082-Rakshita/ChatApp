import {StyleSheet} from 'react-native';
import {vh,vw} from '../../Utils/dimension'
import {getRandomColor} from '../../Utils/functions';
import color from '../../Theme/color';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.chatback,
    },
    chatContainer: {
      flex: 1,
      justifyContent: "space-between",
    },
    noresult:{width:250,height:250},
    top:{
     backgroundColor:color.white,
    paddingVertical:vh(15),
    paddingHorizontal:vw(15),
     borderRadius:5,
     padding:10
    },
    back:{
      width:20,
     height:20,
    },
    searchBar: {
      width:vw(270),
      paddingVertical:vh(15),
      borderRadius: 8,
      paddingLeft: 10,
      marginLeft:20,
      backgroundColor: color.white,
    },
    userList: {
      paddingBottom: 20,
      paddingHorizontal:vw(20),
      borderRadius:vw(35)
    },
    userContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: color.lightgrey,
      backgroundColor: color.white,
    },
    initialsContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: getRandomColor(),
      alignItems: "center",
      justifyContent: "center",
      marginRight: 15,
    },
    initialsText: {
      color: color.white,
      fontWeight: "bold",
      fontSize: 18,
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      fontWeight: "bold",
      fontSize: 16,
      color: color.Dark_Gray,
    },
    userPhone: {
      fontSize: 14,
      color: color.Dim_Gray,
    },
    backButton: {
      backgroundColor: color.BrightBlue,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      borderRadius: 8,
    },
    backButtonText: {
      color: color.white,
      fontWeight: "bold",
    },
    noContactsContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    noContactsText: {
      fontSize: 18,
      color: color.Dim_Gray,
    },
    searchView: {
      flexDirection: 'row',
       padding:vw(20),
       paddingRight:vw(30),
        paddingTop:vh(50)
    }
  });
  
  export default styles;
  