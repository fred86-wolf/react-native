import React, { useState, useEffect, lazy, Suspense } from 'react';
import { View } from 'react-native';
import { Container, Content, H3, ListItem, Left, Text, Body, Right, Button, Icon, Badge, Card, CardItem } from 'native-base';
const MyHeader = lazy(() => import('../../components/Header'));
import Overload from '../../components/Overload';
import genericStyles from '../../styles';
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
        let arrayCC = data;
        setArrayCC(arrayCC);
    }
    useEffect(() => {
        getCC();
    }, [arrayCC]);
    if (!arrayCC) {
        return <AwesomeAlert show={true} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...' />;
    }
    return (
        <Container>
            <Suspense fallback={<Overload/>}>
                <MyHeader />
            </Suspense>
            <Content>
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