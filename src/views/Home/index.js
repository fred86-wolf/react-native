import React,{useEffect, useState} from 'react';
import { ScrollView, View, Image } from 'react-native';
import axios from 'axios';
import  MyHeader  from '../../components/Header';
import {ListViewer} from '../../components/ListSideBar';
import apiClass from '../../redux/api/classroom';
import apiCall from '../../redux/api/index';
import { getItem } from '../../utils/storage';
import { Container,Drawer,Spinner, Content,Grid, Col, Text, Card, CardItem,Body, Icon,Row, Button} from 'native-base';
import styles from './style';
import {ACCESS_TOKEN } from '../../consts';
const course = require('../../../assets/cursos.png');
export default function Home ({navigation}){
  const [awardsPersonal, setAwardsPersonal] = useState(null);
  const [unitsCourses, setUnitsCourses] = useState(null);
  useEffect(() => {
    if (!awardsPersonal && !unitsCourses) {
      listAwards();
      listCourses();
    }
  }, [awardsPersonal,unitsCourses]);
  const listCourses = async () => {
    const token = await getItem(ACCESS_TOKEN);
    // const method = 'GET';
    // const params = {access_token: token};
    // const response = await apiClass(method,params);
    // let unitsCourses = response.data.courses;
    // setUnitsCourses(unitsCourses.reverse());
    axios.get('https://classroom.googleapis.com/v1/courses',{
      params:{access_token: token}
    }).then(function (response){
      let unitsCourses = response.data.courses;
      setUnitsCourses(unitsCourses.reverse());
      console.log(unitsCourses);
    }).catch(function(error){
      console.log(error);
    });
  };
  const listAwards = async () => {
    const url = 'spLogin';
    const method = 'POST';
    const data = {strAccion: 'CONCEPTOS'};
    const response = await apiCall(url,method, data);
    let awardsPersonal = response.data;
    setAwardsPersonal(awardsPersonal);
  }
    
    closeDrawer = () => { this.drawer._root.close()};
    openDrawer = () => { this.drawer._root.open() };
    const handleProfile = () =>{
      navigation.navigate('Awards');
    }
    if (!awardsPersonal) {
      return <Spinner color='blue' />;
    }
    return (
      <Container>
        <MyHeader/>
        <Drawer ref={(ref) => { this.drawer = ref; }} content={<ListViewer/>} onClose={() => this.closeDrawer()}>
        <Content padder>
          <Row>
          <Card style={styles.cardMain} bordered>
              <CardItem style={styles.cardInside}>
                <Body>
                <Text style={styles.title}>200 puntos</Text>
                <Icon style={styles.mlIcon} name='trophy'/>
                </Body>
              </CardItem>
          </Card>
          <Card style={{backgroundColor: '#DFF6F0',flex:2, justifyContent:'center'}} bordered>
              <CardItem style={{flexDirection:'column', justifyContent:'center',backgroundColor: '#DFF6F0'}}>
                <Body>
                  <Text style={styles.title}>8.0</Text>
                  <Icon style={styles.mrIcon} name='pie'/>
                </Body>
              </CardItem>
          </Card>
          </Row>
        {/* <Grid style={styles.containerTwo}> */}
          {/* <Col style={styles.carouselHomeHeight}> */}
          <View style={{marginTop:10, alignSelf:'flex-end', marginRight:10}}>
              <Icon type='FontAwesome5' name='book-reader' style={{color:'blue'}}/>
            </View>
            <View style={{alignSelf:'center'}}>
              <Text>Cursos</Text>
            </View>
          <ScrollView horizontal={true}>
            {unitsCourses && unitsCourses.map(unit =>{
              return (
                <View style={styles.carouselHome} onPress={unit.alternateLink}>
                <View style={styles.carouselHomeInside}>
                  <Image style={styles.carouselImage} source={course}/>
                </View>
                <View style={styles.carouselText}>
                  <Text style={styles.carouselTextInside}>
                    {unit.name}
                  </Text>
                </View>
              </View>)
            })}
            </ScrollView>
          {/* </Col> */}
        {/* </Grid> */}
        {/* <Grid style={styles.containerThree}> */}
          <Row style={styles.dateCard}>
            <Col>
            <Icon style={styles.calendarDayIcon} type='FontAwesome5' name='calendar-day'></Icon>
            <Card style={styles.grayCard}>
              <Text style={styles.textCenter}>Entrada</Text>
              <Icon style={styles.scheduleIconOne} type='FontAwesome5' name='check-square'>
              <Text style={styles.subtitle}>  8:30 A.M.</Text>
              </Icon>
            </Card>
            </Col>
            <Col style={styles.lineCard}>
            </Col>
            <Col>
              <Text style={[styles.title,styles.scheduleIconText]}>HOY</Text>
              <Card style={styles.grayCard}>
                <Text style={styles.textCenter}>Salida</Text>
                <Icon style={styles.scheduleIconOne} type='FontAwesome5' name='check-square'>
                <Text style={styles.subtitle}>  8:30 A.M.</Text>
                </Icon>
              </Card>
            </Col>
          </Row>
        {/* </Grid> */}
        {/* <Grid style={styles.containerTwo}> */}
          {/* <Col style={styles.carouselHomeHeight}> */}
            <View style={{marginTop:10, alignSelf:'flex-end', marginRight:10}}>
              <Icon type='FontAwesome5' name='gifts' style={{color:'red'}}/>
            </View>
            <View style={{alignSelf:'center'}}>
              <Text>Premios</Text>
            </View>
          <ScrollView horizontal={true}>
            {awardsPersonal.map(award=>{
              return (
            <View style={styles.carouselHome}>
              <View style={styles.carouselHomeInside}>
                <Image style={styles.carouselImage} source={course}/>
              </View>
              <View style={styles.carouselText}>
                <Text style={styles.carouselTextInside}>
                  {award.strConcepto}
                </Text>
                <Text style={styles.carouselTextInside}>
                   {award.intPuntaje} Puntos
                </Text>
              </View>
            </View> )
            })}
            </ScrollView>
          {/* </Col> */}
        {/* </Grid> */}
        <Grid style={styles.containerFourth}>
          <Button rounded info style={styles.seeBtn} onPress={handleProfile}><Text> Ver Más </Text></Button>
        </Grid>
        </Content>
      </Drawer>
      </Container>
    );
}