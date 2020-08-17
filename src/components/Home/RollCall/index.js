import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Text, Icon} from 'native-base';
import {ALICE_BLUE, MADANG,RADICAL_RED, COURIOUS_BLUE, DIM_GRAY} from '../../../consts';

export default function RollCall(props){
    const {watch} = props;
    return(
        <View style={{backgroundColor:ALICE_BLUE, borderRadius:10, marginVertical:5}}>
            <View style={{flexDirection:'row', flex:3}}>
            <View style={{flex:2, marginVertical:5,marginLeft:10}}>
                    <TouchableHighlight>
                        <Icon style={{color:COURIOUS_BLUE}} type='FontAwesome5' name='calendar-alt'></Icon>
                    </TouchableHighlight>
                </View>
                <View style={{flex:4,marginLeft:40, marginVertical:5}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color: DIM_GRAY}}> Hoy</Text>
                </View>
            </View>
            <View style={{flex:3, alignSelf:'center'}}>
                <View style={{flex:3, marginVertical:5}}>
                { watch.strAsistencia === '1' ?  
                    <Icon style={{color:MADANG, alignSelf:'center'}} type='FontAwesome5' name='check-circle'>
                        <Text style={{fontSize:20,fontWeight:'bold',color: DIM_GRAY}}>  Tienes Asistencia</Text>
                    </Icon> :
                    <Icon style={{color:RADICAL_RED}} type='FontAwesome5' name='times-circle'>
                        <Text style={{fontSize:20,fontWeight:'bold',color: DIM_GRAY}}>  Tienes Falta</Text>
                    </Icon>}
                </View>
            </View>
        </View>
    )
}