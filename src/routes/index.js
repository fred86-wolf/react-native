import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import Profile from '../views/Profile'
import Loading from '../views/Loading';
import DrawerContent from '../components/DrawerContent';
import NavStack from './DrawerStack';
import RolStack from './RolStack';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Loading' component={Loading} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={MainStack}/>
          <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MainStack() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name='Home' component={NavStack} />
          <Drawer.Screen name='CostCenter' component={RolStack}/>
        </Drawer.Navigator>
    );
  };



