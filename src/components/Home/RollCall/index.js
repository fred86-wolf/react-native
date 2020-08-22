import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Text, Icon} from 'native-base';
import styles from './style';

export default function RollCall(props){
    const {watch} = props;
    return(
        <View style={styles.boxFistRollCall}>
            <View style={styles.boxFirstRow}>
            <View style={styles.boxIcon}>
                    <TouchableHighlight>
                        <Icon style={styles.iconCalendar} type='FontAwesome5' name='calendar-alt'></Icon>
                    </TouchableHighlight>
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.textRollCall}> Hoy</Text>
                </View>
            </View>
            <View style={styles.boxSecondRollCall}>
                <View style={styles.boxSecondRow}>
                { watch.strAsistencia !== '1' ?  
                    <Icon style={styles.iconLack} type='FontAwesome5' name='times-circle'>
                        <Text style={styles.iconTextLack}>  Tienes Falta</Text>
                    </Icon>:
                    <Icon style={styles.iconAttended} type='FontAwesome5' name='check-circle'>
                        <Text style={styles.iconTextAttended}>  Tienes Asistencia</Text>
                    </Icon>}
                </View>
            </View>
        </View>
    )
}