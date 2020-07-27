import React, { useState, useEffect } from 'react';
import MyHeader from '../../components/Header';
import apiCall from '../../redux/api';
import genericStyles from '../../styles';
import { Container, H3, Content, ListItem, Text,Row, Body,Col, Icon, Button, Left, Right, Badge} from 'native-base';
import { SearchBar } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts'

export default function CostCenter({ route, navigation }) {
  const { strUsuario } = route.params;
  console.log(strUsuario);
  const method = 'POST';
  const url = 'spAppMovil_Ind';
  const [search, setSearch] = useState('');
  const [arrayCC, setArrayCC] = useState(null);
  const [loading, setLoading] = useState(false);
  const getCC = async () => {
    const obj = { strAccion: 'CC_DES', strUsuario: strUsuario };
    const { data } = await apiCall(url, method, obj);
    let arrayCC = data;
    setArrayCC(arrayCC); 
    if (search !== '') {
      const newData = arrayCC.filter(item => {
        const itemData = `${item.strCentroCostos.toUpperCase()}   
        ${item.strDescripcionCC.toUpperCase()}`;
         const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;    
      });
      setArrayCC(newData);
    }
    setArrayCC(null);
  }
  useEffect(() => {
    getCC();
  });
  if (!arrayCC) {
    return <AwesomeAlert show={loading} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...'/>;
  }
  return (
    <Container>
      <MyHeader />
      <Content padder>
        <Row style={{ justifyContent: 'space-between'}}>
          <Col style={genericStyles.leftTitle}>
            <Button rounded onPress={() => navigation.goBack()} >
              <Icon type='FontAwesome5' name='arrow-left' />
            </Button>
          </Col>
          <Col style={genericStyles.centerTitle}>
            <H3>Centros de Costos</H3>
          </Col>
          <Col style={genericStyles.rightTitle}>
            <Button transparent>
              <Icon type='FontAwesome5' name='closed-captioning' />
            </Button>
          </Col>
        </Row>
        <SearchBar
          placeholder='Buscar...'
          onChangeText= {(e)=> setSearch(e)}
          value={search}
          containerStyle={genericStyles.searchBar}
          inputContainerStyle={genericStyles.inputSearchBar}
        />
        {arrayCC && arrayCC.map((cc, index) => {
          return (
            <ListItem key={index} itemDivider last thumbnail style={{ marginTop: 5 }} onPress={() => navigation.navigate('ListEmployee', cc)}>
              <Left>
                <Badge info>
                  <Text>{cc.strCentroCostos}</Text>
                </Badge>
              </Left>
              <Body>
                <Text style={genericStyles.textList}>{cc.strDescripcionCC}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={{ color: '#113f67' }} type='FontAwesome5' name='arrow-alt-circle-right' />
                </Button>
              </Right>
            </ListItem>)
        })}
      </Content>
    </Container>
  )
}