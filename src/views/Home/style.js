import { StyleSheet, Dimensions } from 'react-native';
import { ALICE_BLUE, COURIOUS_BLUE, WHITE, DIM_GRAY, PRUSSIAN_BLUE, AMBER, WHISPER } from '../../consts';
const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
    mainCard:{
        height: height/5,
        marginRight:10
    },
    cardMain:{
        backgroundColor: COURIOUS_BLUE, 
        flex:2, 
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    cardInside:{
        flexDirection:'column', 
        justifyContent:'center',
        backgroundColor: COURIOUS_BLUE
    },
    
    titleWhite: {
        fontSize: 25,
        fontWeight: '400',
        color: WHITE
    },
    titleCardDate:{
        fontSize:25,
        fontWeight:'bold',
        color: DIM_GRAY
    },
    subtitleSchedule: {
        color:DIM_GRAY,
        fontSize: 25,
        fontWeight:'200'
    },
    dateCard:{
        height:height/7,
        backgroundColor: ALICE_BLUE,
        justifyContent: 'center',
        marginTop:20,
        borderRadius:10
    },
    textCenter:{
        fontWeight:'normal',
        textAlign: 'center',
        color:PRUSSIAN_BLUE
    },
    mlIcon:{
        color: WHITE,
        fontSize: height/6
    },
    scheduleIconText:{
        marginStart:-30,
        marginBottom: 5,
        textAlign:'left'
    },
    scheduleIconOne:{
        marginTop:5,
        marginStart:20,
        color:DIM_GRAY,
        alignSelf:'center'
    },
    scheduleIconTwo:{
        marginTop: 10,
        marginStart:20,
        marginBottom: 5
    },
    mrIcon:{
        color:'#444444',
        fontSize: height/6
    },
    calendarDayIcon:{
        marginTop:10,
        marginStart:10,
        color:COURIOUS_BLUE
    },
    
    seeBtn:{
        width: width / 1.5,
        justifyContent: 'center',
        marginTop:20,
        alignSelf:'center'
    }
});