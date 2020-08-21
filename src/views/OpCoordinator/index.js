import React, { useState, useEffect, lazy, Suspense } from 'react';
import { View } from 'react-native';
const MyHeader = lazy(() => import('../../components/Header'));
const ListView = lazy(() => import ('../../components/ListView'));
import apiCall from '../../redux/api';
import genericStyles from '../../styles';
import styles from './style';
import { Container, Content, Text } from 'native-base';
import { SearchBar } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
import Overload from '../../components/Overload';
export default function OpCoordinator({ route, navigation }) {
  const { strUsuario } = route.params;
  const method = 'POST';
  const url = 'spAppMovil_Ind';
  const [search, setSearch] = useState('');
  const [arrayCoordinators, setArrayCoordinators] = useState(null);
  const getCoordinators = async () => {
    const obj = { strAccion: 'COORDINADORES', strUsuario: strUsuario };
    const { data } = await apiCall(url, method, obj);
    setArrayCoordinators(data);
    if (search !== '') {
      const newData = arrayCoordinators.filter(item => {
        const itemData = `${item.strCoordinadorOperativo.toUpperCase()}   
          ${item.strCoordinadorOperativo.toUpperCase()}`;
        const textData = search.toUpperCase();
        return  itemData.indexOf(textData) > -1;
      });
      setArrayCoordinators(newData);
  }
}
  useEffect(() => {
    if (route.params) {
      getCoordinators(); 
    }
  },[route.params,arrayCoordinators, search]);

  if (!arrayCoordinators) {
    return <AwesomeAlert show={true} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...' />;
  }
  return (
    <Container>
      <Suspense fallback={<Overload/>}>
        <MyHeader />
      </Suspense>      
      <Content padder>
        <View style={styles.boxOpCoordinator}>
          <Text style={styles.titleOpCoordinator}>Listado de Coordinadores Operativos</Text>
        </View>
        <SearchBar
          placeholder='Buscar...'
          onChangeText={(e) => setSearch(e)}
          value={search}
          containerStyle={genericStyles.searchBar}
          inputContainerStyle={genericStyles.inputSearchBar}
        />
        <Suspense fallback={<Overload/>}>
          <ListView arrayCoordinators={arrayCoordinators} navigation={navigation}/>
        </Suspense>
      </Content>
    </Container>
  )
};