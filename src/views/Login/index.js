import React ,{useState} from 'react';
import { Image, ActivityIndicator} from 'react-native';
import * as Google from 'expo-google-app-auth';
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
  const handleLogin = async () => {
    try {
      setLoading(!loading);
      const {accessToken,type,user } = await Google.logInAsync({
        iosClientId,
        androidClientId,
        iosStandaloneAppClientId,
        androidStandaloneAppClientId,
        scopes:['profile', 'email', 'https://www.googleapis.com/auth/classroom.courses', 'https://www.googleapis.com/auth/classroom.courses.readonly', 'https://www.googleapis.com/auth/classroom.coursework.me']
      });
      const strUser = {
        strAccion: 'LOGIN',
        strUsuario: user.email
      }
      const url = 'spLogin';
      const method = 'POST';
      const data = strUser;
      const response = await apiCall(url, method, data);
      if (type === SUCCESS_MESSAGE && response.data.length > 0) {
        const userInfo = await saveItem(USER_INFO, JSON.stringify(user));
        const tokenUser = await saveItem(ACCESS_TOKEN, accessToken);
        const strUserEcodeli = await saveItem (USER_ECODELI, JSON.stringify(response.data[0]));
        if (userInfo && tokenUser && strUserEcodeli) {
          setLoading(loading);
          navigation.navigate('Home');
        } else{
          alert('Error al iniciar sesion, ¡Intente más tarde!');
        }
      }
    } catch (e) {
      alert('Error' + e);
    }
  };
  
  return (
      <Container>
        <Content padder contentContainerStyle={[genericStyles.centeredContent, styles.content]}>
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
