import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Icon, Card} from 'native-base';
export default function TimeClock(){
    return (
        <Card style={{ flexDirection: 'row' , backgroundColor:'#E2F1F2', borderRadius:10}}>
            <View style={{flex:3, marginVertical:5}}>
                <View style={{ marginTop:10,marginLeft:10}}>
                    <TouchableHighlight>
                        <Icon type='FontAwesome5' name='calendar-alt'></Icon>
                    </TouchableHighlight>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text>Entrada</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Icon type='FontAwesome5' name='stopwatch'>
                        <Text>  8:30 A.M.</Text>
                    </Icon>
                </View>
            </View>
            <View style={{flex:3, marginVertical:5}}>
                <View style={{marginTop:10, marginBottom:10, marginLeft:-20}}>
                    <Text>HOY</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text>Salida</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Icon type='FontAwesome5' name='stopwatch'>
                        <Text>  3:00 PM</Text>
                    </Icon>
                </View>
            </View>
        </Card>
    )
}

{/* <Row style={styles.dateCard}>
          <Col>
            <Icon style={styles.calendarDayIcon} type='FontAwesome5' name='calendar-alt'></Icon>
            <Text style={styles.textCenter}>Entrada</Text>
            <Icon style={styles.scheduleIconOne} type='FontAwesome5' name='stopwatch'>
              <Text style={styles.subtitleSchedule}>  8:30 A.M.</Text>
            </Icon>
          </Col>
          <Col>
            <Text style={[styles.titleCardDate, styles.scheduleIconText]}>Hoy</Text>
            <Text style={styles.textCenter}>Salida</Text>
            <Icon style={styles.scheduleIconOne} type='FontAwesome5' name='stopwatch'>
              <Text style={styles.subtitleSchedule}>  8:30 A.M.</Text>
            </Icon>
          </Col>
</Row> */}