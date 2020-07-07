import React from 'react';
import  MyHeader  from '../../components/Header';
import { Container,H3, Content,ListItem,Text,Body, Icon,Row, Button, Left,Right, Badge} from 'native-base';

export default function CostCenter({navigation}){
    return(
        <Container>
            <MyHeader/>
            <Content contentContainerStyle={{backgroundColor: '#ffffff'}}>
            <H3 style={{alignSelf:'center', marginVertical:10}}>Centros de Costos</H3>
            <ListItem itemDivider last thumbnail style={{marginTop:5}}>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8'}}>
                  <Text>1252</Text>
                </Badge>
              </Left>
              <Body>
                <Text style={{ fontSize: 18 }}>Descripción de Centro de Costos</Text>
                <Row>
                  <Icon style={{fontSize:15, marginTop:5}} type='FontAwesome5'name='map-marker-alt'/>
                  <Text style={{ fontSize: 13, marginLeft:5, marginTop:5 }}>Ubicación</Text>
                </Row>
              </Body>
              <Right>
                <Button transparent onPress={()=> navigation.navigate('ListEmployee')}>
                  <Icon style={{color:'#113f67'}} type='FontAwesome5' name='arrow-alt-circle-right' />
                </Button>
              </Right>
            </ListItem>
            </Content>
        </Container>
    )
}