import React, { useState, useEffect, lazy, Suspense } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
const MyHeader = lazy(() => import('../../components/Header'));
import apiCall from '../../redux/api';
import genericStyles from '../../styles';
import styles from './style';
import { Container, H3, Content, ListItem, Text, CardItem, Body, Card, Icon, Button, Left, Right, Badge } from 'native-base';
import { SearchBar } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function OpCoordinator({ route, navigation }) {
  const { strUsuario } = route.params;
  const method = 'POST';
  const url = 'spAppMovil_Ind';
  // const [search, setSearch] = useState('');
  const [arrayCC, setArrayCC] = useState(null);
  const getCC = async () => {
    const obj = { strAccion: 'CC_DES', strUsuario: strUsuario };
    const { data } = await apiCall(url, method, obj);
    let arrayCC = data;
    setArrayCC(arrayCC);
    // if (search !== '') {
    //   const newData = arrayCC.filter(item => {
    //     const itemData = `${item.strCentroCostos.toUpperCase()}   
    //       ${item.strDescripcionCC.toUpperCase()}`;
    //     const textData = search.toUpperCase();
    //     return itemData.indexOf(textData) > -1;
    //   });
    //   setArrayCC(newData);
    // }
  }
  useEffect(() => {
    getCC();
  },[arrayCC]);
  if (!arrayCC) {
    return <AwesomeAlert show={true} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...' />;
  }
  return (
    <Container>
      <Suspense fallback={<View><Text>Loading...</Text></View>}>
        <MyHeader />
      </Suspense>      
      <Content padder>
        <Card>
          <CardItem>
            <H3>Listado de Coordinadores Operativos</H3>
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
        {/* <View>
          <ScrollView>
            <FlatList
              data={arrayCC}
              renderItem={renderItem}
              keyExtractor={item => item.strCentroCostos}
              initialNumToRender={10}/>
          </ScrollView>
        </View> */}
      </Content>
    </Container>
  )
}

const renderItem = ({ item }) => (
  <ListItem key={item.key} itemDivider last thumbnail onPress={() => navigation.navigate('ListEmployee', cc)}>
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
        <Icon type='FontAwesome5' name='arrow-alt-circle-right' />
      </Button>
    </Right>
  </ListItem>
)