import {StyleSheet, Dimensions} from 'react-native';
const { width,height } = Dimensions.get('window');
export default StyleSheet.create({
    carouselHome:{
        height:height/5, 
        width:width/4,
        borderRadius:10, 
        marginRight:15,
        marginTop:10,
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
        marginTop:15,
        alignSelf:'center'
    }
});