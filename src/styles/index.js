import { StyleSheet, Dimensions } from 'react-native';
import {PRUSSIAN_BLUE,WHITE,WHITE_SMOKE,BLUE_LAGOON} from '../consts';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
  centeredContent: {
    flex: 1
  },
  centeredGrid: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  ecoGeneral:{
    backgroundColor:PRUSSIAN_BLUE
  },
  textList:{
    fontSize:18
  },
  searchBar:{
    marginVertical:5,
    backgroundColor:WHITE,
    borderTopColor:WHITE,
    borderBottomColor:WHITE,
    paddingHorizontal: width / 10
  },
  inputSearchBar:{
    backgroundColor:WHITE_SMOKE,
  },
  boxtitleListView:{
    flex:6,
    flexDirection:'row',
    elevation:5, 
    backgroundColor:BLUE_LAGOON, 
    padding:10, 
    borderRadius:5
  },
  titleListView:{
    color:WHITE_SMOKE, 
    fontSize:22
  }
});