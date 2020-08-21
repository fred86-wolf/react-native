import { StyleSheet, Dimensions } from 'react-native';
import { PRUSSIAN_BLUE} from '../../consts';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
    seeBtn:{
        backgroundColor:PRUSSIAN_BLUE,
        width: width / 1.5,
        justifyContent: 'center',
        marginTop:20,
        alignSelf:'center'
    }
});