import React, {useState,useEffect} from 'react';
import Routes from './routes';
import * as Font from 'expo-font';
import {Spinner} from 'native-base';

import { ROBOTO_FONT, ROBOTO_MEDIUM_FONT } from './consts';

const ROBOTO = require('../node_modules/native-base/Fonts/Roboto.ttf');
const ROBOTO_MEDIUM = require('../node_modules/native-base/Fonts/Roboto_medium.ttf');

export default () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(()=>{
    if (!fontsLoaded) {
      loadFonts();
    }
  }, [fontsLoaded]);

  const loadFonts = async() => {
    await Font.loadAsync({
      [ROBOTO_FONT]: ROBOTO,
      [ROBOTO_MEDIUM_FONT]: ROBOTO_MEDIUM
    });
    setFontsLoaded(true);
  }
  if (!fontsLoaded) {
    return <Spinner color='blue'/>
  }
  return (
      <Routes/>
  );
}