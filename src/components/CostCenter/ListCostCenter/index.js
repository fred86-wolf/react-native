import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text, ListItem, Left, Badge,Right, Body, Button, Icon} from 'native-base';
import genericStyles from '../../../styles';
export default function ListCostCenter(props){
    const {arrayCC} = props;
    return(
        <SafeAreaView>
            {arrayCC ? arrayCC.map((cc, index) => {
                    return (
                        <ListItem key={index} itemDivider last thumbnail style={{ marginTop: 5 }} onPress={() => props.navigation.navigate('ListEmployee', cc)}>
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
                }) : <View><Text>No hay Centros de Costos</Text></View>}
        </SafeAreaView>
    )
}