import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import Home from '../views/Home';
import Loading from '../views/Loading';
import ProfileInfo from '../views/ProfileInfo';
import Awards from '../views/Awards';
import Profile from '../views/Profile';
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
          <Drawer.Screen name='ProfileInfo' component={ProfileInfo}/>
          <Drawer.Screen name='Awards' component={Awards}/>
          <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    );
  };



