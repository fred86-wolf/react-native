import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import styles from './style';
import {ListViewer} from '../../components/ListSideBar';
import MyHeader from '../../components/Header';
import { Container, Content,Text,Drawer, Thumbnail,Card,CardItem,Body,Row,View } from 'native-base';
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
export default function Awards(){
    closeDrawer = () => { this.drawer._root.close()};
    openDrawer = () => { this.drawer._root.open() };
    return(
        <Container>
            <MyHeader/>
            <Drawer ref={(ref) => { this.drawer = ref; }} content={<ListViewer/>} onClose={() => this.closeDrawer()}>
            <Content padder>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center', marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',marginLeft:10,marginTop:10}}>
                    <View style={{justifyContent:'center'}}>
                        <Text>Nivel 1</Text>
                        <Image source={{uri: uri}} style={styles.mainImage}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text>Descripcion</Text>
                        <Text>Puntaje</Text>
                    </View>
                </View>
                </View>
            </Content>
            </Drawer>
        </Container>
    )
}