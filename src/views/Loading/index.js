import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';
import { Container, Content, Grid } from 'native-base';
import { ACCESS_TOKEN } from '../../consts';
import { getItem } from '../../utils/storage';
import Overload from '../../components/Overload';
import styles from './style';

export default function Loading ({ navigation }){
  useEffect(() => {
    redirect();
  });

  const redirect = async () => {
    const token = await getItem(ACCESS_TOKEN);
    let route = 'Login';
    if (token) {
      route = 'Home';
    }
    navigation.navigate(route);
  };

  return (
    <Container>
      <StatusBar backgroundColor='#113f67'/>
      <Content contentContainerStyle={styles.content}>
        <Grid style={styles.grid}>
          <Overload/>
        </Grid>
      </Content>
    </Container>
  );
};