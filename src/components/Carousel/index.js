import React from 'react';
import {View, Text, Image, ScrollView, Linking, TouchableOpacity} from 'react-native';
import styles from './style';
const course = require('../../../assets/cursos.png');

export default function Carousel(props){
    const {unitsCourses} = props;
    const handleClassroom = (url) =>{
        Linking.openURL(url);
      }
    return(
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
    )
}