import { StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import {PRUSSIAN_BLUE, WHITE_SMOKE} from '../../consts';
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
  saveBtn: {
    backgroundColor:PRUSSIAN_BLUE,
    marginTop: 10,
    width: width / 1.5,
    height: height/10,
    alignSelf:'center',
    justifyContent:'space-around',
    borderRadius:10
  },
  textBtn:{
    color:WHITE_SMOKE, 
    fontWeight:'bold', 
    fontSize:20
  }
});