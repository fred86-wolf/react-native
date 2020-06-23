import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
    form:{
        width:width/1.5
    }
});