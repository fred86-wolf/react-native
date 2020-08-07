import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import {BLUE_LAGOON,PRUSSIAN_BLUE, CHARLOTTE, WHITE_SMOKE} from '../../consts';
const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  grid: {
    flexDirection: 'column'
  },
  loginBtn: {
    width: width / 1.5,
    height: 60,
    justifyContent: 'space-between',
    alignSelf:'center',
    backgroundColor:WHITE_SMOKE,
    borderRadius:5
  },
  textTitle:{
    alignSelf:'flex-start', 
    marginLeft:10, 
    fontWeight:'bold',
    fontSize:40, 
    color:WHITE_SMOKE
  },
  textSlogan:{
    alignSelf:'flex-start', 
    marginLeft:10, 
    fontWeight:'bold',
    color:CHARLOTTE
  },
  textLoginBtn:{
    color:PRUSSIAN_BLUE
  },
  imageLogo:{
    marginVertical:height/14,
    height:height/6.5,
    width:width/4,
    alignSelf:'center'
  }
});