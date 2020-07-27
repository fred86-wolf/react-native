import React, {useEffect, useState} from 'react';
import { Container,Content,H3,ListItem,Left,Text,Body,Right,Button,Icon,Col,Row, Badge,Spinner } from 'native-base';
import { SearchBar } from 'react-native-elements';
import MyHeader from '../../components/Header';
import apiCall from '../../redux/api';
import genericStyles from '../../styles';
import AwesomeAlert from 'react-native-awesome-alerts'
export default function ListEmployee({route,navigation}){
  const {strCentroCostos} = route.params;
  const {strDescripcionCC} = route.params;
  const method = 'POST';
  const url = 'spAppMovil_Ind';
  const [arrayEmployees, setArrayEmployees] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const getEmployees = async () => {
    setLoading(true);
    const obj = { strAccion: 'Lista_Operarios', strCentroCostos: strCentroCostos };
    const { data } = await apiCall(url, method, obj);
    let arrayEmployees = data;
    setArrayEmployees(arrayEmployees);
    setLoading(false);
    if (search !== '') {
      const newData = arrayCC.filter(item => {
        const itemData = `${item.strApellidoPaterno.toUpperCase()}   
        ${item.strApellidoMaterno.toUpperCase()} ${item.strNombre.toUpperCase()}`;
         const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;    
      });
      setArrayCC(newData);
    }
  }
  useEffect(() => {
      getEmployees();
  },[strCentroCostos]);
  if (!arrayEmployees) {
    return <AwesomeAlert show={loading} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...'/>;
  }
  return (
    <Container>
      <MyHeader />
      <Content padder>
        <Row style={{justifyContent: 'space-between'}}>
          <Col style={genericStyles.leftTitle}>
            <Button rounded onPress={() => navigation.goBack()}>
              <Icon type='FontAwesome5' name='arrow-left' />
            </Button>
          </Col>
          <Col style={genericStyles.centerTitle}>
            <H3> {`Lista de Empleado del ${strCentroCostos} ${strDescripcionCC}`}</H3>
          </Col>
          <Col style={genericStyles.rightTitle}>
            <Button transparent>
              <Icon type='FontAwesome5' name='users' />
            </Button>
          </Col>
        </Row>
        <SearchBar
          placeholder='Buscar...'
          onChangeText= {(e)=> setSearch(e)}
          value={search}
          containerStyle={genericStyles.searchBar}
          inputContainerStyle={genericStyles.inputSearchBar}
        />
        {arrayEmployees && arrayEmployees.map((employee, index) => {
          return (
            <ListItem key={index} itemDivider last thumbnail style={{ marginTop: 5 }} onPress={() => navigation.navigate('EmployeeDetail', employee)}>
              <Left>
                <Badge info>
                  <Text>
                    {index+1}
                  </Text>
                </Badge>
              </Left>
              <Body>
                <Text style={genericStyles.textList}>{employee.strApellidoPaterno + ' ' + employee.strApellidoMaterno + ' ' + employee.strNombre}</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('EmployeeDetail')}>
                  <Icon style={{ color: '#113f67' }} type='FontAwesome5' name='arrow-alt-circle-right' />
                </Button>
              </Right>
            </ListItem>
          )
        })}
      </Content>
    </Container>
  )
}