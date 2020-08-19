import { StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
  grid: {
    flexDirection: 'column'
  },
  profileImage: {
    width: width / 3,
    height: width / 3,
    alignSelf:'center'
  },
  btnOne: {
  width: width/1.1,
  marginTop:10
  },
  saveBtn: {
    marginTop: 10,
    width: width / 1.5,
    height: height/13,
    alignSelf:'center',
    justifyContent: 'center'
  }
});