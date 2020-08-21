import { StyleSheet } from 'react-native';
import {PRUSSIAN_BLUE} from '../../consts';
import Constants from 'expo-constants';

export default StyleSheet.create({
    header: {
        backgroundColor: PRUSSIAN_BLUE,
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    }
});