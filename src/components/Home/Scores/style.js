import {StyleSheet, Dimensions} from 'react-native';
import {WHITE,COURIOUS_BLUE} from '../../../consts';
const { height } = Dimensions.get('window');
export default StyleSheet.create({
    boxMainScore:{
        flexDirection: 'row'
    },
    boxScore:{
        flex:3,
        height:height/3,
        borderRadius:10, 
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:COURIOUS_BLUE
    },
    textScore:{
        fontSize: 25,
        fontWeight:'bold',
        color: WHITE 
    },
    iconScore:{
        color: WHITE,
        fontSize:height/4.5
    },
    boxGraph:{
        flex:3,
        marginLeft:10,
        height:height/3,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:WHITE 
    } 
})