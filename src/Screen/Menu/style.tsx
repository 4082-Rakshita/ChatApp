import { StyleSheet } from 'react-native';
import { vw, vh } from '../../Utils/dimension';
import { getRandomColor } from '../../Utils/functions';
import color from '../../Theme/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
  },
  upper: {
    backgroundColor: color.main,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 1,
    paddingHorizontal: vh(20),
    paddingTop: vh(50)
  },
  flat: {
    backgroundColor: color.white,
    padding: vw(15),
    marginLeft: vw(20),
    marginRight: vw(20),
    flexDirection: 'row'
  },
  name:{ 
    marginLeft: vw(10), 
    paddingTop: vh(10) 
  },
  backarrow: {
    backgroundColor: color.iconbackground,
    marginBottom: vh(24),
    padding: vw(16),
    borderRadius: vw(10),
  },
  icon:{ 
    backgroundColor: getRandomColor(), 
    padding: vw(10),
     borderRadius: vw(20)
     },
  message: {
    paddingLeft: vw(20),
    paddingBottom: vh(5)
  },
  backimg: {
    width: vw(15),
    height: vh(13)
  },
  notifi: {
    borderRadius: vw(10),
    backgroundColor: color.iconbackground,
    padding: vw(16),
     marginLeft: vw(80),
    marginBottom: vh(20)
  },
  chaticon: {
    borderRadius: vw(10),
    backgroundColor: color.iconbackground,
    padding: vw(10),
    marginBottom: vh(20)
  },
  sub2: {
    color: 'white',
    fontSize: 13,
    marginBottom: vh(20),
  },
  location: {
    fontWeight: '500',
    color: color.white,
    fontSize: 22,
  },

  img3: {
    width: vw(25),
    height: vh(25),

  },
  img2: {
    width: vw(15),
    height: vh(15),
  },
  lower: {
    backgroundColor: color.secondary,
    flex: 1
  },
  input: {
    marginVertical: vh(10),
    marginHorizontal: vw(16),
    backgroundColor: color.white,
    borderRadius: vw(8),
    flexDirection: 'row'
  },
  nochat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nochatimg: {
    width: vw(200),
    height: vh(160)
  },
  button: {
    backgroundColor: color.main,
    padding: vw(5),
    alignItems: 'center',
    borderRadius: vw(7),
    marginHorizontal: vw(15),
    marginTop: vh(20)
  },
  buttonText: {
    padding: vw(10),
    color:color.white,
    fontSize: 16,
    fontWeight: '400',
  },
  addMsg: {
    width: vw(30),
    height: vh(30),
  },
  userlist: {
    borderRadius: vw(40),
  }

});
export default styles;