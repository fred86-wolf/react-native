import React from 'react';
import {createNavigator} from '@react-navigation/stack';
import CostCenter from '../views/CostCenter';
import ListEmployee from '../views/ListEmployee';
import EmployeeDetail from '../views/EmployeeDetail';
// import OpCoordinator from '../views/OpCoordinator';
const Stack = createNavigator();

export default function RolStack(){
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='CostCenter' component={CostCenter}/>
            <Stack.Screen name='ListEmployee' component={ListEmployee}/>
            <Stack.Screen name='EmployeeDetail' component={EmployeeDetail}/>
            {/* <Stack.Screen name='OpCoordinator' component={OpCoordinator}/> */}
        </Stack.Navigator>
    )
}