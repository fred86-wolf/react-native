import React from 'react'
import {Container, Content} from 'native-base';
import { Avatar,Tooltip, Text } from 'react-native-elements';
import MyHeader from '../../components/Header';

export default function EmployeeDetail(){
    return(
        <Container>
            <MyHeader />
            <Content>
                <Tooltip popover={<Text>Info here</Text>}>
                    <Text>Press me</Text>
                </Tooltip>
            </Content>
        </Container>
    )
}