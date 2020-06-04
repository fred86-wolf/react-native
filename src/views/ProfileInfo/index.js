import React, { useState, useEffect } from 'react';
import styles from './style';
import MyHeader from '../../components/Header';
import genericStyles from '../../styles';
import {USER_ECODELI, USER_INFO} from '../../consts';
import {ListViewer} from '../../components/ListSideBar';
import {getItem} from '../../utils/storage';
import { Container,Content,View, Thumbnail,Form,Drawer,Spinner, Text, Picker,Textarea, Input, Icon, ListItem,Left, Body,Row, Badge, Right, Button} from 'native-base';

export default function ProfileInfo(){
    // closeDrawer = () => { this.drawer._root.close()};
    // openDrawer = () => { this.drawer._root.open() };
    const [userEco, setUserEco] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false)
  useEffect(() => {
    if (!userInfo && !userEco) {
        loadUserInfo();
      }
  });
  const loadUserInfo = async () =>{
    let userEco = await getItem(USER_ECODELI);
    let userInfo = await getItem(USER_INFO);
    userEco = JSON.parse(userEco);
    userInfo = JSON.parse(userInfo);
    setUserInfo(userInfo);
    setUserEco(userEco);
    console.log(userEco);
  }
  const sectionOne = () => {
    setOpenOne(!openOne);
  }
  const sectionTwo = () => {
    setOpenTwo(!openTwo);
  }
  const sectionThree = () => {
    setOpenThree(!openThree);
  }
  if (!userEco ) {
    return <Spinner color='blue' />;
  }
    return (
        <Container>
        <MyHeader/>
        {/* <Drawer ref={(ref) => { this.drawer = ref; }} content={<ListViewer/>} onClose={() => this.closeDrawer()}> */}
        <Content padder>
            <Thumbnail large style={styles.profileImage} source={{ uri:userInfo && userInfo.photoUrl }}/>
            <Button activeOpacity={0.8} onPress={sectionOne} style={[styles.Btn,genericStyles.ecoGeneral]}>
                <Icon name='person'/>
                <Text>Detalle Personal</Text>
                <Text>1/10</Text>
            </Button>
            <View style={{ height: openOne ? null : 0, overflow: 'hidden', borderWidth:0.5, backgroundColor:'#f4f4f4'}}>
              <Text style={{fontSize:12}}>Todos los Campos Obligatorios *</Text>
              <Form>
                <Text style={genericStyles.textProfileInfo}>{userEco.strUsuario}</Text>
                <Text style={genericStyles.textProfileInfo}>{userEco.strNombre + ' ' + ' ' + userEco.strApellidoPaterno + ' ' + userEco.strApellidoMaterno}</Text>
                <Text style={genericStyles.textProfileInfo}>{userEco.strFechaNacimiento.substring(0,11)}</Text>
                <Picker mode='dropdown'
                iosHeader='Estado Civil'
                iosIcon={<Icon name='arrow-down' />}
                style={styles.dropdownGeneric}
                selectedValue={userEco.strEstadoCivil} 
                >
                <Picker.Item label={userEco.strEstadoCivil} value={userEco.strEstadoCivil} />
                </Picker>
                <Text style={genericStyles.textProfileInfo}>{userEco.strCentroCostos + ' ' + userEco.strDescripcionCC}</Text>
                <Text style={genericStyles.textProfileInfo}>{userEco.strEstado}</Text>
                <Text style={genericStyles.textProfileInfo}>{userEco.strPoblacion} </Text>
                <Text style={genericStyles.textProfileInfo}>{userEco.strDireccion +' '+ userEco.strDireccionNumero + ' ' + userEco.strDireccionNumeroInt}</Text>
                <Input style={genericStyles.textProfileInfo} value={userEco.strTelefono} />
                <Input style={genericStyles.textProfileInfo} value={userEco.intCodigoPostal.toString()} />
                <Picker mode='dropdown'
                iosHeader='Nivel Academico'
                iosIcon={<Icon name='arrow-down' />} selectedValue={userEco.strNivelAcademico} style={styles.dropdownGeneric}>
                    <Picker.Item label={userEco.strNivelAcademico} value={userEco.strNivelAcademico} />
                </Picker>
                <Text style={genericStyles.textProfileInfo}>{userEco.strNSS}</Text>
              </Form>
            </View>
            <Button activeOpacity={0.8} onPress={sectionTwo} style={[styles.Btn,genericStyles.ecoGeneral]}>
              <Icon name='bookmarks' />
              <Text >Beneficiarios</Text>
              <Text >1/10</Text>
            </Button>
            <View style={{ height: openTwo ? null : 0, overflow: 'hidden', borderWidth:0.5}}>
            <ListItem style={styles.listBeneficiaries} itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8',marginTop:10}}>
                  <Text>1</Text>
                </Badge>
              </Left>
              <Body>
                  <Text style={{fontSize:20}}>Beneficiario</Text>
                <Row>
                  <Text style={{fontSize:15}}>Parentesco</Text>
                  <Text style={{fontSize:15}}>Nacimiento</Text>
                </Row>
              </Body>
              <Right>
                <Button style={{marginTop:10}} transparent>
                  <Icon style={{color: 'red'}} name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem style={styles.listBeneficiaries} itemDivider last thumbnail>
              <Left>
                <Badge style={{backgroundColor: '#E5E5E8',marginTop:10}}>
                  <Text>1</Text>
                </Badge>
              </Left>
              <Body>
                  <Text style={{fontSize:20}}>Beneficiario</Text>
                <Row>
                  <Text style={{fontSize:15}}>Parentesco</Text>
                  <Text style={{fontSize:15}}>Nacimiento</Text>
                </Row>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={{color: 'red'}} name='trash' />
                </Button>
              </Right>
            </ListItem>
            </View>
            <Button onPress={sectionThree} style={[styles.Btn,genericStyles.ecoGeneral]}>
              <Icon name='medkit'/>
              <Text >Salud Personal</Text>
              <Text >1/10</Text>
            </Button>
            <View style={{ height: openThree ? null : 0, overflow: 'hidden', borderWidth:0.5, backgroundColor:'#f4f4f4'}}>
            <Form>
              <Textarea style={styles.frmHealth} rowSpan={6} bordered placeholder='Enfermedades'>
                {userEco.strEnfermedad}
              </Textarea>
              <Textarea style={styles.frmHealth} rowSpan={6} bordered placeholder='Alergias'> 
                {userEco.strAlergias}
              </Textarea>
              <Row style={{marginTop:30}}>
                <Picker
                mode='dropdown'
                iosHeader='Tipo de Sangre'
                iosIcon={<Icon name='arrow-down' />}
                style={{width: 50, height: 20}}
                selectedValue={userEco.strTipoSangre}
              >
                  <Picker.Item label='O-' value="key0" />
                  <Picker.Item label='O+' value="key1" />
                  <Picker.Item label='A-' value="key2" />
                  <Picker.Item label='A+' value="key3" />
                  <Picker.Item label='B-' value="key4" />
                  <Picker.Item label='B+' value="key5" />
                  <Picker.Item label='AB-' value="key6" />
                  <Picker.Item label='AB+' value="key7" />
                </Picker>
                <Picker
                mode="dropdown"
                iosHeader='Talla Camisa'
                iosIcon={<Icon name="arrow-down" />}
                style={{width: 50, height: 20}}
                selectedValue={userEco.strCamisa}
              >
                  <Picker.Item label='CH' value="key0" />
                  <Picker.Item label='M' value="key1" />
                  <Picker.Item label='G' value="key2" />
                  <Picker.Item label='XG' value="key3" />
                  <Picker.Item label='XXG' value="key4" />
                </Picker>
                
              </Row>
              <Row >
                <Picker
                mode="dropdown"
                iosHeader='Talla Pantalón'
                iosIcon={<Icon name="arrow-down" />}
                style={{width: 50, height: 20}}
                selectedValue={userEco.strTPantalon}
              >
                  <Picker.Item label='24' value='key0' />
                  <Picker.Item label='26' value='key1' />
                  <Picker.Item label='28' value='key2' />
                  <Picker.Item label='30' value='key3' />
                  <Picker.Item label='32' value='key4' />
                  <Picker.Item label='34' value='key5' />
                  <Picker.Item label='36' value='key6' />
                  <Picker.Item label='38' value='key7' />
                  <Picker.Item label='40' value='key8' />
                  <Picker.Item label='42' value='key9' />
                  <Picker.Item label='44' value='key10' />
                  <Picker.Item label='46' value='key11' />
                  <Picker.Item label='48' value='key12' />
                  <Picker.Item label='50' value='key13' />
                </Picker>
                <Picker
                mode="dropdown"
                iosHeader='Calzado'
                iosIcon={<Icon name="arrow-down" />}
                style={{width: 50, height: 20}}
                selectedValue={userEco.strTCalzado}
              >
                  <Picker.Item label='20' value='key0' />
                  <Picker.Item label='21' value='key1' />
                  <Picker.Item label='22' value='key2' />
                  <Picker.Item label='23' value='key3' />
                  <Picker.Item label='24' value='key4' />
                  <Picker.Item label='25' value='key5' />
                  <Picker.Item label='26' value='key6' />
                  <Picker.Item label='27' value='key7' />
                  <Picker.Item label='28' value='key8' />
                  <Picker.Item label='29' value='key9' />
                  <Picker.Item label='30' value='ke10' />
                  <Picker.Item label='31' value='key11' />
                  <Picker.Item label='32' value='key12' />
                </Picker>
              </Row>
              <Row>
                <Input value={userEco.dblEstatura.toString()} />
                <Input value={userEco.dblPeso.toString()}/>
              </Row>
            </Form>
            </View>
              <Button success style={styles.saveBtn} rounded>
                <Text>
                  Guardar
                </Text>
              </Button>
        </Content>
        {/* </Drawer> */}
        </Container>
    );
};

