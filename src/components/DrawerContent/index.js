import React, {useState,useEffect} from 'react';
import {Content, Button,List, ListItem,Badge, Text, Icon, Left, Body, Right, Thumbnail, CardItem } from 'native-base';
import styles from './style';
import genericStyles from '../../styles/index';
import { getItem, clearAll } from '../../utils/storage';
import { USER_INFO, USER_ECODELI } from '../../consts';

export default function DrawerContent(props){
    const [userInfo, setUserInfo] = useState(null);
    const [userEcodeli, setUserEcodeli] = useState(null);
    useEffect(() => {
        if (!userInfo) {
          loadUserInfo();
        }
      },[userEcodeli, userInfo]);
      const loadUserInfo = async () =>{
        let userInfo = await getItem(USER_INFO);
        let userEcodeli = await getItem(USER_ECODELI);
        userEcodeli = JSON.parse(userEcodeli);
        userInfo = JSON.parse(userInfo);
        setUserEcodeli(userEcodeli);
        setUserInfo(userInfo);
      }
      const logOut = async () =>{
        await clearAll();
        props.navigation.navigate('Login');
      }
    return (
    <Content style={styles.container}>
        <List>
            <CardItem bordered style={styles.profileCard}>
        <Left>
        <Thumbnail large source={{ uri: userInfo && userInfo.photoUrl }} />
        </Left>
        <Body style={genericStyles.bodyCenter}>
          <Text>{userInfo && userInfo.name}</Text>
          <Text>Nivel</Text>
          <Text>Desarrollo</Text>
        </Body>
        <Right>
        </Right>
      </CardItem>
      <ListItem icon last onPress={()=> props.navigation.navigate('Home')}>
        <Left>
          <Button>
            <Icon name='home' />
          </Button>
        </Left>
        <Body>
          <Text>Inicio</Text>
        </Body>
        <Right>
          <Badge>
            <Text>5</Text>
          </Badge>
        </Right>
      </ListItem>
      <ListItem icon last onPress={()=> props.navigation.navigate('Awards')}>
        <Left>
          <Button>
            <Icon name='trophy' />
          </Button>
        </Left>
        <Body>
          <Text>Premios</Text>
        </Body>
        <Right>
          <Badge>
            <Text>2</Text>
          </Badge>
        </Right>
      </ListItem>
      { userEcodeli && userEcodeli.strRol === 'SUPERVISOR' ? <ListItem icon last onPress={()=> props.navigation.navigate('CostCenter', { screen: 'OpCoordinator', params:userEcodeli})}>
        <Left>
          <Button>
            <Icon type='FontAwesome5' name='users' />
          </Button>
        </Left>
        <Body>
          <Text>Coordinadores Operativos</Text>
        </Body>
        <Right>
          <Badge>
            <Text>3</Text>
          </Badge>
        </Right>
      </ListItem> : null }
      { userEcodeli && userEcodeli.strRol === 'OPERATIVO' ? <ListItem icon last onPress={()=> props.navigation.navigate('CostCenter', { screen: 'CostCenter', params:userEcodeli})}>
        <Left>
          <Button>
            <Icon type='FontAwesome5' name='closed-captioning' />
          </Button>
        </Left>
        <Body>
          <Text>Centro de Costos</Text>
        </Body>
        <Right>
          <Badge>
            <Text>3</Text>
          </Badge>
        </Right>
      </ListItem> : null }
      {userEcodeli && userEcodeli.strRol === 'OPERARIO' ? <ListItem icon last onPress={()=> props.navigation.navigate('CostCenter', { screen: 'Schedule', params:userEcodeli})}>
        <Left>
          <Button>
            <Icon type='FontAwesome5' name='clipboard-list' />
          </Button>
        </Left>
        <Body>
          <Text>Cronogramas</Text>
        </Body>
        <Right>
          <Badge>
            <Text>3</Text>
          </Badge>
        </Right>
      </ListItem>: null}
      <ListItem icon last onPress={logOut}>
        <Left>
          <Button>
            <Icon type='FontAwesome5' name='sign-out-alt'/>
          </Button>
        </Left>
        <Body>
          <Text>Cerrar Sesión</Text>
        </Body>
      </ListItem>
    </List>
  </Content>
    );
};