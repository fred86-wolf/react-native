import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';
import Home from '../views/Home';
import Loading from '../views/Loading';
import ProfileInfo from '../views/ProfileInfo';
import Awards from '../views/Awards';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Loading' component={Loading} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='ProfileInfo' component={ProfileInfo}/>
          <Stack.Screen name='Awards' component={Awards}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

