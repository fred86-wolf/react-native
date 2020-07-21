import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Header,Left,Right,Icon,Button,Thumbnail} from 'native-base';
import genericStyles from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../../utils/storage';
import { USER_INFO} from '../../consts';

export default function MyHeader() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
      if (!userInfo) {
        loadUserInfo();
      }
    },[userInfo]);
  const loadUserInfo = async () => {
    let userInfo = await getItem(USER_INFO);
    userInfo = JSON.parse(userInfo);
    setUserInfo(userInfo);
  }
  
  return (
        <Header style={genericStyles.ecoGeneral}>
          <StatusBar backgroundColor='#113f67'/>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Right>
            <Button transparent  onPress={() => navigation.navigate('Profile')}>
              <Thumbnail small source={{ uri: userInfo && userInfo.photoUrl }}/>
            </Button>
          </Right>
        </Header>
  );
};