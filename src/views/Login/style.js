import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import {BLUE_LAGOON,PRUSSIAN_BLUE} from '../../consts';
const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  grid: {
    flexDirection: 'column'
  },
  loginBtn: {
    marginTop: 20,
    width: width / 1.5,
    height: 60,
    justifyContent: 'flex-start',
    alignSelf:'center'
  },
  imageLogo:{
    marginBottom:20,
    height: 120,
    alignSelf:'center'
  }
});