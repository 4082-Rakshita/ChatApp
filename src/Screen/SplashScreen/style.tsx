import { StyleSheet, Dimensions } from "react-native";
import color from "../../Theme/color";
import {vh,vw,SCREEN_HEIGHT,SCREEN_WIDTH} from '../../Utils/dimension'


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logoContainer: {
    position: 'absolute',
  },
 
  text:{
    color:color.white,
    fontFamily: 'Italianno-Regular',
    fontWeight:'bold',
    fontSize:90,
  }
});

export default styles;
