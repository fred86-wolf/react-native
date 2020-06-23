import React, { useState, useEffect } from 'react';
import {TextInput, Alert, StatusBar} from 'react-native';
import styles from './style';
import apiCall from '../../redux/api';
import MyHeader from '../../components/Header';
import genericStyles from '../../styles';
import { USER_ECODELI, USER_INFO } from '../../consts';
import { getItem } from '../../utils/storage';
import { Container, Content, View,Thumbnail, Form, Spinner, Text, Picker, Textarea, Input, Icon, ListItem, Left, Body, Row, Badge, Right, Button } from 'native-base';

export default function ProfileInfo({navigation}) {
  const [userEco, setUserEco] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const method = 'POST';
  const url = 'spLogin';
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [arrayCalzados, setArrayCalzados] = useState([]);
  const [arrayCamisas, setArrayCamisas] = useState([]);
  const [arrayPantalones, setArrayPantalones] = useState([]);
  const [arrayEscolaridad, setArrayEscolaridad] = useState([]);
  const [arrayEdoCivil, setArrayEdoCivil] = useState([]);
  const [strCamisa, setStrCamisa] = useState('');
  const [strTPantalon, setStrTPantalon] = useState('');
  const [strTCalzado, setStrTCalzado] = useState('');
  const [frmDataUserEco,setFrmDataUserEco] = useState(defaultFrmValue());
  const [countDetail, setCountDetail] = useState(0);
  const [countBenefits, setCountBenefits] = useState(0);
  const [countHealth, setCountHealth] = useState(0);
  const onChange = (e, type) => {
    setFrmDataUserEco({...frmDataUserEco, [type]: e.nativeEvent.text});
  }
  useEffect(() => {
    if (!userInfo && !userEco) {
      loadUserInfo();
      getCalzados();
      getCamisas();
      getPantalones();
      getEdoCivils();
      getEscolaridad();
    }
  },[strCamisa,strTPantalon,strTCalzado]);
  
  const loadUserInfo = async () => {
    let userEco = await getItem(USER_ECODELI);
    let userInfo = await getItem(USER_INFO);
    userEco = JSON.parse(userEco);
    userInfo = JSON.parse(userInfo);
    setUserInfo(userInfo);
    setUserEco(userEco);
    setStrCamisa(userEco.strCamisa);
    setStrTPantalon(userEco.strTPantalon);
    setStrTCalzado(userEco.strTCalzado);
  }
  const getCalzados = async () => {
    const data = { strAccion: 'CALZADO' };
    const response = await apiCall(url, method, data);
    const arrayCalzados = response.data;
    setArrayCalzados(arrayCalzados);
  }
  const getCamisas = async () => {
    const data = { strAccion: 'CAMISA' };
    const response = await apiCall(url, method, data);
    const arrayCamisas = response.data;
    setArrayCamisas(arrayCamisas);
  }
  const getPantalones = async () => {
    const data = { strAccion: 'PANTALON' };
    const response = await apiCall(url, method, data);
    const arrayPantalones = response.data;
    setArrayPantalones(arrayPantalones);
  }
  const getEdoCivils = async () => {
    const data = { strAccion: 'EDO_CIVIL' };
    const response = await apiCall(url, method, data);
    const arrayEdoCivil = response.data;
    setArrayEdoCivil(arrayEdoCivil);
  }
  const getEscolaridad = async () => {
    const data = { strAccion: 'ESCOLARIDAD' };
    const response = await apiCall(url, method, data);
    const arrayEscolaridad = response.data;
    setArrayEscolaridad(arrayEscolaridad);
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
  const onSubmit = async () => {
    setStrCamisa(strCamisa);
    setStrTCalzado(strTCalzado);
    setStrTPantalon(strTPantalon);
    try {
      setFrmDataUserEco({...frmDataUserEco,strAccion:'INSERT_SOLICITUD',strUsuario:userEco.strUsuario,strCentroCostos:userEco.strCentroCostos,
      strNombre:userEco.strNombre,strApellidoPaterno:userEco.strApellidoPaterno,strApellidoMaterno:userEco.strApellidoMaterno,strCamisa, strTPantalon, strTCalzado});
      const data = frmDataUserEco;
      console.log(data);
      const response = await apiCall(url, method, data);
      if(response.data[0].strAccion === 'OK'){
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
      alert('Error',e);
    }  
  }
  function defaultFrmValue(){
    return {
      strEstado: '',
      strPoblacion: '',
      strDireccion: '',
      strDireccionNumero: '',
      strDireccionNumeroInt: '',
      strTelefono: '',
      strCodigoPostal: '',
      strBeneficiario3: '',
      strParentesco3: '',
      strBeneficiarioNacimiento3: '',
      strBeneficiario4: '',
      strParentesco4: '',
      strBeneficiarioNacimiento4: '',
      dblEstatura:0.00,
      dblPeso:0.00
    }
  }
  if (!userEco) {
    return <Spinner color='blue' />;
  }
  
  return (
    <Container>
      <MyHeader />
      <StatusBar backgroundColor='#113f67'/>
      <Content padder>
        <Thumbnail large style={styles.profileImage} source={{ uri: userInfo && userInfo.photoUrl }} />
        <Button activeOpacity={0.8} onPress={sectionOne} style={[styles.Btn, genericStyles.ecoGeneral]}>
          <Icon name='person' />
          <Text>Detalle Personal</Text>
          <Text>{countDetail !== 0 ? countDetail : null}</Text>
        </Button>
        <View style={{ height: openOne ? null : 0, overflow: 'hidden', borderWidth: 0.5, backgroundColor: '#f4f4f4'}}>
          <Text style={{ fontSize: 12, marginLeft: 5 }}>Todos los Campos Obligatorios *</Text>
          <Form>
            <Text style={genericStyles.textProfileInfo}>{userEco.strUsuario}</Text>
            <Text style={genericStyles.textProfileInfo}>{userEco.strNombre + ' ' + ' ' + userEco.strApellidoPaterno + ' ' + userEco.strApellidoMaterno}</Text>
            {userEco.strFechaNacimiento ? <Text style={genericStyles.textProfileInfo}>{userEco.strFechaNacimiento.substring(0,11)}</Text>: <Input style={{borderWidth:0.5, height:40,marginTop:10, alignSelf:'center',}}/>}
            <Row style={{borderWidth:0.5,height:40, marginLeft:5, marginRight:5}}>
              <Picker mode='dropdown'
            iosHeader='Estado Civil'
            iosIcon={<Icon name='arrow-down' />}
            style={styles.dropdownGeneric}
            selectedValue={userEco.strEstadoCivil}>
            {arrayEdoCivil.map(edocivil => {
            return <Picker.Item label={edocivil.strEstadoCivil} value={edocivil.strEstadoCivil} />
            })}
            </Picker>
            <Icon style={{fontSize:20, marginTop:15, marginRight:10}} name='lock'/>
            </Row>
            <Text style={genericStyles.textProfileInfo}>{userEco.strCentroCostos + ' ' + userEco.strDescripcionCC}</Text>
            <Input style={genericStyles.textProfileInfo,{borderWidth:0.5, height:40,marginTop:10, alignSelf:'center',}} defaultValue={userEco.strEstado} onChange={(e) => onChange(e,'strEstado')}/>
            <Input style={genericStyles.textProfileInfo,{borderWidth:0.5, height:40,marginTop:10, alignSelf:'center',}} defaultValue={userEco.strPoblacion} onChange={(e) => onChange(e,'strPoblacion')}/>
            <Input style={{borderWidth:0.5, alignSelf:'center', height:30, marginTop:10}} defaultValue={userEco.strDireccion || ''} onChange={(e) => onChange(e,'strDireccion')}/>
            <Input style={{borderWidth:0.5, alignSelf:'center', height:30, marginTop:10}} defaultValue={userEco.strDireccionNumero || ''} onChange={(e) => onChange(e,'strDireccionNumero')}/>
            <Input style={{borderWidth:0.5, alignSelf:'center', height:30, marginTop:10}} defaultValue={userEco.strDireccionNumeroInt || ''}  onChange={(e) => onChange(e,'strDireccionNumeroInt')}/>
            <Input style={genericStyles.textProfileInfo,{borderWidth:0.5, height:30, alignSelf:'center', marginTop:10}} defaultValue={userEco.strTelefono} onChange={(e) => onChange(e,'strTelefono')}/>
            <Input style={genericStyles.textProfileInfo,{borderWidth:0.5, height:30, alignSelf:'center', marginTop:10}} defaultValue={userEco.strCodigoPostal} onChange={(e) => onChange(e,'strCodigoPostal')}/>
            <Row style={{borderWidth:0.5,height:40, marginTop:5, marginLeft:5, marginRight:5}}>
            <Picker mode='dropdown'
              iosHeader='Nivel Academico'
              iosIcon={<Icon name='arrow-down' />} selectedValue={userEco.strNivelAcademico} style={styles.dropdownGeneric}>
              {arrayEscolaridad.map(escolaridad => {
                return <Picker.Item label={escolaridad.strNivelAcademico} value={escolaridad.strNivelAcademico} />
              })}
            </Picker>
            </Row>
            <Text style={genericStyles.textProfileInfo,{marginTop:10, fontSize:20, alignSelf:'center', marginBottom:5}}>{userEco.strNSS}</Text>
            <Input style={genericStyles.textProfileInfo,{borderWidth:0.5, height:30, alignSelf:'center', marginTop:10}} defaultValue={userEco.strNombreContacto} onChange={(e) => onChange(e,'strNombreContacto')}/>
            <Input style={genericStyles.textProfileInfo,{borderWidth:0.5, height:30, alignSelf:'center', marginTop:10}} defaultValue={userEco.strTelefonoContacto} onChange={(e) => onChange(e,'strTelefonoContacto')}/>
          </Form>
        </View>
        <Button activeOpacity={0.8} onPress={sectionTwo} style={[styles.Btn, genericStyles.ecoGeneral]}>
          <Icon name='bookmarks' />
          <Text >Beneficiarios</Text>
          <Text>{countBenefits !== 0 ? countBenefits : null}</Text>
        </Button>
        <View style={{ height: openTwo ? null : 0, overflow: 'hidden',borderWidth: 0.5, backgroundColor: '#f4f4f4' }}>
          <Text style={{ fontSize: 12, marginLeft: 5 }}>Todos los Campos Obligatorios *</Text>
          <ListItem style={styles.listBeneficiaries} itemDivider last thumbnail>
            <Left>
              <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                <Text>1</Text>
              </Badge>
            </Left>
            <Body>
              {userEco.strBeneficiario ? <Text style={{ fontSize: 18 }}>{userEco.strBeneficiario}</Text> : <Input style={{ fontSize: 18 }} placeholder='Nombre del Beneficiario'/>}
              <Row>
                {userEco.strParentesco ? <Text style={{ fontSize: 13 }}>{userEco.strParentesco}</Text> : <Input style={{ fontSize: 13 }} placeholder='Parentesco'/>}
                {userEco.strBeneficiarioNacimiento ? <Text style={{ fontSize: 13 }}>{userEco.strBeneficiarioNacimiento.substring(0,11)}</Text> : <Input style={{ fontSize: 13 }} placeholder='Fecha de Nacimiento'/> }
              </Row>
            </Body>
            <Right>
              <Button style={{ marginTop: 10 }} transparent>
                <Icon style={{ color: 'red' }} name='trash' />
              </Button>
            </Right>
          </ListItem>
          <ListItem style={styles.listBeneficiaries} itemDivider last thumbnail>
            <Left>
              <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                <Text>2</Text>
              </Badge>
            </Left>
            <Body>
              {userEco.strBeneficiario2 ? <Text style={{ fontSize: 18 }}>{userEco.strBeneficiario2}</Text> : <Input style={{ fontSize: 18 }}  placeholder='Nombre del Beneficiario'/>}
              <Row>
                {userEco.strParentesco2 ? <Text style={{ fontSize: 13 }}>{userEco.strParentesco2}</Text> : <Input style={{ fontSize: 13 }}  placeholder='Parentesco'/>}
                {userEco.strBeneficiarioNacimiento2 ? <Text style={{ fontSize: 13 }}>{userEco.strBeneficiarioNacimiento2.substring(0,11)}</Text> : <Input style={{ fontSize: 13 }}  placeholder='Fecha de Nacimiento'/> }
              </Row>
            </Body>
            <Right>
              <Button transparent>
                <Icon style={{ color: 'red' }} name='trash' />
              </Button>
            </Right>
          </ListItem>
          <ListItem style={styles.listBeneficiaries} itemDivider last thumbnail>
            <Left>
              <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                <Text>3</Text>
              </Badge>
            </Left>
            <Body>
              {userEco.strBeneficiario3 ? <Text style={{ fontSize: 18 }}>{userEco.strBeneficiario3}</Text> : <Input style={{ fontSize: 18 }} placeholder='Nombre del Beneficiario' onChange={(e) => onChange(e,'strBeneficiario3')}/>}
              <Row>
                {userEco.strParentesco3 ? <Text style={{ fontSize: 13 }}>{userEco.strParentesco3}</Text> : <Input style={{ fontSize: 13 }} placeholder='Parentesco' onChange={(e) => onChange(e,'strParentesco3')}/>}
                {userEco.strBeneficiario3 ? <Text style={{ fontSize: 13 }}>{userEco.strBeneficiarioNacimiento3}</Text> : <Input style={{ fontSize: 13 }} placeholder='Fecha de Nacimiento' onChange={(e) => onChange(e,'strBeneficiarioNacimiento3')}/>}
              </Row>
            </Body>
            <Right>
              <Button style={{ marginTop: 10 }} transparent>
                <Icon style={{ color: 'red' }} name='trash' />
              </Button>
            </Right>
          </ListItem>
          <ListItem style={styles.listBeneficiaries} itemDivider last thumbnail>
            <Left>
              <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                <Text>4</Text>
              </Badge>
            </Left>
            <Body>
              {userEco.strBeneficiario4 ? <Text style={{ fontSize: 18 }}>{userEco.strBeneficiario4}</Text> : <Input style={{ fontSize: 18 }} placeholder='Nombre del Beneficiario' onChange={(e) => onChange(e,'strBeneficiario4')}/>}
              <Row>
                {userEco.strParentesco4 ? <Text style={{ fontSize: 13 }}>{userEco.strParentesco4}</Text> : <Input style={{ fontSize: 13 }} placeholder='Parentesco' onChange={(e) => onChange(e,'strParentesco4')}/>}
                {userEco.strBeneficiario4 ? <Text style={{ fontSize: 13 }}>{userEco.strBeneficiarioNacimiento4}</Text> : <Input style={{ fontSize: 13 }} placeholder='Fecha de Nacimiento' onChange={(e) => onChange(e,'strBeneficiarioNacimiento4')}/>}
              </Row>
            </Body>
            <Right>
              <Button style={{ marginTop: 10 }} transparent>
                <Icon style={{ color: 'red' }} name='trash' />
              </Button>
            </Right>
          </ListItem>
        </View>
        <Button onPress={sectionThree} style={[styles.Btn, genericStyles.ecoGeneral]}>
          <Icon name='medkit' />
          <Text >Salud Personal</Text>
          <Text>{countHealth !== 0 ? countHealth : null}</Text>
        </Button>
        <View style={{ height: openThree ? null : 0, overflow: 'hidden', borderWidth: 0.5,borderRadius:10, backgroundColor: '#f4f4f4' }}>
          <Text style={{ fontSize: 12, marginLeft: 5 }}>Todos los Campos Obligatorios *</Text>
          <Form>
            <Textarea disabled style={styles.frmHealth} rowSpan={5} bordered placeholder='Enfermedades'>
              {userEco.strEnfermedad}
            </Textarea>
            <Textarea disabled style={styles.frmHealth} rowSpan={5} bordered placeholder='Alergias'>
              {userEco.strAlergias}
            </Textarea>
            <Row style={{ marginTop: 30 }}>
            
              <Picker
                mode='dropdown'
                iosHeader='Tipo de Sangre'
                iosIcon={<Icon name='arrow-down' />}
                style={{ width: 50, height: 20 }}>
                  <Picker.Item label={userEco.strTipoSangre} value={userEco.strTipoSangre} />
              </Picker>
              <Icon style={{fontSize:15}} name='lock'/>
              <Picker
                mode='dropdown'
                iosHeader='Talla Camisa'
                iosIcon={<Icon name='arrow-down' />}
                style={{ width: 50, height: 20 }}
                selectedValue={strCamisa}
                onValueChange={(itemValue) => setStrCamisa(itemValue)}>
                    {arrayCamisas.map(camisa => {
                  return <Picker.Item label={camisa.strCamisa} value={camisa.strCamisa} />
                })}
              </Picker>
              <Icon style={{fontSize:15}} type='FontAwesome5' name='edit'/>
            </Row>
            <Row style={{ marginTop:10 }}>
              <Picker 
                mode='dropdown'
                iosHeader='Talla Pantalón'
                iosIcon={<Icon name='arrow-down' />}
                style={{ width: 50, height: 20 ,borderWidth:0.5}}
                selectedValue={strTPantalon}
                onValueChange={(itemValue) => setStrTPantalon(itemValue)}>
                  {arrayPantalones.map(pantalon => {
                  return <Picker.Item label={pantalon.strTPantalon} value={pantalon.strTPantalon} />
                })}
              </Picker>
                <Icon style={{fontSize:15}} type='FontAwesome5' name='edit'/>
              <Picker
                mode='dropdown'
                iosHeader='Calzado'
                iosIcon={<Icon type='FontAwesome5' name='edit' />}
                style={{ width: 50, height: 20, borderWidth:0.5}}
                selectedValue={strTCalzado}
                onValueChange={(itemValue) => setStrTCalzado(itemValue)}> 
                {arrayCalzados.map(calzado => {
                  return <Picker.Item label={calzado.strTCalzado} value={calzado.strTCalzado} />
                })}
              </Picker>
              <Icon style={{fontSize:15}} type='FontAwesome5' name='edit'/>
            </Row>
            <Row style={{ marginTop:10, marginBottom:10}}>
              <Input style={{borderWidth:0.5, height:30, marginLeft:5, marginRight:10}} defaultValue={userEco.dblEstatura.toString() || 0.00} keyboardType='numeric' onChange={(e)=> onChange(e, 'dblEstatura')} />
              <Input style={{borderWidth:0.5, height:30, marginLeft:5, marginRight:5}} defaultValue={userEco.dblPeso.toString() || 0.00} keyboardType='numeric' onChange={(e)=> onChange(e, 'dblPeso')}/>
            </Row>
          </Form>
        </View>
        <Button success style={styles.saveBtn} rounded onPress={onSubmit}>
          <Text>
            Guardar
            </Text>
        </Button>
        <Button success style={styles.saveBtn} rounded onPress={() => navigation.navigate('Profile')}>
          <Text>
            Router
            </Text>
        </Button>
      </Content>
    </Container>
  );
};

