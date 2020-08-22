import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Icon, Text} from 'native-base';
import styles from './style';
export default function TimeClock(props){
    const {watch} = props;
    return (
        <View style={styles.boxMainTimeClock}>
            <View style={styles.boxContent}>
                <View style={styles.boxFistCalendar}>
                    <TouchableHighlight>
                        <Icon style={styles.iconCalendar} type='FontAwesome5' name='calendar-alt'></Icon>
                    </TouchableHighlight>
                </View>
                <View style={styles.boxEntryOrExit}>
                    <Text style={styles.textEntryOrExit}>Entrada</Text>
                </View>
                <View style={styles.boxEntryOrExitClock}>
                    <Icon style={styles.iconEntryOrExitWatch} type='FontAwesome5' name='stopwatch'>
                        <Text style={styles.textWatch}>  {watch.strHoraI}</Text>
                    </Icon>
                </View>
            </View>
            <View style={styles.boxContent}>
                <View style={styles.boxWatchDay}>
                    <Text style={styles.titleWathDay}>Hoy</Text>
                </View>
                <View style={styles.boxEntryOrExit}>
                    <Text style={styles.textEntryOrExit}>Salida</Text>
                </View>
                <View style={styles.boxEntryOrExitClock}>
                    <Icon style={styles.iconEntryOrExitWatch} type='FontAwesome5' name='stopwatch'>
                        <Text style={styles.textWatch}>  {watch.strHoraF}</Text>
                    </Icon>
                </View>
            </View>
        </View>
    )
}