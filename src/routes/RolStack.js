import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CostCenter from '../views/CostCenter';
import OpCoordinator from '../views/OpCoordinator';
import ListEmployee from '../views/ListEmployee';
import EmployeeDetail from '../views/EmployeeDetail';
import Schedule from '../views/Schedule';
const Stack = createStackNavigator();

export default function RolStack(){
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='OpCoordinator' component={OpCoordinator}/>
            <Stack.Screen name='CostCenter' component={CostCenter}/>
            <Stack.Screen name='ListEmployee' component={ListEmployee}/>
            <Stack.Screen name='EmployeeDetail' component={EmployeeDetail}/>
            <Stack.Screen name='Schedule' component={Schedule}/>
        </Stack.Navigator>
    )
}