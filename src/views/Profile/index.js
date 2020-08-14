import React, {useState, useEffect, lazy, Suspense} from 'react';
import {View, Alert} from 'react-native';
import apiCall from '../../redux/api';
import {Container, Content, Button,Text, Thumbnail,Icon, Spinner, Form, Item, Label,Input,Picker, ListItem, Left,Right,Body,Row, Badge, DatePicker, Textarea } from 'native-base';
import styles from './style';
import genericStyles from '../../styles';
const MyHeader = lazy(() => import('../../components/Header'));
import Overload from '../../components/Overload';
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
  const [userEco, setUserEco] = useState(null);
  const [userEcodeli, setUserEcodeli] = useState(null);
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
    let userEcodeli = await getItem(USER_ECODELI);
    userEcodeli = JSON.parse(userEcodeli);
    setUserEcodeli(userEcodeli);
    try {
      const strUser = {
        strAccion: 'LOGIN',
        strUsuario: userEcodeli.strUsuario
      }
      const { data } = await apiCall(url, method, strUser);
      setUserEco(data[0]);
    setStrEstadoCivil(data[0].strEstadoCivil);
    setStrNivelAcademico(data[0].strNivelAcademico);
    setStrCamisa(data[0].strCamisa);
    setStrTPantalon(data[0].strTPantalon);
    setStrTCalzado(data[0].strTCalzado);
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
    return <Overload/>
  }
  return (
    <Container>
      <Suspense fallback={<Overload/>}>
        <MyHeader />
      </Suspense>
      <Content contentContainerStyle={genericStyles.centeredContent} padder>
        <Thumbnail large style={styles.profileImage} source={{ uri: userInfo.photoUrl }} />
      </Content>
    </Container>
  );
};