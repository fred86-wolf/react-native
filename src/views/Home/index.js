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
import Overload from '../../components/Overload';
import styles from './style';
import { ACCESS_TOKEN } from '../../consts';
export default function Home({ navigation }) {
  const [awardsPersonal, setAwardsPersonal] = useState(null);
  const [unitsCourses, setUnitsCourses] = useState(null);
  useEffect(() => {
    listCourses();
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
        <Suspense fallback={<Overload/>}>
          <TimeClock />
        </Suspense>
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