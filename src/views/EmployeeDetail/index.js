import React from 'react'
import { Container, Content, Form, Text, Item, Label, Icon,Thumbnail, Button } from 'native-base';
import MyHeader from '../../components/Header';
import styles from './style';
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
export default function EmployeeDetail() {
    return (
        <Container>
            <MyHeader />
            <Content>
                <Thumbnail style={styles.profileImage} source={{uri: uri}}/>
                <Form style={{alignItems:'center'}}>
                    <Button rounded danger>
                        <Icon type='FontAwesome5' name='times' />
                        <Text>Faltó</Text>
                    </Button>
                    <Button rounded success>
                        <Icon type='FontAwesome5' name='check' />
                        <Text>Asistió</Text>
                    </Button>
                </Form>
                <Form style={{ marginTop: 10, marginBottom: 230 }}>
                    <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label style={{ alignSelf: 'flex-start' }}>Número de Empleado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Número de Empleado</Text>
                    </Item>
                    <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label style={{ alignSelf: 'flex-start' }}>Nombre Completo <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Nombre Completo</Text>
                    </Item>
                    <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label style={{ alignSelf: 'flex-start' }}>Fecha de Nacimiento <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Fecha de Nacimiento</Text>
                    </Item>
                    <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label>Departamento <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Departamento</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label>Teléfono <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Telefono</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label> Contacto de Emergencia <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Contacto de Emergencia</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label>Teléfono de Emergencia <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Teléfono de Emergencia </Text>
                    </Item>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>Talla de Camisa <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Talla de Camisa </Text>
                    </Item>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>Talla de Pantalón <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Talla de Pantalón</Text>
                    </Item>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>Talla de Calzado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Talla de Calzado</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label>Estatura <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Estatura</Text>
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label>Peso <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>Peso</Text>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}