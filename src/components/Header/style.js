import { StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    header: {
        backgroundColor: '#113f67',
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    }
});