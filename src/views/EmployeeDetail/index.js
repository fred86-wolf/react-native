import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Container, Content, Text, Col, Icon, Row, Button, Toast} from 'native-base';
const  MyHeader = lazy(()=> import('../../components/Header'));
const Employee = lazy(()=> import('../../components/Employee'));
import Overload from '../../components/Overload';
import styles from './style';
import genericStyles from '../../styles';
import apiCall from '../../redux/api';
import AwesomeAlert from 'react-native-awesome-alerts';
export default function EmployeeDetail({ route, navigation }) {
    const { strUsuario } = route.params;
    console.log(route.params);
    useEffect(() => {
        if (route.params) {
            getEmployee();
          }
    }, [route.params, employee]);
    const method = 'POST';
    const url = 'spAppMovil_Ind';
    const [loading, setLoading] = useState(false);
    const [employee, setEmployee] = useState(null);
    const getEmployee = async () => {
        setLoading(true);
        const obj = { strAccion: 'LOGIN', strUsuario: strUsuario };
        const { data } = await apiCall(url, method, obj);
        setEmployee(data[0]);
        setLoading(false);
    }
    const sendAbsence = () => {
        const obj = { strUsuario: employee.strUsuario, strConcepto: 'Falta', strAccion: 'Asistencia'}
        // const {data} = await apiCall(url, method, obj);
        console.log(obj);
        navigation.goBack();
    }
    const doubleShift = () => {
        const obj = { strUsuario: employee.strUsuario, strConcepto: 'Doblete', strAccion: 'Asistencia'};
        // const {data} = await apiCall(url, method, obj);
        navigation.goBack();
        console.log(obj);
    }
    if (!employee) {
        return <AwesomeAlert  show={loading} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...'/>;
    }
    return (
        <Container>
            <Suspense fallback={<Overload/>}>
                <MyHeader />
            </Suspense>
            <Content padder>
                <Row style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Col>
                        <Button rounded info onPress={doubleShift}>
                            <Icon type='FontAwesome5' name='check' />
                            <Text>Doblete</Text>
                        </Button>
                    </Col>
                    <Col>
                        <Button rounded danger onPress={sendAbsence}>
                            <Icon type='FontAwesome5' name='times' />
                            <Text>Faltó</Text>
                        </Button>
                    </Col>
                </Row>
                <Suspense fallback={<Overload/>}>
                    <Employee employee={employee}/>
                </Suspense>
            </Content>
        </Container>
    )
}