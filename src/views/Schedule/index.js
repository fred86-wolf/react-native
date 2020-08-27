import React, {useState, useEffect, lazy, Suspense } from 'react';
import { View } from 'react-native';
import genericStyles from '../../styles';
import { Container, Content, Text } from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';
import Overload from '../../components/Overload';
const MyHeader = lazy(() => import('../../components/Header'));
const ListView = lazy(() => import ('../../components/ListView'));

export default function Schedule({ route }) {
    const strObj = route.params;
    console.log(strObj);
    return (
        <Container>
            <Suspense fallback={<Overload/>}>
                <MyHeader />
            </Suspense>
            <Content padder>
                <View style={genericStyles.boxtitleListView}>
                    <Text style={genericStyles.titleListView}>Cronograma de Actividades</Text>
                </View>
                <Suspense fallback={<Overload/>}>
                    <ListView/>
                </Suspense>
            </Content>
        </Container>
    )
}