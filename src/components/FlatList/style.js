import {StyleSheet, Dimensions} from 'react-native';
import {ALICE_BLUE, WHISPER, AMBER, DIM_GRAY} from '../../consts';
const { width,height } = Dimensions.get('window');
export default StyleSheet.create({
    carouselHome:{
        height:height/4.5, 
        width:width/4,
        borderRadius:10, 
        marginRight:15, 
        justifyContent:'center',
        marginTop:10,
        marginBottom:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    carouselHomeInside:{
        marginTop:15,
        flex:2,
        marginHorizontal:10
    },
    carouselImage:{
        flex:1, 
        width:null, 
        height: null,
        resizeMode:'cover', 
        borderRadius:10,
        backgroundColor: ALICE_BLUE
    },
    carouselText:{
        marginHorizontal:5,
        marginVertical:5,
        flex:1,
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10
    },
    carouselTextInside:{
        alignSelf:'center',
        color: DIM_GRAY
    },
    borderTextCarousel:{
        backgroundColor: WHISPER
    },
    awardIcon:{
        fontSize:15,
        color: AMBER
    },
})