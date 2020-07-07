import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
  content:{
    backgroundColor:'#f0ebea'
  },
  grid: {
    flexDirection: 'column'
  },
  loginFrm: {
    marginTop: 20,
    width: width / 3,
    height: 60,
    justifyContent: 'center',
  },
  loginBtn: {
    marginTop: 20,
    width: width / 1.5,
    height: 60,
    justifyContent: 'center'
  },
  imageLogo:{
    marginBottom:20,
    height: 120,
    alignSelf:'center'
  }
});