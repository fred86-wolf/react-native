import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ScrollView, View, Image, Dimensions } from 'react-native';
import { Container, Spinner, Content, Col, Text, Card, CardItem, Body, Icon, Row, Button } from 'native-base';
import { ProgressChart } from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
import axios from 'axios';
import apiCall from '../../redux/api/index';
import { getItem } from '../../utils/storage';
const MyHeader = lazy(() => import('../../components/Header'));
const Carousel = lazy(() => import('../../components/Carousel'));
const CarouselAwards = lazy(()=> import('../../components/FlatList'));
const DateCard = lazy(()=> import('../../components/DateCard'));
import genericStyles from '../../styles';
import styles from './style';
import { ACCESS_TOKEN } from '../../consts';
const course = require('../../../assets/cursos.png');
const data = {
  labels: ['Puntos'],
  data: [0.8]
};
const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#f2f2f2",
  color: (opacity = 1) => `rgba(254, 186, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  barRadius:10
};
export default function Home({ navigation }) {
  const [awardsPersonal, setAwardsPersonal] = useState(null);
  const [unitsCourses, setUnitsCourses] = useState(null);
  useEffect(() => {
    listCourses();
    listAwards();
  });
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
    return <Spinner color='blue' />;
  }
  return (
    <Container>
      <Suspense fallback={<View><Text>Loading...</Text></View>}>
        <MyHeader />
      </Suspense>
      <Content padder>
        <Row>
          <Card style={styles.cardMain}>
            <CardItem style={styles.cardInside}>
              <Body>
                <Text style={styles.titleWhite}>200 puntos</Text>
                <Icon style={styles.mlIcon} name='trophy' />
              </Body>
            </CardItem>
          </Card>
          <Card style={{ flex: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
            <CardItem style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <ProgressChart
                data={data}
                width={screenWidth/3}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
              />
            </CardItem>
          </Card>
        </Row>
        <View style={{ marginTop: 10, alignSelf: 'flex-end', marginRight: 10 }}>
        </View>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text>Cursos</Text>
        </View>
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
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
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
          <DateCard/>
        </Suspense>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text>Premios</Text>
        </View>
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
          <CarouselAwards awardsPersonal={awardsPersonal}/>
        </Suspense>
        <Button rounded style={styles.seeBtn} onPress={handleAwards}><Text> Ver Más </Text></Button>
      </Content>
    </Container>
  );
}