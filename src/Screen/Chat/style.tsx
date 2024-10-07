import { StyleSheet } from "react-native";
import { getRandomColor } from "../../Utils/functions";
import { vh, vw } from '../../Utils/dimension';
import color from "../../Theme/color";
const styles = StyleSheet.create({
    chatContainer: {
      flex: 1,
      backgroundColor: color.secondary,
    },
    header: {
      flexDirection: 'row',
      backgroundColor: color.headerbackground,
     paddingTop:vh(60),
     paddingBottom:vh(20),
      paddingLeft: vw(20),
      paddingRight:vw(5),
      justifyContent: 'space-between',
      borderRadius:vw(15)
   
    },
    left: {
      flexDirection: 'row'
    },
    backButton: {
      padding: 10,
      marginRight: 10,
      backgroundColor: color.white,
      borderRadius: 10,
    },
    initialsContainer: {
      padding: 13,
      backgroundColor: getRandomColor(),
      borderRadius: 33,
    },
    initialsText: {
      color: color.white,
      fontWeight: '600',
      fontSize: 16,
    },
    userInfo: {
      marginLeft: 20,
      flexDirection: 'row',
      paddingTop: 10,
    },
    userName: {
      fontWeight: '600',
      fontSize: 16,
    },
    inputToolbarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
     paddingLeft:vw(20),
     paddingRight:vw(20),
     paddingBottom:vh(50),
     paddingTop:vh(10),
      backgroundColor: color.headerbackground,
    },
    inputToolbar: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
    },
    sendIcon: {
      width: vw(20),
      height: vh(20),
    },
    imgContainer: {
      backgroundColor: color.imgback,
      padding: vh(10),
      borderRadius: vw(30),
    },
    addIconContainer: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addIcon: {
      width: vw(24),
      height: vh(24),
    },
    emojiDisplay: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      fontSize: 30,
    },
    detail: {
      width: vw(20),
      height: vh(20)
    },
    detailContainer: {
      marginRight: vw(10),
      marginTop: vh(5),
      backgroundColor: color.white,
      padding: vw(5),
      borderRadius: vw(5)
    },
    messageContainer: {
        borderRadius: vw(10),
        borderTopRightRadius: vw(0),
        padding: vw(13),
        marginVertical: vh(5),
        marginRight: vw(13),
        maxWidth: '70%',
      },
      messageText: {
        color: color.white,
      },
  });
  
  export default  styles;
  
  
  