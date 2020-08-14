import { StyleSheet, Dimensions } from 'react-native';
import { ALICE_BLUE, COURIOUS_BLUE, WHITE, DIM_GRAY, PRUSSIAN_BLUE, AMBER, WHISPER } from '../../consts';
const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
    seeBtn:{
        width: width / 1.5,
        justifyContent: 'center',
        marginTop:20,
        alignSelf:'center'
    }
});