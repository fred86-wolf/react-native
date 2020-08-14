import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text, ListItem, Left, Badge,Right, Body, Button, Icon} from 'native-base';
import genericStyles from '../../../styles';

export default function FlatListEmployee(props){
    const {arrayEmployees} = props;
    return (
        <SafeAreaView>
            {arrayEmployees ? arrayEmployees.map((employee, index) => {
          return (
            <ListItem key={index} itemDivider last thumbnail style={{ marginTop: 5 }} onPress={() => props.navigation.navigate('EmployeeDetail', employee)}>
              <Left>
                <Badge info>
                  <Text>
                    {index+1}
                  </Text>
                </Badge>
              </Left>
              <Body>
                <Text style={genericStyles.textList}>{`${employee.strApellidoPaterno} ${employee.strApellidoMaterno} ${employee.strNombre}`}</Text>
                <Text note numberOfLines={1}>{`${employee.strTurno}`}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={{ color: '#113f67' }} type='FontAwesome5' name='arrow-alt-circle-right' />
                </Button>
              </Right>
            </ListItem>
          )
        }) : <View><Text>No hay Empleados</Text></View>}
        </SafeAreaView>
    )
}