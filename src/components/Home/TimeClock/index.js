import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Icon, Text} from 'native-base';
import {DIM_GRAY,COURIOUS_BLUE,PRUSSIAN_BLUE} from '../../../consts';
export default function TimeClock(){
    return (
        <View style={{ flexDirection: 'row' , backgroundColor:'#E2F1F2', borderRadius:10}}>
            <View style={{flex:3}}>
                <View style={{flex:2, marginVertical:5,marginLeft:10}}>
                    <TouchableHighlight>
                        <Icon style={{color:COURIOUS_BLUE}} type='FontAwesome5' name='calendar-alt'></Icon>
                    </TouchableHighlight>
                </View>
                <View style={{ flex:2,alignSelf:'center'}}>
                    <Text style={{color:PRUSSIAN_BLUE}}>Entrada</Text>
                </View>
                <View style={{flex:2,alignSelf:'center', marginVertical:10}}>
                    <Icon style={{color:DIM_GRAY}} type='FontAwesome5' name='stopwatch'>
                        <Text style={{color:DIM_GRAY,fontSize:25,fontWeight:'100'}}>  8:30 A.M.</Text>
                    </Icon>
                </View>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:2,marginVertical:5, marginLeft:-20}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color: DIM_GRAY}}>Hoy</Text>
                </View>
                <View style={{flex:2, alignSelf:'center'}}>
                    <Text style={{color:PRUSSIAN_BLUE}}>Salida</Text>
                </View>
                <View style={{flex:2,alignSelf:'center', marginVertical:10}}>
                    <Icon style={{color:DIM_GRAY}} type='FontAwesome5' name='stopwatch'>
                        <Text style={{color:DIM_GRAY,fontSize:25, fontWeight:'100'}}>  3:00 PM</Text>
                    </Icon>
                </View>
            </View>
        </View>
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