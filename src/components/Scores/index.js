import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Icon, Card} from 'native-base';
import { ProgressChart } from 'react-native-chart-kit';
import {WHITE,COURIOUS_BLUE} from '../../consts';
const { width,height } = Dimensions.get('window');
const data = {data: [0.8]};
const chartConfig = {
    backgroundGradientFrom: "#efefef",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#efefef",
    color: (opacity = 1) => `rgba(254, 186, 0, ${opacity})`,
    strokeWidth: 1,
    barPercentage: 0.2,
    useShadowColorFromDataset: false,
    barRadius: 2,
  };
export default function Scores(){
    return(
        <View style={{ flexDirection: 'row'}}>
            <Card style={{flex:3,height:height/3,borderRadius:10, justifyContent:'center',alignItems:'center', backgroundColor:COURIOUS_BLUE}}>
                <Text style={{fontSize: 25,fontWeight:'bold',color: WHITE}}>200 Puntos</Text>
                <Icon style={{color: WHITE,fontSize:height/4.5}} name='trophy' />
            </Card>
            <Card style={{flex:3,marginLeft:10,height:height/3,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:WHITE }}>
            <ProgressChart
                data={data}
                width={width/2.3}
                height={height/3.2}
                strokeWidth={15}
                radius={width/9}
                chartConfig={chartConfig}
                hideLegend={false}
                style={{
                    borderRadius:10
                  }}
              />
            </Card>
        </View>
    )
}