import React, { useState, useEffect, lazy, Suspense } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
const MyHeader = lazy(() => import('../../components/Header'));
import apiCall from '../../redux/api';
import genericStyles from '../../styles';
import styles from './style';
import { Container, H3, Content, ListItem, Text, CardItem, Body, Card, Icon, Button, Left, Right, Badge } from 'native-base';
import { SearchBar } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
import Overload from '../../components/Overload';
export default function OpCoordinator({ route, navigation }) {
  const { strUsuario } = route.params;
  const method = 'POST';
  const url = 'spAppMovil_Ind';
  // const [search, setSearch] = useState('');
  const [arrayCoordinators, setArrayCoordinators] = useState(null);
  const getCoordinators = async () => {
    const obj = { strAccion: 'COORDINADORES', strUsuario: strUsuario };
    const { data } = await apiCall(url, method, obj);
    setArrayCoordinators(data);
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
    if (route.params) {
      getCoordinators(); 
    }
  },[route.params,arrayCoordinators]);
  if (!arrayCoordinators) {
    return <AwesomeAlert show={true} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...' />;
  }
  return (
    <Container>
      <Suspense fallback={<Overload/>}>
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
        {arrayCoordinators && arrayCoordinators.map((coordinator, index) => {
          return (
            <ListItem key={index} itemDivider last thumbnail style={{ marginTop: 5 }} onPress={() => navigation.navigate('CostCenter', coordinator)}>
              <Left>
                <Badge info>
                  <Text>{index+1}</Text>
                </Badge>
              </Left>
              <Body>
                <Text style={genericStyles.textList}>{coordinator.strCoordinadorOperativo}</Text>
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