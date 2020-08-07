import React, { useState, useEffect } from 'react';
import {FlatList, ScrollView} from 'react-native';
import MyHeader from '../../components/Header';
import apiCall from '../../redux/api';
import genericStyles from '../../styles';
import { Container, H3, Content, ListItem, Text, CardItem, Body, Card, Icon, Button, Left, Right, Badge } from 'native-base';
import { SearchBar } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts'

export default function CostCenter({ route, navigation }) {
  const { strUsuario } = route.params;
  const method = 'POST';
  const url = 'spAppMovil_Ind';
  const [search, setSearch] = useState('');
  const [arrayCC, setArrayCC] = useState(null);
  const getCC = async () => {
    const obj = { strAccion: 'CC_DES', strUsuario: strUsuario };
    const { data } = await apiCall(url, method, obj);
      let arrayCC = data;
      setArrayCC(arrayCC);
      console.log(arrayCC.length)
      // if (search !== '') {
      //   const newData = arrayCC.filter(item => {
      //     const itemData = `${item.strCentroCostos.toUpperCase()}   
      //     ${item.strDescripcionCC.toUpperCase()}`;
      //     const textData = search.toUpperCase();
      //     return itemData.indexOf(textData) > -1;
      //   });
      //   setArrayCC(newData);
      // }
  }
  useEffect(() => {
    getCC();
  });
  if (!arrayCC) {
    return <AwesomeAlert show={true} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...' />;
  }
  return (
    <Container>
      <MyHeader />
      <Content padder>
        <Card>
          <CardItem>
              <H3>Centros de Costos</H3>
            <Right>
              <Button transparent>
                <Icon type='FontAwesome5' name='closed-captioning' />
              </Button>
            </Right>
          </CardItem>
        </Card>
        {/* <SearchBar
          placeholder='Buscar...'
          onChangeText={(e) => setSearch(e)}
          value={search}
          containerStyle={genericStyles.searchBar}
          inputContainerStyle={genericStyles.inputSearchBar}
        /> */}
        {/* {arrayCC && arrayCC.map((cc, index) => {
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
        })} */}
        <ScrollView>
          <FlatList
          data={arrayCC}
          renderItem={renderItem}
          keyExtractor={item => item.strCentroCostos}
          initialNumToRender={10}/>
        </ScrollView>
      </Content>
    </Container>
  )
}

const renderItem = ({item}) => (
  <ListItem key={item.key} itemDivider last thumbnail>
    <Left>
      <Badge info>
        <Text>{item.strCentroCostos}</Text>
      </Badge>
    </Left>
    <Body>
      <Text style={genericStyles.textList}>{item.strDescripcionCC}</Text>
    </Body>
    <Right>
      <Button transparent>
        <Icon type='FontAwesome5' name='arrow-alt-circle-right'/>
      </Button>
    </Right>
  </ListItem>
)