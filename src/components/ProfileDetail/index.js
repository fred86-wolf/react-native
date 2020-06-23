import React from 'react';
import {Form,Input,Text,Picker, Icon,Content, DatePicker, Item, Label, Spinner} from 'native-base';
import genericStyles from '../../styles';
import styles from './style';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default function ProfileDetail({edoCiviles, nivelesEscolaridad, userEcodeli}){
  if (!edoCiviles || !nivelesEscolaridad) {
    return <Spinner color='blue'/>
  }
    return (
          <Content>
            <Form style={styles.form,{marginTop:10,marginBottom:230}}>
              <Text style={{ fontSize: 12, marginLeft: 5, alignSelf:'center' }}>Todos los Campos Obligatorios *</Text>
              <Item style={{marginTop:5, borderBottomWidth:0}} stackedLabel>
                <Label style={{alignSelf:'flex-start'}}>Numero de Empleado <Icon style={{fontSize:15}} type='FontAwesome5' name='eye'/></Label>
                <Text style={{fontSize:20,alignSelf:'flex-start', marginTop:5}}>{userEcodeli.strUsuario}</Text>
              </Item>
              <Item style={{marginTop:5, borderBottomWidth:0}} stackedLabel>
                <Label style={{alignSelf:'flex-start'}}>Nombre Completo <Icon style={{fontSize:15}} type='FontAwesome5' name='eye'/></Label>
                <Text style={{fontSize:20,alignSelf:'flex-start', marginTop:5}}>{userEcodeli.strNombre + ' ' + ' ' + userEcodeli.strApellidoPaterno + ' ' + userEcodeli.strApellidoMaterno}</Text>
              </Item>
              <Item style={{marginTop:5, borderBottomWidth:0}} stackedLabel>
                <Label style={{alignSelf:'flex-start'}}>Fecha de Nacimiento <Icon style={{fontSize:15}} type='FontAwesome5' name='eye'/></Label>
                {userEcodeli.strFechaNacimiento ? <Text style={{fontSize:20,alignSelf:'flex-start', marginTop:5}}>{moment(userEcodeli.strFechaNacimiento).format('LL')}</Text> : <DatePicker defaultDate={new Date()} disabled={false} placeHolderText='Selecciona tu Fecha de Nacimiento'/>}
              </Item>
              <Item style={{marginTop:5, borderBottomWidth:0}} stackedLabel>
                <Label style={{alignSelf:'flex-start'}}>Estado Civil <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Picker mode='dropdown'
                  iosHeader='Estado Civil'
                  iosIcon={<Icon name='arrow-down' />} selectedValue={userEcodeli.strNivelAcademico} style={{height:30, width:150, alignSelf:'flex-start'}}>
                  {edoCiviles.map((edocivil, index) => {return <Picker.Item key={index} label={edocivil.strEstadoCivil} value={edocivil.strEstadoCivil} />})}
                </Picker>
              </Item>
              <Item style={{marginTop:5,borderBottomWidth:0}} stackedLabel>
                <Label>Departamento <Icon style={{fontSize:15}} type='FontAwesome5' name='eye'/></Label>
                <Text style={{fontSize:20,alignSelf:'flex-start', marginTop:5}}>{userEcodeli.strCentroCostos + ' ' + userEcodeli.strDescripcionCC}</Text>
              </Item>
              <Item style={{height:40, marginTop:5, borderBottomWidth:0}} stackedLabel>
                <Label>Estado <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:5}} defaultValue={userEcodeli.strEstado} />
              </Item>
              <Item style={{height:40, marginTop:5,borderBottomWidth:0}} stackedLabel>
                <Label>Población <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:5}} defaultValue={userEcodeli.strPoblacion}/>
              </Item>
              <Item style={{height:40, marginTop:5, borderBottomWidth:0}} stackedLabel>
                <Label>Dirección <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:5}} defaultValue={userEcodeli.strDireccion}/>
              </Item>
              <Item style={{height:40,marginTop:5, borderBottomWidth:0}} stackedLabel>
                <Label>Número Exterior  <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:15}} defaultValue={userEcodeli.strDireccionNumero}/>
              </Item>
              <Item style={{height:40,marginTop:5,borderBottomWidth:0}} stackedLabel>
                <Label>Número Interior <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:15}} defaultValue={userEcodeli.strDireccionNumeroInt}/>
              </Item>
              <Item style={{height:40,marginTop:5,borderBottomWidth:0}} stackedLabel>
                <Label>Teléfono <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:15}} defaultValue={userEcodeli.strTelefono}/>
              </Item>
              <Item style={{height:40,marginTop:5,borderBottomWidth:0}} stackedLabel>
                <Label>Código Postal <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:15}} defaultValue={userEcodeli.strCodigoPostal}/>
              </Item>
              <Item style={{marginTop:5,borderBottomWidth:0}} stackedLabel>
                <Label>Nivel Académico <Icon style={{fontSize:15}} type='FontAwesome5' name='lock'/></Label>
                <Picker mode='dropdown'
                iosHeader='Nivel Academico'
                iosIcon={<Icon name='arrow-down' />} selectedValue={userEcodeli.strNivelAcademico} style={{height:30, width:210, alignSelf:'flex-start'}}>
                {nivelesEscolaridad.map((escolaridad,index) => {
                  return <Picker.Item key={index} label={escolaridad.strNivelAcademico} value={escolaridad.strNivelAcademico} />
                })}
              </Picker>
              </Item>
              <Item style={{height:40,marginTop:5,borderBottomWidth:0}} stackedLabel>
                <Label>Contacto de Emergencia <Icon style={{fontSize:15}} type='FontAwesome5' name='edit'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:15}} defaultValue={userEcodeli.strNombreContacto}/>
              </Item>
              <Item style={{height:40,marginTop:5,borderBottomWidth:0}} stackedLabel>
                <Label>Teléfono de Emergencia <Icon style={{fontSize:15}} type='FontAwesome5' name='edit'/></Label>
                <Input style={{fontSize:20,alignSelf:'flex-start', marginTop:15}} defaultValue={userEcodeli.strTelefonoContacto}/>
              </Item>
              <Item style={{borderBottomWidth:0}} stackedLabel>
                <Label>Número del Seguro Social <Icon style={{fontSize:15}} type='FontAwesome5' name='eye'/></Label>
                <Text style={{fontSize:20,alignSelf:'flex-start', marginTop:15}}>{userEcodeli.strNSS}</Text>
              </Item>
            </Form>
          </Content>
    )
};