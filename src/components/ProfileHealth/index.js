import React from 'react';
import {Form,Input,Text,Icon,Picker,Content, Textarea, Item, Label, Spinner} from 'native-base';
import styles from './style';

export default function ProfileHealth({tallasCamisas, tallasPantalones, tallasCalzado, userEcodelideli}){
    if (!tallasCamisas || !tallasPantalones || !tallasCalzado || !userEcodelideli) {
        return <Spinner color='blue'/>
    }
    return(
        <Content>
            <Form>
                <Item style={{borderBottomWidth:0}} stackedLabel>
                    <Label>Enfermedades <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                    <Textarea style={{alignSelf:'flex-start', marginTop:10}} rowSpan={5} bordered placeholder='Separa cada Enfermedad/Alergias por comas'>
                        {userEcodeli.strEnfermedad}
                    </Textarea>
                </Item>
                <Item style={{borderBottomWidth:0}} stackedLabel>
                    <Label>Alergias <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                    <Textarea style={{alignSelf:'flex-start', marginTop:10}} rowSpan={5} bordered placeholder='Separa cada Enfermedad/Alergias por comas'>
                        {userEcodeli.strEnfermedad}
                    </Textarea>
                </Item>
                <Item style={{borderBottomWidth:0}} stackedLabel>
                    <Label>Tipo de Sangre <Icon style={{fontSize:15}} type='FontAwesome5' name='eye'/></Label>
                    <Text style={{fontSize:20,alignSelf:'flex-start', marginTop:5}}>{userEcodeli.strTipoSangre}</Text>
                </Item>
                <Item style={{borderBottomWidth:0}} stackedLabel>
                    <Label>Talla de Camisa <Icon style={{fontSize:15}} type='FontAwesome5' name='edit'/></Label>
                    <Picker mode='dropdown' iosHeader='Talla Camisa' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf:'flex-start' }} selectedValue={userEcodeli.strCamisa}>
                    {tallasCamisas.map((camisa, index) => {
                  return <Picker.Item key={index} label={camisa.strCamisa} value={camisa.strCamisa} />
                })}
              </Picker>
                </Item>
                <Item style={{borderBottomWidth:0}} stackedLabel>
                    <Label>Talla de Pantalón <Icon style={{fontSize:15}} type='FontAwesome5' name='edit'/></Label>
                    <Picker mode='dropdown' iosHeader='Talla Pantalón' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf:'flex-start' }} selectedValue={userEcodeli.strCamisa}>
                    {tallasPantalones.map((pantalon,index) => {
                  return <Picker.Item key={index} label={pantalon.strTPantalon} value={pantalon.strTPantalon} />
                })}
              </Picker>
                </Item>
                <Item style={{borderBottomWidth:0}} stackedLabel>
                    <Label>Talla de Calzado <Icon style={{fontSize:15}} type='FontAwesome5' name='edit'/></Label>
                    <Picker mode='dropdown' iosHeader='Talla Calzado' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf:'flex-start' }} selectedValue={userEcodeli.strTCalzado}>
                    {tallasCalzado.map((pantalon,index) => {
                  return <Picker.Item key={index} label={pantalon.strTCalzado} value={pantalon.strTCalzado} />
                })}
              </Picker>
                </Item>
            </Form>
        </Content>
    )
};