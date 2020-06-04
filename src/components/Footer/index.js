import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
export default function MyFooter(){
  const navigation = useNavigation();
    return (
        <Footer>
          <FooterTab style={{backgroundColor:'#113f67'}}>
            <Button onPress={() => navigation.navigate('ProfileDetail')}>
              <Icon name='person'/>
              <Text>Perfil</Text>
            </Button>
            <Button onPress={() => navigation.navigate('ProfileBenefits')}>
              <Icon name='bookmarks' />
              <Text>Beneficiarios</Text>
            </Button>
            <Button onPress={() => navigation.navigate('ProfileHealth')}>
              <Icon name='medkit'/>
              <Text>Salud</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
};