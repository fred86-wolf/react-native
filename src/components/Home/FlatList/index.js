import React from 'react'
import { FlatList, View, Text, Image } from 'react-native';
import styles from './style';
import {Icon, Card} from 'native-base';
const course = require('../../../../assets/cursos.png');
export default function CarouselAwards(props) {
    const { awardsPersonal } = props;
    return (
        <FlatList
            horizontal={true}
            data={awardsPersonal}
            keyExtractor={item => item.intID.toString()}
            renderItem={({ item }) => (
                <Card style={styles.carouselHome}>
                    <View style={styles.carouselHomeInside}>
                        <Image style={styles.carouselImage} source={course && course} />
                    </View>
                    <View style={styles.carouselText}>
                        <Text style={styles.carouselTextInside}>
                            {item.strConcepto}
                        </Text>
                        <Text style={[styles.carouselTextInside, styles.borderTextCarousel]}>
                            <Icon style={styles.awardIcon} type='FontAwesome5' name='star-half-alt' /> {item.intPuntaje} pts 
                        </Text>
                    </View>
                </Card>
            )}
        />
    )
}