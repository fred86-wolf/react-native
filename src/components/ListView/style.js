import {StyleSheets, StyleSheet} from 'react-native';
import {COURIOUS_BLUE,WHITE_SMOKE} from '../../consts';

export default StyleSheet.create({
    boxItemList:{
        flexDirection:'row', 
        justifyContent:'space-between',
        marginVertical:5,
        marginHorizontal:1,
        padding:10, 
        backgroundColor:WHITE_SMOKE, 
        borderRadius:10
    },
    badgeMaker:{
        flex:1,
        backgroundColor:COURIOUS_BLUE, 
        marginLeft:5, 
        borderRadius:5, 
        marginVertical:5, 
        justifyContent:'center'
    },
    textBadge:{
        alignSelf:'center'
    },
    boxBody:{
        flex:4, 
        marginHorizontal:5, 
        borderRadius:5, 
        marginVertical:5, 
        justifyContent:'center'
    },
    textBody:{
        marginHorizontal:5
    },
    boxRight:{
        flex:1,
        borderRadius:5, 
        marginVertical:5, 
        justifyContent:'center'
    },
    nextBtn:{
        alignSelf:'center'
    },
    arrowIcon:{
        color: COURIOUS_BLUE
    }
})