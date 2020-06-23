import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import apiCall from '../../redux/api';
import {Container, Content, Button, Text, Thumbnail,Icon, Spinner} from 'native-base';
import styles from './style';
import genericStyles from '../../styles';
import  ProfileDetail  from '../../components/ProfileDetail';
import ProfileBenefits from '../../components/ProfileBenefits';
import MyHeader from '../../components/Header';
import { getItem } from '../../utils/storage';
import { USER_INFO } from '../../consts';
import ProfileHealth from '../../components/ProfileHealth';

export default function Profile(){
    const method = 'POST';
    const url = 'spLogin';
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [arrayEdoCivil, setArrayEdoCivil] = useState([]);
    const [arrayEscolaridad, setArrayEscolaridad] = useState([]);
    const [arrayCamisas, setArrayCamisas] = useState([]);
    const [arrayPantalones, setArrayPantalones] = useState([]);
    const [arrayCalzados, setArrayCalzados] = useState([]);
    const [userEcodeli, setUserEcodeli] = useState(null);
    const [disabledItem, setDisabledItem] = useState(true);
    const sectionOne = () => {
        setOpenOne(true);
      }
    const sectionTwo = () => {
        setOpenTwo(true);
      }
    const sectionThree = () => {
        setOpenThree(true);
      }
      const getEdoCivils = async () => {
        const obj = { strAccion: 'EDO_CIVIL' };
        const {data} = await apiCall(url, method, obj);
        setArrayEdoCivil(data);
      }
      const getEscolaridad = async () => {
        const obj = { strAccion: 'ESCOLARIDAD' };
        const {data} = await apiCall(url, method, obj);
        setArrayEscolaridad(data);
      }
      const getCamisas = async () => {
        const obj = { strAccion: 'CAMISA' };
        const {data} = await apiCall(url, method, obj);
        setArrayCamisas(data);
      }
      const getPantalones = async () => {
        const obj = { strAccion: 'PANTALON' };
        const {data} = await apiCall(url, method, obj);
        setArrayPantalones(data);
      }
      const getCalzados = async () => {
        const obj = { strAccion: 'CALZADO' };
        const {data} = await apiCall(url, method, obj);
        setArrayCalzados(data);
      }
      const loadUserInfo = async () => {
        let userInfo = await getItem(USER_INFO);
        userInfo = JSON.parse(userInfo);
        setUserInfo(userInfo);
        console.log(userInfo);
      }
      const loadUserEcodeli = async () => {
        const strUser = {
          strAccion: 'LOGIN',
          strUsuario: userInfo.email
        }
        const user = await apiCall(url,method, strUser);
        setUserEcodeli(user);
      }
      const onSubmit = () => {
        console.log('Okk ksaldkjldkajkld');
      }
      useEffect(() => {
        if (!userInfo) {
          loadUserInfo();        
          getEdoCivils();
          getEscolaridad();
          getCamisas();
          getPantalones();
          getCalzados(); 
        }
      });

    return(
        <Container>
            <MyHeader/>
            <Content contentContainerStyle={{justifyContent:'center'}} padder>
                    <Thumbnail large style={styles.profileImage} source={{ uri: userInfo.photoUrl}} />
                    <Button onPress={sectionOne} style={[styles.btnOne, genericStyles.ecoGeneral]}>
                        <Icon name='person' />
                        <Text>Detalle Personal</Text>
                        <Text>ytyt</Text>
                    </Button>
                    <View style={{ height: openOne ? null : 0, overflow: 'hidden', borderWidth: 0.5, backgroundColor: '#f4f4f4'}}>
                        {/* <ProfileDetail edoCiviles={arrayEdoCivil} nivelesEscolaridad={arrayEscolaridad}/> */}
                    </View>
                    <Button onPress={sectionTwo} style={[styles.btnOne, genericStyles.ecoGeneral]}>
                        <Icon name='bookmarks' />
                        <Text>Beneficiarios</Text>
                        <Text>ytyt</Text>
                    </Button>
                    <View style={{ height: openTwo ? null : 0, overflow: 'hidden', borderWidth: 0.5, backgroundColor: '#f4f4f4'}}>
                        {/* <ProfileBenefits userEcodeli={userEcodeli}/> */}
                    </View>
                    <Button onPress={sectionThree} style={[styles.btnOne, genericStyles.ecoGeneral]}>
                        <Icon name='medkit' />
                        <Text>Salud Personal</Text>
                        <Text>ytyt</Text>
                    </Button>
                    <View style={{ height: openThree ? null : 0, overflow: 'hidden', borderWidth: 0.5, backgroundColor: '#f4f4f4'}}>
                      {/* <ProfileHealth userEcodeli={userEcodeli} tallasCamisas={arrayCamisas} tallasPantalones={arrayPantalones} tallasCalzado={arrayCalzados}/> */}
                    </View>
                    <Button style={styles.saveBtn} onPress={onSubmit} rounded>
                      <Text>Guardar</Text>
                    </Button>
            </Content>
        </Container>
    );
};