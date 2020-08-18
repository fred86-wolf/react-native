import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions} from 'react-native';
import { Item, Textarea, Label, Picker, Icon, Input, Text } from 'native-base';
import { COURIOUS_BLUE, PRUSSIAN_BLUE, WHITE } from '../../../consts';
const { width,height } = Dimensions.get('window');
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default function HealthProfile(props) {
    const { userEco, arrayCamisas,arrayPantalones, arrayCalzados } = props;
    const [openThree, setOpenThree] = useState(false);
    const sectionThree = () => {
        setOpenThree(!openThree);
    }
    return (
        <View>
            <TouchableOpacity onPress={sectionThree} style={{ backgroundColor: WHITE, marginVertical: 10, padding: 15, borderRadius: 10, elevation: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ color: COURIOUS_BLUE, marginLeft: 10, marginRight: 20 }} type='FontAwesome5' name='address-card' />
                    <Text style={{ color: PRUSSIAN_BLUE, fontSize: 20, fontWeight: 'bold' }}> SALUD PERSONAL</Text>
                </View>
            </TouchableOpacity>
            <View style={{ height: openThree ? null : 0, overflow: 'hidden', borderRadius: 10, backgroundColor: WHITE, elevation: 5 }}>
                <View style={{padding:10, height:height/0.8, marginBottom:10}}>
                    <Text style={{ fontSize: 12, marginLeft: 5, alignSelf: 'center' }}>Todos los Campos Obligatorios *</Text>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>* Enfermedades <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                        <Textarea style={{ alignSelf: 'flex-start', marginTop: 10 }} rowSpan={5} defaultValue={userEco.strEnfermedad} onChangeText={(e) => onChange(e, 'strEnfermedad')} bordered placeholder='Separa cada Enfermedad/Alergias por comas'>
                        </Textarea>
                    </Item>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>* Alergias <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='lock' /></Label>
                        <Textarea style={{ alignSelf: 'flex-start', marginTop: 10 }} defaultValue={userEco.strAlergias} onChangeText={(e) => onChange(e, 'strAlergias')} rowSpan={5} bordered placeholder='Separa cada Enfermedad/Alergias por comas'>
                        </Textarea>
                    </Item>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>* Tipo de Sangre <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='eye' /></Label>
                        <Text style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }}>{userEco.strTipoSangre}</Text>
                    </Item>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>* Talla de Camisa <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
                        <Picker mode='dropdown' iosHeader='Talla Camisa' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf: 'flex-start' }}
                        selectedValue={userEco.strCamisa} onValueChange={(itemValue) => setStrCamisa(itemValue)}>
                            {arrayCamisas.map((camisa, index) => {
                                return <Picker.Item key={index} label={camisa.strConcepto} value={camisa.strConcepto} />
                            })}
                        </Picker>
                    </Item>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>* Talla de Pantalón <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
                        <Picker mode='dropdown' iosHeader='Talla Pantalón' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf: 'flex-start' }}
                        selectedValue={userEco.strTPantalon} onValueChange={(itemValue) => setStrTPantalon(itemValue)}>
                            {arrayPantalones.map((pantalon, index) => {
                                return <Picker.Item key={index} label={pantalon.strConcepto} value={pantalon.strConcepto} />
                                })}
                        </Picker>
                    </Item>
                    <Item style={{ borderBottomWidth: 0 }} stackedLabel>
                        <Label>* Talla de Calzado <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
                        <Picker mode='dropdown' iosHeader='Talla Calzado' iosIcon={<Icon name='arrow-down' />} style={{ width: 100, height: 20, alignSelf: 'flex-start' }}
                        selectedValue={userEco.strTCalzado} onValueChange={(itemValue) => setStrTCalzado(itemValue)}>
                        {arrayCalzados.map((pantalon, index) => {
                            return <Picker.Item key={index} label={pantalon.strConcepto} value={pantalon.strConcepto} />
                            })}
                        </Picker>
                </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label>* Estatura <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
                        <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.dblEstatura.toString() || 0.00} keyboardType='numeric' onChange={(e) => onChange(e, 'dblEstatura')} />
                    </Item>
                    <Item style={{ height: 40, marginTop: 5, borderBottomWidth: 0 }} stackedLabel>
                        <Label>* Peso <Icon style={{ fontSize: 15 }} type='FontAwesome5' name='edit' /></Label>
                        <Input style={{ fontSize: 20, alignSelf: 'flex-start', marginTop: 5 }} defaultValue={userEco.dblPeso.toString() || 0.00} keyboardType='numeric' onChange={(e) => onChange(e, 'dblPeso')} />
                    </Item>
                </View>
            </View>
        </View>
    )
}