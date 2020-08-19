import {StyleSheet, Dimensions} from 'react-native';
const { width,height } = Dimensions.get('window');
export default StyleSheet.create({
    carouselHome:{
        height:height/3.5, 
        width:width/3,
        borderRadius:10, 
        marginRight:15,
        marginVertical:10,
        backgroundColor:'#E2F1F8'
    },
    carouselHomeInside:{
        flex:2
    },
    carouselImage:{
        flex:1, 
        width:null, 
        height: null, 
        resizeMode:'cover', 
        borderRadius:10
    },
    carouselText:{
        flex:1
    },
    carouselTextInside:{
        alignSelf:'center'
    }
});