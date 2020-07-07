import React from 'react';
import { Container,Content,H3,ListItem,Left,Text,Body,Right,Button,Icon, Badge } from 'native-base';
import MyHeader from '../../components/Header';
import { NavigationContainer } from '@react-navigation/native';
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
export default function ListEmployee({navigation}){
    return(
        <Container>
            <MyHeader/>
            <Content>
            <H3 style={{alignSelf:'center', marginVertical:10}}>Lista de Empleados</H3>
            <ListItem itemDivider last thumbnail style={{marginTop:5}}>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8'}}>
                    <Text>
                    123
                    </Text>
                </Badge>
              </Left>
              <Body>
                <Text style={{ fontSize: 18 }}>Nombre del Empleado</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=> navigation.navigate('EmployeeDetail')}>
                  <Icon style={{color:'#113f67'}} type='FontAwesome5' name='arrow-alt-circle-right' />
                </Button>
              </Right>
            </ListItem>
            </Content>
        </Container>
    )
}