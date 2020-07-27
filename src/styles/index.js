import { StyleSheet, Dimensions } from 'react-native';
const { width,height } = Dimensions.get('window');
export default StyleSheet.create({
  centeredContent: {
    flex: 1
  },
  centeredGrid: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText:{
    color:'#FFFFFF'
  },
  redText:{
    color:'#ff0000'
  },
  greenText:{
    color:'#5cb85c'
  },
  ecoGeneral:{
    backgroundColor:'#113f67'
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    textAlign:'center'
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf:'center',
    fontSize: 20,
    textAlign:'center'
  },
  textProfileTitle:{
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '400'
  },
  textProfileInfo:{
    fontSize:20,
    alignSelf:'center'
  },
  textList:{
    fontSize:18
  },
  searchBar:{
    marginVertical:5,
    backgroundColor:'#ffffff',
    borderTopColor:'#ffffff',
    borderBottomColor:'#ffffff',
    paddingHorizontal: width / 10
  },
  inputSearchBar:{
    backgroundColor:'#f2f2f2',
  },
  leftTitle:{
    width: width / 8,
  },
  centerTitle:{
    width: width / 3,
    marginTop:10
  },
  rightTitle:{
    width: width / 8,
  }
});