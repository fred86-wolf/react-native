import React, { useState } from 'react';
import { Image, Button } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts'
import * as Google from 'expo-google-app-auth';
import apiCall from '../../redux/api';
import { Container, Text, Grid, Content, Thumbnail } from 'native-base';
import styles from './style';
import genericStyles from '../../styles';
import { saveItem } from '../../utils/storage';
import { ACCESS_TOKEN, USER_INFO, SUCCESS_MESSAGE, USER_ECODELI, BLUE_LAGOON, PRUSSIAN_BLUE } from '../../consts';
import { LinearGradient } from 'expo-linear-gradient';
import enviroment from '../../../environment';
// const BTN_ECO_LOGO = require('../../../assets/favicon.png');
const ECO_LOGO = require('../../../assets/icono-app2.png');
const ERROR_LOGO = require('../../../assets/error.png')
const { iosClientId, androidClientId, iosStandaloneAppClientId, androidStandaloneAppClientId } = enviroment();

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = 'spAppMovil_Ind';
  const method = 'POST';
  const handleLogin = async () => {
    try {
      setLoading(true);
      const { type, user, accessToken } = await Google.logInAsync({
        androidClientId,
        iosClientId,
        androidStandaloneAppClientId,
        iosStandaloneAppClientId,
        scopes: ['profile', 'https://www.googleapis.com/auth/classroom.courses', 'https://www.googleapis.com/auth/classroom.courses.readonly', 'https://www.googleapis.com/auth/classroom.coursework.me']
      });
      const strUser = {
        strAccion: 'LOGIN',
        strUsuario: user.email
      }
      const { data } = await apiCall(url, method, strUser);
      const User = {
        strRol: data[0].strRol,
        strUsuario: data[0].strUsuario
      }
      if (type === SUCCESS_MESSAGE && data[0].strUsuario !== '' && (data[0].strRol == 'OPERATIVO' || data[0].strRol == 'SUPERVISOR' || data[0].strRol == 'OPERARIO')) {
        const userInfo = await saveItem(USER_INFO, JSON.stringify(user));
        const tokenUser = await saveItem(ACCESS_TOKEN, accessToken);
        const strUserEcodeli = await saveItem(USER_ECODELI, JSON.stringify(User));
        navigation.navigate('Home');
        setError(false);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (e) {
      setError(true);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
      <LinearGradient
      colors={[BLUE_LAGOON, PRUSSIAN_BLUE]} style={styles.linearGradient}>
        <Content padder contentContainerStyle={genericStyles.centeredContent}>
          <Grid style={[genericStyles.centeredGrid, styles.grid]}>
            <Text style={{alignSelf:'flex-start', marginLeft:10, fontSize:35, color:'white'}}>Ecodeli Industrial</Text>
            <Text style={{alignSelf:'flex-start', marginLeft:10, fontWeight:'bold',color:'white'}}>Los profesionales en limpieza</Text>
            <Image style={{marginTop:50,width:200, height:200}} source={ECO_LOGO}/>
            <Button style={styles.loginBtn} onPress={handleLogin}>
              <Text>Iniciar Sesión</Text>
            </Button>
            <AwesomeAlert show={loading} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} customView={renderCustomAlertLoading()} message='Por Favor Espere...' />
            <AwesomeAlert show={error} title='Error' customView={renderCustomAlertError()} message='¡Error al Iniciar Sesión!' />
          </Grid>
        </Content>
      </LinearGradient>
  );
};

renderCustomAlertLoading = () => (
  <Thumbnail large source={ECO_LOGO} />
)
renderCustomAlertError = () => (
  <Thumbnail large source={ERROR_LOGO} />
)
