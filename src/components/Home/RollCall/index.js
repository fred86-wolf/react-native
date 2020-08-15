import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Text, Icon} from 'native-base';
import {ALICE_BLUE, PRUSSIAN_BLUE, COURIOUS_BLUE, DIM_GRAY} from '../../../consts';

export default function RollCall(){
    return(
        <View style={{ flexDirection: 'row' , backgroundColor:ALICE_BLUE, borderRadius:10, marginVertical:5}}>
            <View style={{flex:3}}>
                <View style={{flex:2, marginVertical:5,marginLeft:10}}>
                    <TouchableHighlight>
                        <Icon style={{color:COURIOUS_BLUE}} type='FontAwesome5' name='calendar-alt'></Icon>
                    </TouchableHighlight>
                </View>
                <View style={{ flex:2,alignSelf:'center'}}>
                    <Text style={{color:PRUSSIAN_BLUE}}>Entrada</Text>
                </View>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:2,marginVertical:5, marginLeft:-20}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color: DIM_GRAY}}>Hoy</Text>
                </View>
                <View style={{flex:2, alignSelf:'center'}}>
                    <Text style={{color:PRUSSIAN_BLUE}}>Salida</Text>
                </View>
            </View>
        </View>
    )
}