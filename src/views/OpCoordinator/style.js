import { StyleSheet } from 'react-native';
import {BLUE_LAGOON, WHITE_SMOKE} from '../../consts';

export default StyleSheet.create({
  boxOpCoordinator:{
    flex:6,
    flexDirection:'row',
    elevation:5, 
    backgroundColor:BLUE_LAGOON, 
    padding:10, 
    borderRadius:5
  },
  titleOpCoordinator:{
    color:WHITE_SMOKE, 
    fontSize:22
  }
});