import React, { useEffect, useState } from 'react'
import { Container, Content, Form, Text, Item, Label, Spinner, Col, Icon, Row, Button, H2, View } from 'native-base';
import MyHeader from '../../components/Header';
import styles from './style';
import genericStyles from '../../styles';
import apiCall from '../../redux/api';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
import AwesomeAlert from 'react-native-awesome-alerts'
export default function EmployeeDetail({ route, navigation }) {
    const { strUsuario } = route.params
    const method = 'POST';
    const url = 'spAppMovil_Ind';
    const [loading, setLoading] = useState(false);
    const [employee, setEmployee] = useState(null);
    const getEmployee = async () => {
        setLoading(true);
        const obj = { strAccion: 'LOGIN', strUsuario: strUsuario };
        const { data } = await apiCall(url, method, obj);
        let employee = data[0];
        setEmployee(employee);
        setLoading(false);
    }
    useEffect(() => {
        getEmployee();
    }, [strUsuario]);
    if (!employee) {
        return <AwesomeAlert  show={loading} title='Cargando' closeOnHardwareBackPress={false} closeOnTouchOutside={true} showProgress={true} message='Por Favor Espere...'/>;
    }
    return (
        <Container>
            <MyHeader />
            <Content>
                <Row style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Col>
                        <Button rounded onPress={() => navigation.goBack()} >
                            <Icon type='FontAwesome5' name='arrow-left' />
                        </Button>
                    </Col>
                    <Col>
                        <Button rounded success>
                            <Icon type='FontAwesome5' name='check' />
                            <Text>Asistió</Text>
                        </Button>
                    </Col>
                    <Col>
                        <Button rounded danger>
                            <Icon type='FontAwesome5' name='times' />
                            <Text>Faltó</Text>
                        </Button>
                    </Col>
                </Row>
                <Form style={{ alignItems: 'flex-start', marginHorizontal: 10, backgroundColor: '#f4f4f4' }}>
                    <H2 style={{ marginTop: 10, alignSelf: 'center' }}>Detalle del Personal</H2>
                    <Item style={{ marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Número de Empleado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.strUsuario}</Text>
                    </Item>
                    <Item style={{ marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Nombre Completo <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{`${employee.strNombre} ${employee.strApellidoPaterno} ${employee.strApellidoMaterno}`}</Text>
                    </Item>
                    <Item style={{ marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Fecha de Nacimiento <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{moment(employee.strFechaNacimiento).format('LL')}</Text>
                    </Item>
                    <Item style={{ marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Departamento <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{`${employee.strCentroCostos} ${employee.strDescripcionCC}`}</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Teléfono <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.strTelefono}</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label> Contacto de Emergencia <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.strNombreContacto}</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Teléfono de Emergencia <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.strTelefonoContacto}</Text>
                    </Item>
                    <Item style={{ borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Talla de Camisa <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.strCamisa}</Text>
                    </Item>
                    <Item style={{ borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Talla de Pantalón <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.strTPantalon}</Text>
                    </Item>
                    <Item style={{ borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Talla de Calzado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.strTCalzado}</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Estatura <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.dblEstatura}</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0, alignItems: 'flex-start' }} stackedLabel>
                        <Label>Peso <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, marginTop: 5 }}>{employee.dblPeso}</Text>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}