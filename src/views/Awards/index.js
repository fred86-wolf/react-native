import React, {useState, useEffect} from 'react';
import {Image,StatusBar} from 'react-native';
import styles from './style';
import MyHeader from '../../components/Header';
import apiCall from '../../redux/api';
import { Container, Content,Text,View, Spinner } from 'native-base';
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
export default function Awards(){
    const [awardsPersonal, setAwardsPersonal] = useState(null);
    useEffect(() => {
        if(!awardsPersonal){
            listAwards();
        }
    });
    const listAwards = async () => {
        const url = 'spLogin';
        const method = 'POST';
        const data = {strAccion: 'CONCEPTOS'};
        const response = await apiCall(url,method, data);
        let awardsPersonal = response.data;
        setAwardsPersonal(awardsPersonal);
      }
    if (!awardsPersonal) {
        return <Spinner color='blue' />;
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