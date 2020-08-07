import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home';
import Awards from '../views/Awards';
// import Schedule from '../views/Schedule';
const Stack = createStackNavigator();

export default function NavStack(){
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Awards' component={Awards}/>
            {/* <Stack.Screen name='Schedule' component={Schedule}/> */}
        </Stack.Navigator>
    )
}
