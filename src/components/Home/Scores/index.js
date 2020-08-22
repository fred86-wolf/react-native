import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Icon, Card} from 'native-base';
import { ProgressChart } from 'react-native-chart-kit';
import styles from './style';
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
        <View style={styles.boxMainScore}>
            <Card style={styles.boxScore}>
                <Text style={styles.textScore}>200 Puntos</Text>
                <Icon style={styles.iconScore} name='trophy' />
            </Card>
            <Card style={styles.boxGraph}>
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