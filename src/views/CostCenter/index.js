import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Container, Content, H3,Right, Button, Icon, Card, CardItem } from 'native-base';
const MyHeader = lazy(() => import('../../components/Header'));
const ListCostCenter = lazy(() => import ('../../components/CostCenter/ListCostCenter'));
import Overload from '../../components/Overload';
import apiCall from '../../redux/api';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function CostCenter({ route, navigation }) {
    const { strUsuario } = route.params;
    const method = 'POST';
    const url = 'spAppMovil_Ind';
    const [arrayCC, setArrayCC] = useState(null);
    const getCC = async () => {
        const obj = { strAccion: 'CC_DES', strUsuario: strUsuario };
        const { data } = await apiCall(url, method, obj);
        setArrayCC(data);
    }
    useEffect(() => {
        getCC();
    }, [route.params, arrayCC]);
    if (!arrayCC) {
        return <AwesomeAlert show={true} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...' />;
    }
    return (
        <Container>
            <Suspense fallback={<Overload />}>
                <MyHeader />
            </Suspense>
            <Content padder>
                <Card>
                    <CardItem bordered>
                        <H3>Centros de Costos</H3>
                        <Right>
                            <Button transparent>
                                <Icon type='FontAwesome5' name='closed-captioning' />
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
                <Suspense fallback={<Overload/>}>
                    <ListCostCenter arrayCC={arrayCC} navigation={navigation}/>
                </Suspense>
            </Content>
        </Container>

    )
}