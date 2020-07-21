
import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
    profileImage: {
        marginTop:20,
        width: width / 3,
        height: width / 3,
        alignSelf:'center'
      }
});