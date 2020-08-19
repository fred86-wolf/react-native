import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COURIOUS_BLUE} from '../../consts';

export default function Overload(){
    return(
        <View>
            <ActivityIndicator color={COURIOUS_BLUE}/>
        </View>
    )
}