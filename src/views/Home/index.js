import React, { useEffect, useState, lazy, Suspense } from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import axios from 'axios';
import apiCall from '../../redux/api/index';
import { getItem } from '../../utils/storage';
const MyHeader = lazy(() => import('../../components/Header'));
const Carousel = lazy(() => import('../../components/Home/Carousel'));
const CarouselAwards = lazy(() => import('../../components/Home/FlatList'));
const TimeClock = lazy(() => import('../../components/Home/TimeClock'));
const Scores = lazy(() => import('../../components/Home/Scores'));
const RollCall = lazy(() => import ('../../components/Home/RollCall'));
import Overload from '../../components/Overload';
import styles from './style';
import { ACCESS_TOKEN, USER_ECODELI } from '../../consts';
export default function Home({ navigation }) {
  const [watch, setWatch] = useState('');
  const [userEcodeli, setUserEcodeli] = useState (null);
  const [awardsPersonal, setAwardsPersonal] = useState(null);
  const [unitsCourses, setUnitsCourses] = useState(null);
  useEffect(() => {
    // listCourses();
    listAwards();
  }, [awardsPersonal]);
  const listCourses = async () => {
    const token = await getItem(ACCESS_TOKEN);
    axios.get('https://classroom.googleapis.com/v1/courses', {
      params: { access_token: token }
    }).then(function (response) {
      let unitsCourses = response.data.courses;
      setUnitsCourses(unitsCourses.reverse());
    }).catch(function (error) {
      console.log(error);
    });
  };
  const listAwards = async () => {
    const url = 'spAppMovil_Ind';
    const method = 'POST';
    const data = { strAccion: 'CONCEPTOS' };
    const response = await apiCall(url, method, data);
    let awardsPersonal = response.data;
    setAwardsPersonal(awardsPersonal);
  }
  useEffect(() => {
    getClockRollCall();
  },[watch])
  const getClockRollCall = async () => {
    let userEcodeli = await getItem(USER_ECODELI);
    userEcodeli = JSON.parse(userEcodeli);
    setUserEcodeli(userEcodeli);
    const url = 'spAppMovil_Ind';
    const method = 'POST';
    const obj = { strAccion:'RelojAsistencia', strPersonal:userEcodeli.strUsuario };
    const {data} = await apiCall(url, method, obj);
    setWatch(data);
  }
  const handleAwards = () => {
    navigation.navigate('Awards');
  }
  if (!awardsPersonal) {
    return <Overload/>;
  }
  return (
    <Container>
      <Suspense fallback={<Overload/>}>
        <MyHeader />
      </Suspense>
      <Content padder>
        <Suspense fallback={<Overload/>}>
          <Scores />
        </Suspense>
        <View>
          <Text>Cursos</Text>
        </View>
        <Suspense fallback={<Overload/>}>
          <Carousel unitsCourses={unitsCourses} />
        </Suspense>
        { watch !== 'Si' ?
        <Suspense fallback={<Overload/>}>
        <RollCall watch={watch}/>
        </Suspense>:
        <Suspense fallback={<Overload/>}>
          <TimeClock watch={watch}/>
        </Suspense> }
        <View>
          <Text>Premios</Text>
        </View>
        <Suspense fallback={<Overload/>}>
          <CarouselAwards awardsPersonal={awardsPersonal} />
        </Suspense>
        <Button rounded style={styles.seeBtn} onPress={handleAwards}><Text> Ver Más </Text></Button>
      </Content>
    </Container>
  );
}