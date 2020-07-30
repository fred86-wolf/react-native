import React,{useEffect, useState} from 'react';
import { ScrollView, View, Image,TouchableOpacity, Linking} from 'react-native';
import axios from 'axios';
import  MyHeader  from '../../components/Header';
import apiCall from '../../redux/api/index';
import { getItem } from '../../utils/storage';
import { Container,Spinner, Content,Grid, Col, Text, Card, CardItem,Body, Icon,Row, Button} from 'native-base';
import genericStyles from '../../styles';
import styles from './style';
import {ACCESS_TOKEN } from '../../consts';
const course = require('../../../assets/cursos.png');

export default function Home ({navigation}){
  const [awardsPersonal, setAwardsPersonal] = useState(null);
  const [unitsCourses, setUnitsCourses] = useState(null);
  useEffect(() => {
      listCourses();
      listAwards();
  });
  const listCourses = async () => {
    const token = await getItem(ACCESS_TOKEN);
    axios.get('https://classroom.googleapis.com/v1/courses',{
      params:{access_token: token}
    }).then(function (response){
      let unitsCourses = response.data.courses;
      setUnitsCourses(unitsCourses.reverse());
    }).catch(function(error){
      console.log(error);
    });
  };
  const listAwards = async () => {
    const url = 'spAppMovil_Ind';
    const method = 'POST';
    const data = {strAccion: 'CONCEPTOS'};
    const response = await apiCall(url,method, data);
    let awardsPersonal = response.data;
    setAwardsPersonal(awardsPersonal);
  }
  const handleClassroom = (url) =>{
    Linking.openURL(url);
  }
    const handleAwards = () =>{
      navigation.navigate('Awards');
    }
    if (!awardsPersonal) {
      return <Spinner color='blue' />;
    }
    return (
      <Container>
        <MyHeader/>
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
          <View style={{marginTop:10, alignSelf:'flex-end', marginRight:10}}>
              <Icon type='FontAwesome5' name='book-reader' style={{color:'blue'}}/>
            </View>
            <View style={{alignSelf:'center'}}>
              <Text>Cursos</Text>
            </View>
          <ScrollView horizontal={true}>
            {unitsCourses && unitsCourses.map((unit) =>{
              return (
                <View key={unit.id} style={styles.carouselHome}>
                <TouchableOpacity style={styles.carouselHomeInside} onPress={() => handleClassroom(unit.alternateLink)}>
                  <Image style={styles.carouselImage} source={ course && course} />
                </TouchableOpacity>
                <View style={styles.carouselText}>
                  <Text style={styles.carouselTextInside}>
                    {unit.name}
                  </Text>
                </View>
              </View>)
            })}
            </ScrollView>
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
            <View style={{marginTop:10, alignSelf:'flex-end', marginRight:10}}>
              <Icon type='FontAwesome5' name='gifts' style={{color:'red'}}/>
            </View>
            <View style={{alignSelf:'center'}}>
              <Text>Premios</Text>
            </View>
          <ScrollView horizontal={true}>
            {awardsPersonal && awardsPersonal.map((award,index)=>{
              return (
            <View key={index} style={styles.carouselHome}>
              <View style={styles.carouselHomeInside}>
                <Image  style={styles.carouselImage}  source={course && course} />
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
        <Grid style={styles.containerFourth}>
          <Button rounded style={styles.seeBtn} onPress={handleAwards}><Text> Ver Más </Text></Button>
        </Grid>
        </Content>
      </Container>
    );
}