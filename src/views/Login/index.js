import React ,{useState, useEffect} from 'react';
import { Image, ActivityIndicator, StatusBar} from 'react-native';
import * as Google from 'expo-google-app-auth';
import * as AppAuth from 'expo-app-auth';
import apiCall from '../../redux/api';
import { Container,Text,Grid, Content,Button  } from 'native-base';
import styles from './style';
import genericStyles from '../../styles';
import { saveItem } from '../../utils/storage';
import { ACCESS_TOKEN, USER_INFO, SUCCESS_MESSAGE, USER_ECODELI } from '../../consts';
import enviroment from '../../../environment';
const IMAGE_ECO_LOGO = require('../../../assets/ecodeli-01.png');
const BTN_ECO_LOGO = require('../../../assets/favicon.png');
const {iosClientId, androidClientId, iosStandaloneAppClientId, androidStandaloneAppClientId} = enviroment();

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  const url = 'spLogin';
  const method = 'POST';
  const handleLogin = async () => {
    try {
      setLoading(true);
      const {type, user, accessToken} = await Google.logInAsync({
        iosClientId, 
        androidClientId,
        iosStandaloneAppClientId, 
        androidStandaloneAppClientId,
        scopes:['profile','https://www.googleapis.com/auth/classroom.courses', 'https://www.googleapis.com/auth/classroom.courses.readonly', 'https://www.googleapis.com/auth/classroom.coursework.me']
      });
      const strUser = {
        strAccion: 'LOGIN',
        strUsuario: user.email
      }
      const {data} = await apiCall(url, method, strUser);
      if (type === SUCCESS_MESSAGE && data[0].strUsuario !== '') {
        const userInfo = await saveItem(USER_INFO, JSON.stringify(user));
        const tokenUser = await saveItem(ACCESS_TOKEN, accessToken);
        const strUserEcodeli = await saveItem (USER_ECODELI, data[0].strUsuario);
        setLoading(false);
        navigation.navigate('Home');
      } else{
        setLoading(false);
        alert('Error al Iniciar Sesión');
      }
    } catch (e) {
      setLoading(false);
      alert('Error' + e);
    }
    setLoading(false);
  };
  // const handleRefreshtoken = async () => {
  //   try {
  //     const response = await AppAuth.refreshAsync({
  //       iosClientId, 
  //       androidClientId,
  //       iosStandaloneAppClientId, 
  //       androidStandaloneAppClientId,
  //       scopes:['profile', 'email', 'https://www.googleapis.com/auth/classroom.courses', 'https://www.googleapis.com/auth/classroom.courses.readonly', 'https://www.googleapis.com/auth/classroom.coursework.me']
  //     }, refresToken);
  //     console.log(response);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };
  
  return (
      <Container>
        <Content padder contentContainerStyle={[genericStyles.centeredContent, styles.content]}>
          <StatusBar backgroundColor='#F0EBEA'/>
          <Grid style={[genericStyles.centeredGrid, styles.grid]}>
              <Image style={styles.imageLogo} source={IMAGE_ECO_LOGO} />
              
              <Button rounded style={styles.loginBtn} onPress={handleLogin}>
                <Image source={BTN_ECO_LOGO}/>
                {loading ? <ActivityIndicator size='large'/> : <Text>Iniciar Sesión</Text>}
              </Button>
          </Grid>
        </Content>
      </Container>
  );
};
