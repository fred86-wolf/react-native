import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Badge, Text, Icon, Input, DatePicker } from 'native-base';
import { WHITE, COURIOUS_BLUE, PRUSSIAN_BLUE, WHITE_SMOKE } from '../../../consts';
const { width, height } = Dimensions.get('window');
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default function BenefitsProfile(props) {
    const { userEco } = props;
    const [openTwo, setOpenTwo] = useState(false);
    const sectionTwo = () => {
        setOpenTwo(!openTwo);
    }
    return (
        <View>
            <TouchableOpacity onPress={sectionTwo} style={{ backgroundColor: WHITE, marginVertical: 10, padding: 15, borderRadius: 10, elevation: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ color: COURIOUS_BLUE, marginLeft: 10, marginRight: 20 }} type='FontAwesome5' name='users' />
                    <Text style={{ color: PRUSSIAN_BLUE, fontSize: 20, fontWeight: 'bold' }}> BENEFICIARIOS</Text>
                </View>
            </TouchableOpacity>
            <View style={{ height: openTwo ? null : 0, overflow: 'hidden', borderRadius: 10, backgroundColor: WHITE, elevation: 5 }}>
                <View style={{ padding: 5, height: height / 1.5, marginBottom:10}}>
                    <Text style={{ fontSize: 12, marginLeft: 5, alignSelf: 'center' }}>Todos los Campos Obligatorios *</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 5, padding: 10, backgroundColor: WHITE_SMOKE, borderRadius: 10 }}>
                        <Badge style={{ backgroundColor: PRUSSIAN_BLUE, marginTop: 10 }}>
                            <Text>1</Text>
                        </Badge>
                        <View style={{ flex: 4, marginHorizontal: 5, borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                            {userEco.strBeneficiario ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{userEco.strBeneficiario}</Text> : <TextInput placeholder='* Nombre del Beneficiario' onChange={(e) => onChange(e, 'strBeneficiario')} />}
                            <View style={{flexDirection:'row', marginTop:5}}>
                            {userEco.strParentesco ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{userEco.strParentesco}</Text> : <TextInput style={{ fontSize: 13 }} placeholder='* Parentesco' onChange={(e) => onChange(e, 'strParentesco')} />}
                            {userEco.strBeneficiarioNacimiento ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{moment(userEco.strBeneficiarioNacimiento).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize: 13, marginTop: 6 }} placeHolderTextStyle={{ fontSize: 12, marginTop: 7, marginRight: 1 }} placeHolderText='* Fecha de Nacimiento' />}
                            </View>
                        </View>
                        <View style={{ flex: 1, marginRight: 5, borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <Icon style={{ color: 'red' }} type='FontAwesome5' name='trash-alt' />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 5, padding: 10, backgroundColor: WHITE_SMOKE, borderRadius: 10 }}>
                        <Badge style={{ backgroundColor: PRUSSIAN_BLUE, marginTop: 10 }}>
                            <Text>2</Text>
                        </Badge>
                        <View style={{ flex: 4, marginHorizontal: 5, borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                            {userEco.strBeneficiario2 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{userEco.strBeneficiario2}</Text> : <TextInput style={{ fontSize: 18 }} placeholder='* Nombre del Beneficiario' onChange={(e) => onChange(e, 'strBeneficiario')} />}
                            <View style={{flexDirection:'row', marginTop:5}}>
                            {userEco.strParentesco2 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{userEco.strParentesco2}</Text> : <TextInput style={{ fontSize: 13 }} placeholder='* Parentesco' onChange={(e) => onChange(e, 'strParentesco')} />}
                            {userEco.strBeneficiarioNacimiento2 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{moment(userEco.strBeneficiarioNacimiento2).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize: 13, marginTop: 6 }} placeHolderTextStyle={{ fontSize: 12, marginTop: 7, marginRight: 1 }} placeHolderText='* Fecha de Nacimiento' />}
                            </View>
                        </View>
                        <View style={{ flex: 1, marginRight: 5, borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <Icon style={{ color: 'red' }} type='FontAwesome5' name='trash-alt' />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 5, padding: 10, backgroundColor: WHITE_SMOKE, borderRadius: 10 }}>
                        <Badge style={{ backgroundColor: PRUSSIAN_BLUE, marginTop: 10 }}>
                            <Text>3</Text>
                        </Badge>
                        <View style={{ flex: 4, marginHorizontal: 5, borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                            {userEco.strBeneficiario3 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{userEco.strBeneficiario3}</Text> : <TextInput style={{ fontSize: 13 }} placeholder='* Nombre del Beneficiario' onChange={(e) => onChange(e, 'strBeneficiario')} />}
                            <View style={{flexDirection:'row', marginTop:5}}>
                            {userEco.strParentesco3 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{userEco.strParentesco3}</Text> : <TextInput style={{ fontSize: 13 }} placeholder='* Parentesco' onChange={(e) => onChange(e, 'strParentesco')} />}
                            {userEco.strBeneficiarioNacimiento3 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{moment(userEco.strBeneficiarioNacimiento3).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize: 13, marginTop: 6 }} placeHolderTextStyle={{ fontSize: 12, marginTop: 7, marginRight: 1 }} placeHolderText='* Fecha de Nacimiento' />}
                            </View>
                        </View>
                        <View style={{ flex: 1, marginRight: 5, borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <Icon style={{ color: 'red' }} type='FontAwesome5' name='trash-alt' />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 5, padding: 10, backgroundColor: WHITE_SMOKE, borderRadius: 10 }}>
                        <Badge style={{ backgroundColor: PRUSSIAN_BLUE, marginTop: 10 }}>
                            <Text>4</Text>
                        </Badge>
                        <View style={{ flex: 4, marginHorizontal: 5, borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                            {userEco.strBeneficiario4 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{userEco.strBeneficiario4}</Text> : <TextInput style={{ fontSize: 13 }} placeholder='* Nombre del Beneficiario' onChange={(e) => onChange(e, 'strBeneficiario')} />}
                            <View style={{flexDirection:'row', marginTop:5}}>
                            {userEco.strParentesco4 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{userEco.strParentesco4}</Text> : <TextInput style={{ fontSize: 13 }} placeholder='* Parentesco' onChange={(e) => onChange(e, 'strParentesco')} />}
                            {userEco.strBeneficiarioNacimiento4 ? <Text style={{ color: '#000000', marginHorizontal: 5 }}>{moment(userEco.strBeneficiarioNacimiento4).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize: 13, marginTop: 6 }} placeHolderTextStyle={{ fontSize: 12, marginTop: 7, marginRight: 1 }} placeHolderText='* Fecha de Nacimiento' />}
                            </View>
                        </View>
                        <View style={{ flex: 1, marginRight: 5, borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignSelf: 'center' }}>
                                <Icon style={{ color: 'red' }} type='FontAwesome5' name='trash-alt' />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}