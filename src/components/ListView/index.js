import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {Text, Icon} from 'native-base';
import styles from './style';

export default function ListView(props){
    const {arrayCoordinators, navigation, arrayCC, arrayEmployees} = props;
    console.log(props)
   return(
    <SafeAreaView style={{marginTop:10}}>
    {arrayCoordinators && arrayCoordinators.map((coordinator,index) => {
        return(
    <TouchableOpacity key={index+1} style={styles.boxItemList} onPress={() => navigation.navigate('CostCenter', coordinator)}>
        <View style={styles.badgeMaker}>
            <Text style={styles.textBadge}>{index+1}</Text>
        </View>
        <View style={styles.boxBody}>
            <Text style={styles.textBody}>{coordinator.strCoordinadorOperativo}</Text>
        </View>
        <View style={styles.boxRight}>
            <TouchableOpacity style={styles.nextBtn}>
                <Icon style={styles.arrowIcon} type='FontAwesome5' name='arrow-alt-circle-right' />
            </TouchableOpacity>
        </View>
    </TouchableOpacity> )
    })}
    {arrayCC && arrayCC.map((cc,index) => {
        return(
    <TouchableOpacity key={index+1} style={styles.boxItemList} onPress={() => navigation.navigate('ListEmployee', cc)}>
        <View style={styles.badgeMaker}>
            <Text style={styles.textBadge}>{cc.strCentroCostos}</Text>
        </View>
        <View style={styles.boxBody}>
            <Text style={styles.textBody}>{cc.strDescripcionCC}</Text>
        </View>
        <View style={styles.boxRight}>
            <TouchableOpacity style={styles.nextBtn}>
                <Icon style={styles.arrowIcon} type='FontAwesome5' name='arrow-alt-circle-right' />
            </TouchableOpacity>
        </View>
    </TouchableOpacity> )
    })}
    {arrayEmployees && arrayEmployees.map((employee,index) => {
        return(
    <TouchableOpacity key={index+1} style={styles.boxItemList} onPress={() => navigation.navigate('EmployeeDetail', employee)}>
        <View style={styles.badgeMaker}>
            <Text style={styles.textBadge}>{index+1}</Text>
        </View>
        <View style={styles.boxBody}>
            <Text style={styles.textBody}>{`${employee.strApellidoPaterno} ${employee.strApellidoMaterno} ${employee.strNombre}`}</Text>
            <Text style={styles.textSchedule}>{employee.strTurno}</Text>
        </View>
        <View style={styles.boxRight}>
            <TouchableOpacity style={styles.nextBtn}>
                <Icon style={styles.arrowIcon} type='FontAwesome5' name='arrow-alt-circle-right' />
            </TouchableOpacity>
        </View>
    </TouchableOpacity> )
    })}
</SafeAreaView>
   )
}