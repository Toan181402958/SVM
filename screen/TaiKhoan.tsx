import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import * as V from 'victory';
import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryZoomContainer,
} from 'victory-native';

const TaiKhoan = () => {
  const sliceColor = ['#F5A623', '#03BD5B', '#4A90E2', '#FF4C54'];
  const series = [9, 8, 2, 4, 6];

  const data = [
    {x: 1, y: 23},
    {x: 2, y: 64},
    {x: 3, y: 23},
    {x: 4, y: 76},
    {x: 5, y: 65},
    {x: 6, y: 16},
    {x: 7, y: 47},
  ];
  return (
    <View style={styles.container}>
      <VictoryChart
        domain={{y: [0, 100]}}
        containerComponent={
          <VictoryZoomContainer zoomDomain={{x: [1, 5], y: [0, 100]}} />
        }>
        <VictoryLine data={data} />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TaiKhoan;
