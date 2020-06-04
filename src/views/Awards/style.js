import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
    mainImage:{
        width: width/2.2,
        height:height/5,
        borderRadius:10
    }
});