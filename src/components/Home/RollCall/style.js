import {StyleSheet} from 'react-native';
import {ALICE_BLUE, MADANG,RADICAL_RED, COURIOUS_BLUE, DIM_GRAY} from '../../../consts';

export default StyleSheet.create({
    boxFistRollCall:{
        backgroundColor:ALICE_BLUE, 
        borderRadius:10, 
        marginVertical:5  
    },
    boxFirstRow:{
        flexDirection:'row', 
        flex:3
    },
    boxIcon:{
        flex:2, 
        marginVertical:5,
        marginLeft:10
    },
    iconCalendar:{
        color:COURIOUS_BLUE 
    },
    boxTitle:{
        flex:4,
        marginLeft:40, 
        marginVertical:5
    },
    textRollCall:{
        fontSize:20,
        fontWeight:'bold',
        color: DIM_GRAY
    },
    boxSecondRollCall:{
        flex:3, 
        alignSelf:'center'
    },
    boxSecondRow:{
        flex:3, 
        marginVertical:5
    },
    iconLack:{
        color:RADICAL_RED
    },
    iconTextLack:{
        fontSize:20,
        fontWeight:'bold',
        color: DIM_GRAY
    },
    iconAttended:{
        color:MADANG, 
        alignSelf:'center'
    },
    iconTextAttended:{
        fontSize:20,
        fontWeight:'bold',
        color: DIM_GRAY
    }
})