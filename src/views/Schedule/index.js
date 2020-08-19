import React, { lazy, Suspense } from 'react';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Body, Right,H3 } from 'native-base';
import Overload from '../../components/Overload';
const MyHeader = lazy(() => import('../../components/Header'));

export default function Schedule({ route }) {
    console.log(route.params);
    return (
        <Container>
            <Suspense fallback={<Overload/>}>
                <MyHeader />
            </Suspense>
            <Content>
                <List>
                    <H3 style={{alignSelf:'center', fontWeight:'bold'}}>Hoy</H3>
                    <ListItem itemDivider>
                        <Text>A</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Aaron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ali Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>C</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Cli Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>D</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dradley Horowitz</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>F</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Faron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Fli Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>G</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Gradley Horowitz</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>H</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Haron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Hli Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>I</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Iradley Horowitz</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    )
}