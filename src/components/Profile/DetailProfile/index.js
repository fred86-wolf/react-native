import React,{useState} from 'react';
import {View,TouchableOpacity, Dimensions} from 'react-native';
import {Text, Icon, Label, Item, Picker, Input} from 'native-base';
import {WHITE,COURIOUS_BLUE,PRUSSIAN_BLUE} from '../../../consts';
const { width,height } = Dimensions.get('window');
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default function DetailProfile(props){
  const {userEco, arrayEdoCivil, arrayEscolaridad} = props;
  console.log(props);
  const [openOne, setOpenOne] = useState(false);
  const sectionOne = () => {
    setOpenOne(!openOne);
  }
    return(
        <View>
            <TouchableOpacity onPress={sectionOne} style={{ backgroundColor: WHITE, marginVertical: 10, padding: 15, borderRadius: 10, elevation: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', elevation: 3 }}>
              <Icon style={{ color: COURIOUS_BLUE, marginLeft: 10, marginRight: 20 }} type='FontAwesome5' name='user' />
              <Text style={{ color: PRUSSIAN_BLUE, fontSize: 20, fontWeight: 'bold' }}> DETALLE PERSONAL</Text>
            </View>
          </TouchableOpacity>
          <View style={{ height: openOne ? null : 0, overflow: 'hidden', borderRadius: 10, backgroundColor: WHITE, elevation:2 }}>
            <View style={{padding:10, height:height/0.5, marginBottom:10}}>
            <Text style={{ fontSize: 12, marginLeft: 5, alignSelf: 'center' }}>Todos los Campos Obligatorios *</Text>
              <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label style={{ alignSelf: 'flex-start' }}>* Número de Empleado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{userEco.strUsuario}</Text>
              </Item>
              <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label style={{ alignSelf: 'flex-start' }}>* Nombre Completo <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{`${userEco.strNombre} ${userEco.strApellidoPaterno} ${userEco.strApellidoMaterno}`}</Text>
              </Item>
              <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label style={{ alignSelf: 'flex-start' }}>* Fecha de Nacimiento <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                {userEco.strFechaNacimiento ? <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{moment(userEco.strFechaNacimiento).format('LL')}</Text> : <DatePicker defaultDate={new Date()} disabled={false} placeHolderText='Selecciona tu Fecha de Nacimiento' />}
              </Item>
              <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label style={{ alignSelf: 'flex-start' }}>* Estado Civil <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Picker mode='dropdown'
                  iosHeader='Estado Civil'
                  iosIcon={<Icon name='arrow-down' />} selectedValue={userEco.strEstadoCivil}
                  onValueChange={(itemValue) => setStrEstadoCivil(itemValue)} style={{ height: 30, width: 150, alignSelf: 'flex-start' }}>
                  {arrayEdoCivil.map((edocivil, index) => { return <Picker.Item key={index} label={edocivil.strConcepto} value={edocivil.strConcepto} /> })}
                </Picker>
              </Item>
              <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Departamento <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{`${userEco.strCentroCostos} ${userEco.strDescripcionCC}`}</Text>
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Estado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strEstado ? userEco.strEstado  : ''} onChange={(e) => onChange(e, 'strEstado')} />
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Población <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strPoblacion} onChange={(e) => onChange(e, 'strPoblacion')} />
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Dirección <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.strDireccion} onChange={(e) => onChange(e, 'strDireccion')} />
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Número Exterior  <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strDireccionNumero} onChange={(e) => onChange(e, 'strDireccionNumero')} />
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Número Interior <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strDireccionNumeroInt} onChange={(e) => onChange(e, 'strDireccionNumeroInt')} />
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Teléfono <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strTelefono} onChange={(e) => onChange(e, 'strTelefono')} />
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Código Postal <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strCodigoPostal} onChange={(e) => onChange(e, 'strCodigoPostal')} />
              </Item>
              <Item style={{ marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Nivel Académico <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                <Picker mode='dropdown'
                  iosHeader='Nivel Academico'
                  iosIcon={<Icon name='arrow-down' />} selectedValue={userEco.strNivelAcademico}
                  onValueChange={(itemValue) => setStrNivelAcademico(itemValue)} style={{ height: 30, width: 210, alignSelf: 'flex-start' }}>
                  {arrayEscolaridad.map((escolaridad, index) => {
                    return <Picker.Item key={index} label={escolaridad.strConcepto} value={escolaridad.strConcepto} />
                  })}
                </Picker>
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Contacto de Emergencia <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strNombreContacto} onChange={(e) => onChange(e, 'strNombreContacto')} />
              </Item>
              <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                <Label>* Teléfono de Emergencia <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
                <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }} defaultValue={userEco.strTelefonoContacto} onChange={(e) => onChange(e, 'strTelefonoContacto')} />
              </Item>
              <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                <Label>* Número del Seguro Social <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 15 }}>{userEco.strNSS}</Text>
              </Item>
            </View>
          </View>
        </View>
    )
}