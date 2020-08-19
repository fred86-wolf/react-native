import React, { useState, useEffect, lazy, Suspense } from 'react';
import {Alert, ScrollView, TextInput} from 'react-native';
import apiCall from '../../redux/api';
import { Container, Content, Button, Text, Thumbnail, Icon, Form , Input} from 'native-base';
import { Formik } from 'formik';
import styles from './style';
import genericStyles from '../../styles';
const MyHeader = lazy(() => import('../../components/Header'));
const DetailProfile = lazy(() => import('../../components/Profile/DetailProfile'));
const BenefitsProfile = lazy(() => import('../../components/Profile/BenefitsProfile'));
const HealthProfile = lazy(() => import('../../components/Profile/HealthProfile'));
import Overload from '../../components/Overload';
import { getItem } from '../../utils/storage';
import { USER_INFO, USER_ECODELI} from '../../consts';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export default function Profile({ navigation }) {
  const method = 'POST';
  const url = 'spAppMovil_Ind';
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
    setFrmDataUserEco({ ...frmDataUserEco, [type]: e.nativeEvent.text });
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
      strBeneficiario2: '',
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
      let userEco = data[0];
      setUserEco(userEco);
      setStrEstadoCivil(data[0].strEstadoCivil);
      setStrNivelAcademico(data[0].strNivelAcademico);
      setStrCamisa(data[0].strCamisa);
      setStrTPantalon(data[0].strTPantalon);
      setStrTCalzado(data[0].strTCalzado);
    } catch (error) {
      console.log('Error', error);
    }
  }
  const onSaveData = () => {
    console.log(frmDataUserEco);
    // setStrEstadoCivil(strEstadoCivil);
    // setStrNivelAcademico(strNivelAcademico);
    // setStrCamisa(strCamisa);
    // setStrTPantalon(strTPantalon);
    // setStrTCalzado(strTCalzado);
    // try {
    //   setFrmDataUserEco({
    //     ...frmDataUserEco, strEstadoCivil, strNivelAcademico, strCamisa, strTPantalon, strTCalzado,
    //     strAccion: 'INSERT_SOLICITUD', strUsuario: userEco.strUsuario, strCentroCostos: userEco.strCentroCostos,
    //     strNombre: userEco.strNombre, strApellidoPaterno: userEco.strApellidoPaterno, strApellidoMaterno: userEco.strApellidoMaterno
    //   });
    //   const data = frmDataUserEco;
    //   const response = await apiCall(url, method, data);
    //   if (response.data[0].strAccion == 'OK') {
    //     Alert.alert(
    //       '¡Bien Hecho!',
    //       'Tus datos serán Actualizados en breve',
    //       [
    //         {
    //           text: 'OK',
    //           onPress: () => navigation.navigate('Home'),
    //           style: 'success'
    //         }
    //       ]
    //     );
    //   }
    // } catch (e) {
    //   alert('¡Error, Intente mas Tarde!', e);
    // }
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
  }, [userEco]);
  if (!userInfo || !userEco) {
    return <Overload />
  }
  return (
    <Container>
      <Suspense fallback={<Overload />}>
        <MyHeader />
      </Suspense>
      <ScrollView>
      <Content contentContainerStyle={genericStyles.centeredContent} padder>
          <Thumbnail large style={styles.profileImage} source={{ uri: userInfo.photoUrl }} />
          <Formik initialValues={userEco}
          onSubmit={values => console.log('Valores desde el formik',values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <Form>
              <Text>{userEco.strUsuario}</Text>
              <Text>{`${userEco.strNombre} ${userEco.strApellidoPaterno} ${userEco.strApellidoMaterno}`}</Text>
              <Text>{moment(userEco.strFechaNacimiento).format('LL')}</Text>
              <Text>{userEco.strEstadoCivil}</Text>
              <Text>{`${userEco.strCentroCostos} ${userEco.strDescripcionCC}`}</Text>
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strEstado ? userEco.strEstado  : ''} onChange={(e) => onChange(e, 'strEstado')} />
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strPoblacion} onChange={(e) => onChange(e, 'strPoblacion')} />
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strDireccion} onChange={(e) => onChange(e, 'strDireccion')} />
              <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strDireccionNumero} onChange={(e) => onChange(e, 'strDireccionNumero')} />
              <Button onPress={handleSubmit}>
                <Text>Guardar</Text>
              </Button>
            </Form>
            )}
          </Formik>
          {/* <Suspense fallback={<Overload/>}>
            <DetailProfile userEco={userEco} arrayEdoCivil={arrayEdoCivil} arrayEscolaridad={arrayEscolaridad}/>
          </Suspense>
          <Suspense fallback={<Overload/>}>
            <BenefitsProfile userEco={userEco} />
          </Suspense>
          <Suspense fallback={<Overload/>}>
            <HealthProfile userEco={userEco} arrayCamisas={arrayCamisas} arrayPantalones={arrayPantalones} arrayCalzados={arrayCalzados}/>
          </Suspense> */}
          {/* <Button style={styles.saveBtn} onPress={onSaveData}>
              <Text style={styles.textBtn}>Guardar</Text>
              <Icon  type='FontAwesome5' name='save'/>
          </Button> */}
        </Content>
      </ScrollView>
    </Container>
  );
};