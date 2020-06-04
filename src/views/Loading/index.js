import React, { useEffect } from 'react';
import { Spinner, Container, Content, Grid } from 'native-base';
import { ACCESS_TOKEN, USER_INFO, USER_ECODELI } from '../../consts';
import { getItem } from '../../utils/storage';
import { postLogin } from '../../redux/actions/login';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';

export default function Loading ({ navigation }){
  useEffect(() => {
    redirect();
  });

  const redirect = async () => {
    const token = await getItem(ACCESS_TOKEN);
    const strUserEcodeli = await getItem(USER_ECODELI);
    let route = 'Login';
    // console.log(token);
    if (token && strUserEcodeli) {
      route = 'Home';
    }
    navigation.navigate(route);
  };

  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Grid style={styles.grid}>
          <Spinner color='blue' />
        </Grid>
      </Content>
    </Container>
  );
};