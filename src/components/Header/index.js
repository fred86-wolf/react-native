import React, {useState, useEffect} from 'react';
import {Header,Left,Right,Icon,Button,Thumbnail} from 'native-base';
import genericStyles from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../../utils/storage';
import { USER_INFO } from '../../consts';

export default function MyHeader() {
  const navigation = useNavigation();
    closeDrawer = () => { this.drawer._root.close()};
    openDrawer = () => { this.drawer._root.open() };
  const [userInfo, setUserInfo] = useState(null);
  useEffect (()=> {
    if (!userInfo) {
      loadUserInfo();
    }
  });
  const loadUserInfo = async () => {
    let userInfo = await getItem(USER_INFO);
    userInfo = JSON.parse(userInfo);
    setUserInfo(userInfo);
  }
  
  return (
        <Header style={genericStyles.ecoGeneral}>
          <Left>
            <Button transparent onPress={() => openDrawer() || closeDrawer()}>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Right>
            <Button transparent  onPress={() => navigation.navigate('ProfileInfo')}>
              <Thumbnail small source={{ uri: userInfo && userInfo.photoUrl }}/>
            </Button>
          </Right>
        </Header>
  );
};