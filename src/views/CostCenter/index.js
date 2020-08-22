import React, { useState, useEffect, lazy, Suspense } from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Container, Content, Text } from 'native-base';
import genericStyles from '../../styles';
const MyHeader = lazy(() => import('../../components/Header'));
const ListView = lazy(() => import ('../../components/ListView'));
import Overload from '../../components/Overload';
import apiCall from '../../redux/api';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function CostCenter({ route, navigation }) {
    const { strUsuario } = route.params;
    const method = 'POST';
    const url = 'spAppMovil_Ind';
    const [search, setSearch] = useState('');
    const [arrayCC, setArrayCC] = useState(null);
    const getCC = async () => {
        const obj = { strAccion: 'CC_DES', strUsuario: strUsuario };
        const { data } = await apiCall(url, method, obj);
        setArrayCC(data);
        if (search !== '') {
            const newData = arrayCC.filter(item => {
              const itemData = `${item.strCentroCostos.toUpperCase()}   
              ${item.strDescripcionCC.toUpperCase()}`;
               const textData = search.toUpperCase();
              return itemData.indexOf(textData) > -1;    
            });
            setArrayCC(newData);
          }
    }
    useEffect(() => {
        getCC();
    }, [route.params, arrayCC, search]);
    if (!arrayCC) {
        return <AwesomeAlert show={true} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...' />;
    }
    return (
        <Container>
            <Suspense fallback={<Overload />}>
                <MyHeader />
            </Suspense>
            <Content padder>
                <View style={genericStyles.boxtitleListView}>
                    <Text style={genericStyles.titleListView} >Centros de Costos</Text>
                </View>
                <SearchBar
          placeholder='Buscar...'
          onChangeText= {(e)=> setSearch(e)}
          value={search}
          containerStyle={genericStyles.searchBar}
          inputContainerStyle={genericStyles.inputSearchBar}
        />
                <Suspense fallback={<Overload/>}>
                    <ListView arrayCC={arrayCC} navigation={navigation}/>
                </Suspense>
            </Content>
        </Container>

    )
}