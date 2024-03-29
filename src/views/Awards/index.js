import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import styles from './style';
import MyHeader from '../../components/Header';
import apiCall from '../../redux/api';
import { Container, Content,Text,View} from 'native-base';
import Overload from '../../components/Overload';
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
export default function Awards(){
    const [awardsPersonal, setAwardsPersonal] = useState(null);
    useEffect(() => {
        listAwards();
    },[awardsPersonal]);
    const listAwards = async () => {
        const url = 'spAppMovil_Ind';
        const method = 'POST';
        const obj = {strAccion: 'CONCEPTOS'};
        const {data} = await apiCall(url,method, obj);
        setAwardsPersonal(data);
      }
      if (!awardsPersonal) {
        return <Overload/>;
      }
    return(
        <Container>
            <MyHeader/>
            <Content padder>
                <View style={{flexDirection:'row', alignItems:'center', flex:1, flexWrap:'wrap'}}>
                    {awardsPersonal && awardsPersonal.map((award,index)=>{
                    return(
                    <View key={index} style={{justifyContent:'center', marginTop:10, width:'50%'}}>
                        <View style={{justifyContent:'center'}}>
                            <Text>Nivel {award.intNivel}</Text>
                            <Image source={{uri: uri}} style={styles.mainImage}/>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Text>{award.strConcepto}</Text>
                            <Text>{award.intPuntaje}</Text>
                        </View>
                    </View>)
                    })}
                </View>
            </Content>
        </Container>
    )
}