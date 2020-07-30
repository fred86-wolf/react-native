import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
// import CostCenter from '../views/CostCenter';
// import ListEmployee from '../views/ListEmployee';
// import EmployeeDetail from '../views/EmployeeDetail';
import Login from '../views/Login';
import Profile from '../views/Profile'
import Home from '../views/Home';
import Loading from '../views/Loading';
import Awards from '../views/Awards';
import {DrawerContent} from '../components/DrawerContent';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Loading' component={Loading} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={MainStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MainStack() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Awards' component={Awards}/>
          {/* <Drawer.Screen name='CostCenter' component={CostCenter}/>
          <Drawer.Screen name='ListEmployee' component={ListEmployee}/>
          <Drawer.Screen name='EmployeeDetail' component={EmployeeDetail}/> */}
          <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator>
    );
  };



