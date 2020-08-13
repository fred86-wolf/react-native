import React, { useEffect, useState, lazy, Suspense } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { Container, Content, Col, Text, Card, CardItem, Body, Icon, Row, Button } from 'native-base';
import { ProgressChart } from 'react-native-chart-kit';
const { width,height } = Dimensions.get('window');
import axios from 'axios';
import apiCall from '../../redux/api/index';
import { getItem } from '../../utils/storage';
const MyHeader = lazy(() => import('../../components/Header'));
const Carousel = lazy(() => import('../../components/Carousel'));
const CarouselAwards = lazy(() => import('../../components/FlatList'));
const TimeClock = lazy(() => import('../../components/TimeClock'));
const Scores = lazy(() => import('../../components/Scores'));
import styles from './style';
import { ACCESS_TOKEN, COURIOUS_BLUE } from '../../consts';
const course = require('../../../assets/cursos.png');
const data = {
  data: [0.8]
};
const chartConfig = {
  backgroundGradientFrom: "#efefef",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#efefef",
  color: (opacity = 1) => `rgba(254, 186, 0, ${opacity})`,
  strokeWidth: 1,
  barPercentage: 0.2,
  useShadowColorFromDataset: false,
  barRadius: 2,
};
export default function Home({ navigation }) {
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
  const handleAwards = () => {
    navigation.navigate('Awards');
  }
  if (!awardsPersonal) {
    return <ActivityIndicator color={COURIOUS_BLUE}/>;
  }
  return (
    <Container>
      <Suspense fallback={<View><ActivityIndicator color={COURIOUS_BLUE}/></View>}>
        <MyHeader />
      </Suspense>
      <Content padder>
        <Suspense fallback={<View><ActivityIndicator color={COURIOUS_BLUE}/></View>}>
          <Scores />
        </Suspense>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text>Cursos</Text>
        </View>
        <Suspense fallback={<View><ActivityIndicator color={COURIOUS_BLUE}/></View>}>
          <Carousel unitsCourses={unitsCourses} />
        </Suspense>
        <Row style={styles.dateCard}>
          <Col>
            <Icon style={styles.calendarDayIcon} type='FontAwesome5' name='calendar-alt'></Icon>
            <Text style={styles.textCenter}>Entrada</Text>
            <Icon style={styles.scheduleIconOne} type='FontAwesome5' name='stopwatch'>
              <Text style={styles.subtitleSchedule}>  8:30 A.M.</Text>
            </Icon>
          </Col>
          <Col>
            <Text style={[styles.titleCardDate, styles.scheduleIconText]}>Hoy</Text>
            <Text style={styles.textCenter}>Salida</Text>
            <Icon style={styles.scheduleIconOne} type='FontAwesome5' name='stopwatch'>
              <Text style={styles.subtitleSchedule}>  8:30 A.M.</Text>
            </Icon>
          </Col>
        </Row>
        {/* <Suspense fallback={<View><Text>Loading...</Text></View>}>
          <TimeClock />
        </Suspense> */}
        <View style={{ alignSelf: 'flex-start' }}>
          <Text>Premios</Text>
        </View>
        <Suspense fallback={<View><ActivityIndicator color={COURIOUS_BLUE}/></View>}>
          <CarouselAwards awardsPersonal={awardsPersonal} />
        </Suspense>
        <Button rounded style={styles.seeBtn} onPress={handleAwards}><Text> Ver Más </Text></Button>
      </Content>
    </Container>
  );
}