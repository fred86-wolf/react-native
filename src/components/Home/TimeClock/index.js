import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Icon, Text} from 'native-base';
import {DIM_GRAY,COURIOUS_BLUE,PRUSSIAN_BLUE, ALICE_BLUE} from '../../../consts';
export default function TimeClock(props){
    const {watch} = props;
    return (
        <View style={{ flexDirection: 'row' , backgroundColor:ALICE_BLUE, borderRadius:10, marginVertical:10}}>
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
                        <Text style={{color:DIM_GRAY,fontSize:25,fontWeight:'100'}}>  {watch.strHoraI}</Text>
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
                        <Text style={{color:DIM_GRAY,fontSize:25, fontWeight:'100'}}>  {watch.strHoraF}</Text>
                    </Icon>
                </View>
            </View>
        </View>
    )
}