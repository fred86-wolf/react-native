import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import apiCall from '../../redux/api';
import {Container, Content, Button,Text, Thumbnail,Icon, Spinner, Form, Item, Label,Input,Picker, ListItem, Left,Right,Body,Row, Badge, DatePicker, Textarea } from 'native-base';
import styles from './style';
import genericStyles from '../../styles';
import MyHeader from '../../components/Header';
import { getItem } from '../../utils/storage';
import {USER_INFO, USER_ECODELI} from '../../consts';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export default function Profile({navigation}) {
  const method = 'POST';
  const url = 'spAppMovil_Ind';
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [strUsuario, setStrusuario] = useState(null);
  const [userEco, setUserEco] = useState(null);
  const [arrayEdoCivil, setArrayEdoCivil] = useState([]);
  const [arrayEscolaridad, setArrayEscolaridad] = useState([]);
  const [arrayCamisas, setArrayCamisas] = useState([]);
  const [arrayPantalones, setArrayPantalones] = useState([]);
  const [arrayCalzados, setArrayCalzados] = useState([]);
  const [strCamisa, setStrCamisa] = useState('');
  const [strTPantalon, setStrTPantalon] = useState('');
  const [strTCalzado, setStrTCalzado] = useState('');
  const [strNivelAcademico, setStrNivelAcademico] = useState('');
  const [strEstadoCivil, setStrEstadoCivil] = useState('');
  const [frmDataUserEco, setFrmDataUserEco] = useState(defaultFrmValue());
  const onChange = (e, type) => {
    setFrmDataUserEco({...frmDataUserEco, [type]: e.nativeEvent.text });
  }
  function defaultFrmValue() {
    return {
      strEstado: '',
      strPoblacion: '',
      strDireccion: '',
      strDireccionNumero: '',
      strDireccionNumeroInt: '',
      strTelefono: '',
      strCodigoPostal: '',
      strNombreContacto: '',
      strTelefonoContacto: '',
      strBeneficiario: '',
      strParentesco: '',
      strParentesco2: '',
      strParentesco2: '',
      strBeneficiario3: '',
      strParentesco3: '',
      strBeneficiario4: '',
      strParentesco4: '',
      strEnfermedad: '',
      strAlergias: '',
      dblEstatura: 0.00,
      dblPeso: 0.00
    }
  }
  const sectionOne = () => {
    setOpenOne(!openOne);
  }
  const sectionTwo = () => {
    setOpenTwo(!openTwo);
  }
  const sectionThree = () => {
    setOpenThree(!openThree);
  }
  const getEdoCivils = async () => {
    const obj = { strAccion: 'EDO_CIVIL' };
    const { data } = await apiCall(url, method, obj);
    setArrayEdoCivil(data);
  }
  const getEscolaridad = async () => {
    const obj = { strAccion: 'ESCOLARIDAD' };
    const { data } = await apiCall(url, method, obj);
    setArrayEscolaridad(data);
  }
  const getCamisas = async () => {
    const obj = { strAccion: 'CAMISA' };
    const { data } = await apiCall(url, method, obj);
    setArrayCamisas(data);
  }
  const getPantalones = async () => {
    const obj = { strAccion: 'PANTALON' };
    const { data } = await apiCall(url, method, obj);
    setArrayPantalones(data);
  }
  const getCalzados = async () => {
    const obj = { strAccion: 'CALZADO' };
    const { data } = await apiCall(url, method, obj);
    setArrayCalzados(data);
  }
  const loadUserInfo = async () => {
    let userInfo = await getItem(USER_INFO);
    userInfo = JSON.parse(userInfo);
    setUserInfo(userInfo);

  }
  const loadUserEcodeli = async () => {
    let strUsuario = await getItem(USER_ECODELI);
    setStrusuario(strUsuario);
    try {
      const strUser = {
        strAccion: 'LOGIN',
        strUsuario: strUsuario
      }
      const { data } = await apiCall(url, method, strUser);
      setUserEco(data[0]);
      console.log(data)
      data[0].strEstadoCivil !== '' ? setStrEstadoCivil(data[0].strEstadoCivil) : setStrEstadoCivil('');
      data[0].strNivelAcademico !== '' ? setStrNivelAcademico(data[0].strNivelAcademico) : setStrNivelAcademico('');
      data[0].strCamisa !== '' ? setStrCamisa(data[0].strCamisa) : setStrCamisa('');
      data[0].strTPantalon !== '' ? setStrTPantalon(data[0].strTPantalon) : setStrTPantalon('');
      data[0].strTCalzado !== '' ? setStrTCalzado(data[0].strTCalzado) : setStrTCalzado('');
    } catch (error) {
      console.log('Error', error);
    }
  }
  const onSaveData = async () => {
    setStrEstadoCivil(strEstadoCivil);
    setStrNivelAcademico(strNivelAcademico);
    setStrCamisa(strCamisa);
    setStrTPantalon(strTPantalon);
    setStrTCalzado(strTCalzado);
    try {
      setFrmDataUserEco({
        ...frmDataUserEco, strEstadoCivil, strNivelAcademico, strCamisa, strTPantalon, strTCalzado,
        strAccion: 'INSERT_SOLICITUD', strUsuario: userEco.strUsuario, strCentroCostos: userEco.strCentroCostos,
        strNombre: userEco.strNombre, strApellidoPaterno: userEco.strApellidoPaterno, strApellidoMaterno: userEco.strApellidoMaterno
      });
      const data = frmDataUserEco;
      const response = await apiCall(url, method, data);
      if (response.data[0].strAccion == 'OK') {
        Alert.alert(
          '¡Bien Hecho!',
          'Tus datos serán Actualizados en breve',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Home'),
              style: 'success'
            }
          ]
        );
      }
    } catch (e) {
      alert('¡Error, Intente mas Tarde!', e);
    }
  }
  useEffect(() => {
    if (!userInfo) {
      loadUserInfo();
      loadUserEcodeli();
      getEdoCivils();
      getEscolaridad();
      getCamisas();
      getPantalones();
      getCalzados();
    }
  },[strEstadoCivil,strNivelAcademico,strCamisa,strTPantalon,strTCalzado]);
  if (!userInfo || !userEco) {
    return <Spinner color='blue' />
  }
  return (
    <Container>
      <MyHeader />
      <Content contentContainerStyle={{ justifyContent: 'center' }} padder>
        <Thumbnail large style={styles.profileImage} source={{ uri: userInfo.photoUrl }} />
        <Button onPress={sectionOne} style={[styles.btnOne, genericStyles.ecoGeneral]}>
          <Icon name='person' />
          <Text>Detalle Personal</Text>
          <Text></Text>
        </Button>
        <View style={{ height: openOne ? null : 0, overflow: 'hidden', borderWidth: 0.5, backgroundColor: '#f4f4f4' }}>
          <Form style={{ marginTop: 10, marginBottom: 230 }}>
            <Text style={{ fontSize: 12, marginLeft: 5, alignSelf: 'center' }}>Todos los Campos Obligatorios *</Text>
            <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label style={{ alignSelf: 'flex-start' }}>* Número de Empleado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
              <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{userEco.strUsuario}</Text>
            </Item>
            <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label style={{ alignSelf: 'flex-start' }}>* Nombre Completo <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
              <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{`${userEco.strNombre} ${userEco.strApellidoPaterno} ${userEco.strApellidoMaterno}`}</Text>
            </Item>
            <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label style={{ alignSelf: 'flex-start' }}>* Fecha de Nacimiento <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
              {userEco.strFechaNacimiento ? <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{moment(userEco.strFechaNacimiento).format('LL')}</Text> : <DatePicker defaultDate={new Date()} disabled={false} placeHolderText='Selecciona tu Fecha de Nacimiento' />}
            </Item>
            <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label style={{ alignSelf: 'flex-start' }}>* Estado Civil <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Picker mode='dropdown'
                iosHeader='Estado Civil'
                iosIcon={<Icon name='arrow-down' />} selectedValue={strEstadoCivil}
                onValueChange={(itemValue)=> setStrEstadoCivil(itemValue)} style={{ height: 30, width: 150, alignSelf: 'flex-start' }}>
                {arrayEdoCivil.map((edocivil, index) => { return <Picker.Item key={index} label={edocivil.strEstadoCivil} value={edocivil.strEstadoCivil} /> })}
              </Picker>
            </Item>
            <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Departamento <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
              <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{`${userEco.strCentroCostos} ${userEco.strDescripcionCC}`}</Text>
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Estado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strEstado} onChange={(e) => onChange(e, 'strEstado')} />
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Población <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strPoblacion} onChange={(e) => onChange(e, 'strPoblacion')} />
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Dirección <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strDireccion} onChange={(e) => onChange(e, 'strDireccion')} />
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Número Exterior  <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strDireccionNumero} onChange={(e) => onChange(e, 'strDireccionNumero')} />
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Número Interior <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strDireccionNumeroInt} onChange={(e) => onChange(e, 'strDireccionNumeroInt')} />
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Teléfono <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strTelefono} onChange={(e) => onChange(e, 'strTelefono')} />
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Código Postal <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strCodigoPostal} onChange={(e) => onChange(e, 'strCodigoPostal')} />
            </Item>
            <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Nivel Académico <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Picker mode='dropdown'
                iosHeader='Nivel Academico'
                iosIcon={<Icon name='arrow-down' />} selectedValue={strNivelAcademico}
                onValueChange={(itemValue) => setStrNivelAcademico(itemValue)} style={{ height: 30, width: 210, alignSelf: 'flex-start' }}>
                {arrayEscolaridad.map((escolaridad, index) => {
                  return <Picker.Item key={index} label={escolaridad.strNivelAcademico} value={escolaridad.strNivelAcademico} />
                })}
              </Picker>
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Contacto de Emergencia <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strNombreContacto} onChange={(e) => onChange(e, 'strNombreContacto')} />
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Teléfono de Emergencia <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strTelefonoContacto} onChange={(e) => onChange(e, 'strTelefonoContacto')} />
            </Item>
            <Item style={{ borderBottomWidth: 0 }} stackedLabel>
              <Label>* Número del Seguro Social <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
              <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }}>{userEco.strNSS}</Text>
            </Item>
          </Form>
        </View>
        <Button onPress={sectionTwo} style={[styles.btnOne, genericStyles.ecoGeneral]}>
          <Icon name='bookmarks' />
          <Text>Beneficiarios</Text>
          <Text></Text>
        </Button>
        <View style={{ height: openTwo ? null : 0, overflow: 'hidden', borderWidth: 0.5, backgroundColor: '#f4f4f4' }}>
          <Form style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12, marginLeft: 5, alignSelf: 'center' }}>Todos los Campos Obligatorios *</Text>
            <ListItem itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                  <Text>1</Text>
                </Badge>
              </Left>
              <Body>
                {userEco.strBeneficiario ? <Text style={{ fontSize: 18 }}>{userEco.strBeneficiario}</Text> : <Input style={{ fontSize: 18 }} placeholder='* Nombre del Beneficiario' onChange={(e) => onChange(e, 'strBeneficiario')} />}
                <Row>
                  {userEco.strParentesco ? <Text style={{ fontSize: 13 }}>{userEco.strParentesco}</Text> : <Input style={{ fontSize: 13 }} placeholder='* Parentesco' onChange={(e) => onChange(e, 'strParentesco')} />}
                  {userEco.strBeneficiarioNacimiento ? <Text style={{ fontSize: 13 }}>{moment(userEco.strBeneficiarioNacimiento).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize: 13, marginTop: 6 }} placeHolderTextStyle={{ fontSize: 12, marginTop: 7, marginRight: 1 }} placeHolderText='* Fecha de Nacimiento' />}
                </Row>
              </Body>
              <Right>
                <Button style={{ marginTop: 10 }} transparent>
                  <Icon style={{ color: 'red' }} name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                  <Text>2</Text>
                </Badge>
              </Left>
              <Body>
                {userEco.strBeneficiario2 ? <Text style={{ fontSize: 18 }}>{userEco.strBeneficiario2}</Text> : <Input style={{ fontSize: 18 }} placeholder='* Nombre del Beneficiario' onChange={(e) => onChange(e, 'strBeneficiario2')} />}
                <Row>
                  {userEco.strParentesco2 ? <Text style={{ fontSize: 13 }}>{userEco.strParentesco2}</Text> : <Input style={{ fontSize: 13 }} placeholder='* Parentesco' onChange={(e) => onChange(e, 'strParentesco2')} />}
                  {userEco.strBeneficiarioNacimiento2 ? <Text style={{ fontSize: 13 }}>{moment(userEco.strBeneficiarioNacimiento2).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize: 13, marginTop: 6 }} placeHolderTextStyle={{ fontSize: 12, marginTop: 7, marginRight: 1 }} placeHolderText='* Fecha de Nacimiento' />}
                </Row>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={{ color: 'red' }} name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                  <Text>3</Text>
                </Badge>
              </Left>
              <Body>
                {userEco.strBeneficiario3 ? <Text style={{ fontSize: 18 }}>{userEco.strBeneficiario3}</Text> : <Input style={{ fontSize: 18 }} placeholder='* Nombre del Beneficiario' onChange={(e) => onChange(e, 'strBeneficiario3')} />}
                <Row>
                  {userEco.strParentesco3 ? <Text style={{ fontSize: 13 }}>{userEco.strParentesco3}</Text> : <Input style={{ fontSize: 13 }} placeholder='* Parentesco' onChange={(e) => onChange(e, 'strParentesco3')} />}
                  {userEco.strBeneficiario3 ? <Text style={{ fontSize: 13 }}>{moment(userEco.strBeneficiarioNacimiento3).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize: 13, marginTop: 6 }} placeHolderTextStyle={{ fontSize: 12, marginTop: 7, marginRight: 1 }} placeHolderText='* Fecha de Nacimiento' />}
                </Row>
              </Body>
              <Right>
                <Button style={{ marginTop: 10 }} transparent>
                  <Icon style={{ color: 'red' }} name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                  <Text>4</Text>
                </Badge>
              </Left>
              <Body>
                {userEco.strBeneficiario4 ? <Text style={{ fontSize: 18 }}>{userEco.strBeneficiario4}</Text> : <Input style={{ fontSize: 18 }} placeholder='* Nombre del Beneficiario' onChange={(e) => onChange(e, 'strBeneficiario4')} />}
                <Row>
                  {userEco.strParentesco4 ? <Text style={{ fontSize: 13 }}>{userEco.strParentesco4}</Text> : <Input style={{ fontSize: 13 }} placeholder='* Parentesco' onChange={(e) => onChange(e, 'strParentesco4')} />}
                  {userEco.strBeneficiario4 ? <Text style={{ fontSize: 13 }}>{moment(userEco.strBeneficiarioNacimiento4).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize: 13, marginTop: 6 }} placeHolderTextStyle={{ fontSize: 12, marginTop: 7, marginRight: 1 }} placeHolderText='* Fecha de Nacimiento' />}
                </Row>
              </Body>
              <Right>
                <Button style={{ marginTop: 10 }} transparent>
                  <Icon style={{ color: 'red' }} name='trash' />
                </Button>
              </Right>
            </ListItem>
          </Form>
        </View>
        <Button onPress={sectionThree} style={[styles.btnOne, genericStyles.ecoGeneral]}>
          <Icon name='medkit' />
          <Text>Salud Personal</Text>
          <Text></Text>
        </Button>
        <View style={{ height: openThree ? null : 0, overflow: 'hidden', borderWidth: 0.5, backgroundColor: '#f4f4f4' }}>
          <Form style={{marginBottom:50}}>
            <Item style={{ borderBottomWidth: 0 }} stackedLabel>
              <Label>* Enfermedades <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Textarea style={{ alignSelf: 'flex-start', marginTop: 10 }} rowSpan={5} defaultValue={userEco.strEnfermedad} onChangeText={(e) => onChange(e, 'strEnfermedad')} bordered placeholder='Separa cada Enfermedad/Alergias por comas'>
              </Textarea>
            </Item>
            <Item style={{ borderBottomWidth: 0 }} stackedLabel>
              <Label>* Alergias <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
              <Textarea style={{ alignSelf: 'flex-start', marginTop: 10 }} defaultValue={userEco.strAlergias} onChangeText={(e) => onChange(e, 'strAlergias')} rowSpan={5} bordered placeholder='Separa cada Enfermedad/Alergias por comas'>
              </Textarea>
            </Item>
            <Item style={{ borderBottomWidth: 0 }} stackedLabel>
              <Label>* Tipo de Sangre <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
              <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{userEco.strTipoSangre}</Text>
            </Item>
            <Item style={{ borderBottomWidth: 0 }} stackedLabel>
              <Label>* Talla de Camisa <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
              <Picker mode='dropdown' iosHeader='Talla Camisa' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf: 'flex-start' }}
                selectedValue={strCamisa} onValueChange={(itemValue) => setStrCamisa(itemValue)}>
                {arrayCamisas.map((camisa, index) => {
                  return <Picker.Item key={index} label={camisa.strCamisa} value={camisa.strCamisa} />
                })}
              </Picker>
            </Item>
            <Item style={{ borderBottomWidth: 0 }} stackedLabel>
              <Label>* Talla de Pantalón <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
              <Picker mode='dropdown' iosHeader='Talla Pantalón' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf: 'flex-start' }}
                selectedValue={strTPantalon} onValueChange={(itemValue) => setStrTPantalon(itemValue)}>
                {arrayPantalones.map((pantalon, index) => {
                  return <Picker.Item key={index} label={pantalon.strTPantalon} value={pantalon.strTPantalon} />
                })}
              </Picker>
            </Item>
            <Item style={{ borderBottomWidth: 0 }} stackedLabel>
              <Label>* Talla de Calzado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
              <Picker mode='dropdown' iosHeader='Talla Calzado' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf: 'flex-start' }}
                selectedValue={strTCalzado} onValueChange={(itemValue) => setStrTCalzado(itemValue)}>
                {arrayCalzados.map((pantalon, index) => {
                  return <Picker.Item key={index} label={pantalon.strTCalzado} value={pantalon.strTCalzado} />
                })}
              </Picker>
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Estatura <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.dblEstatura.toString() || 0.00} keyboardType='numeric' onChange={(e)=> onChange(e, 'dblEstatura')} />
            </Item>
            <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
              <Label>* Peso <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.dblPeso.toString() || 0.00} keyboardType='numeric' onChange={(e)=> onChange(e, 'dblPeso')}/>
            </Item>
          </Form>
        </View>
        <Button style={styles.saveBtn} onPress={onSaveData} rounded>
          <Text>Guardar</Text>
        </Button>
      </Content>
    </Container>
  );
};