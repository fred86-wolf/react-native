import {StyleSheet} from 'react-native';
import {DIM_GRAY,COURIOUS_BLUE,PRUSSIAN_BLUE, ALICE_BLUE} from '../../../consts';

export default StyleSheet.create({
    boxMainTimeClock:{
        flexDirection: 'row', 
        backgroundColor:ALICE_BLUE, 
        borderRadius:10, 
        marginVertical:10 
    },
    boxContent:{
        flex:3
    },
    boxFistCalendar:{
        flex:2, 
        marginVertical:5,
        marginLeft:10
    },
    iconCalendar:{
        color:COURIOUS_BLUE
    },
    boxEntryOrExit:{
        flex:2,
        alignSelf:'center'
    },
    textEntryOrExit:{
        color:PRUSSIAN_BLUE
    },
    boxEntryOrExitClock:{
        flex:2,
        alignSelf:'center', 
        marginVertical:10 
    },
    iconEntryOrExitWatch:{
        color:DIM_GRAY  
    },
    textWatch:{
        color:DIM_GRAY,
        fontSize:25,
        fontWeight:'100'
    },
    boxWatchDay:{
        flex:2,
        marginVertical:5, 
        marginLeft:-20
    },
    titleWathDay:{
        fontSize:20,
        fontWeight:'bold',
        color: DIM_GRAY
    }
})