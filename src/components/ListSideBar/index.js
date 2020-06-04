import React ,{useState,useEffect} from 'react';
import styles from './style';
import {Content, Button,List, ListItem,Badge, Text, Icon, Left, Body, Right, Thumbnail, CardItem } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { getItem, clearAll } from '../../utils/storage';
import { USER_INFO } from '../../consts';

export function ListViewer() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  closeDrawer = () => { this.drawer._root.close()};
  useEffect(() => {
    if (!userInfo) {
      loadUserInfo();
    }
  });
  const loadUserInfo = async () =>{
    let userInfo = await getItem(USER_INFO);
    userInfo = JSON.parse(userInfo);
    setUserInfo(userInfo);
  }
  const logOut = async () =>{
    await clearAll();
    await closeDrawer();
    navigation.navigate('Login');
  }
  return(
  <Content style={styles.container}>
    <List>
      <CardItem bordered style={styles.profileCard}>
        <Left>
        <Thumbnail large source={{ uri: userInfo && userInfo.photoUrl }} />
        </Left>
        <Body style={{justifyContent:'center'}}>
          <Text style={styles.whiteText}>{userInfo && userInfo.name}</Text>
          <Text style={styles.whiteText}>Nivel</Text>
          <Text style={styles.whiteText}>Desarrollo</Text>
        </Body>
        <Right>
        </Right>
      </CardItem>
      <ListItem icon last onPress={()=> navigation.navigate('Home')}>
        <Left>
          <Button>
            <Icon name='home' />
          </Button>
        </Left>
        <Body>
          <Text style={styles.whiteText}>Inicio</Text>
        </Body>
        <Right>
          <Badge>
            <Text>5</Text>
          </Badge>
        </Right>
      </ListItem>
      <ListItem icon last onPress={()=> navigation.navigate('Awards')}>
        <Left>
          <Button>
            <Icon name='trophy' />
          </Button>
        </Left>
        <Body>
          <Text style={styles.whiteText}>Premios</Text>
        </Body>
        <Right>
          <Badge>
            <Text>2</Text>
          </Badge>
        </Right>
      </ListItem>
      <ListItem icon last>
        <Left>
          <Button>
            <Icon type='FontAwesome5' name='building' />
          </Button>
        </Left>
        <Body>
          <Text style={styles.whiteText}>Centro de Costos</Text>
        </Body>
        <Right>
          <Badge>
            <Text>3</Text>
          </Badge>
        </Right>
      </ListItem>
      {/* <ListItem icon last>
        <Left>
          <Button>
            <Icon type='FontAwesome5' name='address-card' />
          </Button>
        </Left>
        <Body>
          <Text style={styles.whiteText}>Concursos</Text>
        </Body>
        <Right>
          <Badge>
            <Text>1</Text>
          </Badge>
        </Right>
      </ListItem> */}
      <ListItem icon last onPress={logOut}>
        <Left>
          <Button>
            <Icon name='log-out'/>
          </Button>
        </Left>
        <Body>
          <Text style={styles.whiteText}>Cerrar Sesión</Text>
        </Body>
      </ListItem>
    </List>
  </Content>
  );
};
export default ListViewer;

