import React from 'react';
import {Form,Input,Text,Left,Spinner, Icon,Content,Badge, DatePicker,Body,Row,Button,Right, ListItem} from 'native-base';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export default function ProfileBenefits({userEcodeli}){
  if (!userEcodeli) {
    return <Spinner color='blue' />
  }
    return(
        <Content>
            <Form style={{marginTop:10}}>
            <Text style={{ fontSize: 12, marginLeft: 5, alignSelf:'center' }}>Todos los Campos Obligatorios *</Text>
            <ListItem  itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                  <Text>1</Text>
                </Badge>
              </Left>
              <Body>
                {userEcodeli.strBeneficiario ? <Text style={{ fontSize: 18 }}>{userEcodeli.strBeneficiario}</Text> : <Input style={{ fontSize: 18 }} placeholder='Nombre del Beneficiario'/>}
                <Row>
                  {userEcodeli.strParentesco ? <Text style={{ fontSize: 13 }}>{userEcodeli.strParentesco}</Text> : <Input style={{ fontSize: 13 }} placeholder='Parentesco'/>}
                  {userEcodeli.strBeneficiarioNacimiento ? <Text style={{ fontSize: 13 }}>{moment(userEcodeli.strBeneficiarioNacimiento).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize:13, marginTop:6 }} placeHolderTextStyle={{ fontSize: 12, marginTop:7, marginRight:1}} placeHolderText='Fecha de Nacimiento'/> }
                </Row>
              </Body>
              <Right>
                <Button style={{ marginTop: 10 }} transparent>
                  <Icon style={{ color: 'red' }} name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem  itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                  <Text>2</Text>
                </Badge>
              </Left>
              <Body>
                {userEcodeli.strBeneficiario2 ? <Text style={{ fontSize: 18 }}>{userEcodeli.strBeneficiario2}</Text> : <Input style={{ fontSize: 18 }}  placeholder='Nombre del Beneficiario'/>}
                <Row>
                  {userEcodeli.strParentesco2 ? <Text style={{ fontSize: 13 }}>{userEcodeli.strParentesco2}</Text> : <Input style={{ fontSize: 13 }}  placeholder='Parentesco'/>}
                  {userEcodeli.strBeneficiarioNacimiento2 ? <Text style={{ fontSize: 13 }}>{moment(userEcodeli.strBeneficiarioNacimiento2).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize:13, marginTop:6 }} placeHolderTextStyle={{ fontSize: 12, marginTop:7, marginRight:1}} placeHolderText='Fecha de Nacimiento'/> }
                </Row>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={{ color: 'red' }} name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem  itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                  <Text>3</Text>
                </Badge>
              </Left>
              <Body>
                {userEcodeli.strBeneficiario3 ? <Text style={{ fontSize: 18 }}>{userEcodeli.strBeneficiario3}</Text> : <Input style={{ fontSize: 18 }} placeholder='Nombre del Beneficiario' onChange={(e) => onChange(e,'strBeneficiario3')}/>}
                <Row>
                  {userEcodeli.strParentesco3 ? <Text style={{ fontSize: 13 }}>{userEcodeli.strParentesco3}</Text> : <Input style={{ fontSize: 13 }} placeholder='Parentesco' onChange={(e) => onChange(e,'strParentesco3')}/>}
                  {userEcodeli.strBeneficiario3 ? <Text style={{ fontSize: 13 }}>{moment(userEcodeli.strBeneficiarioNacimiento3).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize:13, marginTop:6 }} placeHolderTextStyle={{ fontSize: 12, marginTop:7, marginRight:1}} placeHolderText='Fecha de Nacimiento'/>}
                </Row>
              </Body>
              <Right>
                <Button style={{ marginTop: 10 }} transparent>
                  <Icon style={{ color: 'red' }} name='trash' />
                </Button>
              </Right>
            </ListItem>
            <ListItem  itemDivider last thumbnail>
              <Left>
                <Badge style={{ backgroundColor: '#E5E5E8', marginTop: 10 }}>
                  <Text>4</Text>
                </Badge>
              </Left>
              <Body>
                {userEcodeli.strBeneficiario4 ? <Text style={{ fontSize: 18 }}>{userEcodeli.strBeneficiario4}</Text> : <Input style={{ fontSize: 18 }} placeholder='Nombre del Beneficiario' onChange={(e) => onChange(e,'strBeneficiario4')}/>}
                <Row>
                  {userEcodeli.strParentesco4 ? <Text style={{ fontSize: 13 }}>{userEcodeli.strParentesco4}</Text> : <Input style={{ fontSize: 13 }} placeholder='Parentesco' onChange={(e) => onChange(e,'strParentesco4')}/>}
                  {userEcodeli.strBeneficiario4 ? <Text style={{ fontSize: 13 }}>{moment(userEcodeli.strBeneficiarioNacimiento4).format('LL')}</Text> : <DatePicker defaultDate={new Date()} animationType={'fade'} androidMode={'default'} textStyle={{ fontSize:13, marginTop:6 }} placeHolderTextStyle={{ fontSize: 12, marginTop:7, marginRight:1}} placeHolderText='Fecha de Nacimiento'/>}
                </Row>
              </Body>
              <Right>
                <Button style={{ marginTop: 10 }} transparent>
                  <Icon style={{ color: 'red' }} name='trash' />
                </Button>
              </Right>
            </ListItem>
            </Form>
        </Content>
    )
}