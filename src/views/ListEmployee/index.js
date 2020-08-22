import React, {useEffect, useState,lazy, Suspense} from 'react';
import {View} from 'react-native';
import { Container,Content,Text } from 'native-base';
import { SearchBar } from 'react-native-elements';
import Overload from '../../components/Overload';
const MyHeader = lazy(() => import('../../components/Header'));
const ListView = lazy(() => import('../../components/ListView'));
import apiCall from '../../redux/api';
import genericStyles from '../../styles';
import AwesomeAlert from 'react-native-awesome-alerts'
export default function ListEmployee({route,navigation}){
  const {strCentroCostos} = route.params;
  useEffect(() => {
    if(route.params){
      getEmployees();
    }
  }, [route.params,arrayEmployees, search]);
  const method = 'POST';
  const url = 'spAppMovil_Ind';
  const [arrayEmployees, setArrayEmployees] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const getEmployees = async () => {
    setLoading(true);
    const obj = { strAccion: 'Lista_Operarios', strCentroCostos: strCentroCostos };
    const { data } = await apiCall(url, method, obj);
    setArrayEmployees(data);
    setLoading(false);
    if (search !== '') {
      const newData = setArrayEmployees.filter(item => {
        const itemData = `${item.strApellidoPaterno.toUpperCase()}   
        ${item.strApellidoMaterno.toUpperCase()} ${item.strNombre.toUpperCase()}`;
         const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;    
      });
      setArrayEmployees(newData);
    }
  }
  if (!arrayEmployees) {
    return <AwesomeAlert show={loading} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...'/>;
  }
  return (
    <Container>
      <Suspense fallback={<Overload/>}>
        <MyHeader />
      </Suspense>
      <Content padder>
        <View style={genericStyles.boxtitleListView}>
          <Text style={genericStyles.titleListView} >{`Lista de Empleado del ${strCentroCostos}`}</Text>
        </View>
        <SearchBar
          placeholder='Buscar...'
          onChangeText= {(e)=> setSearch(e)}
          value={search}
          containerStyle={genericStyles.searchBar}
          inputContainerStyle={genericStyles.inputSearchBar}
        />
        <Suspense fallback={<Overload/>}>
          <ListView arrayEmployees={arrayEmployees} navigation={navigation}/>
        </Suspense>
      </Content>
    </Container>
  )
}