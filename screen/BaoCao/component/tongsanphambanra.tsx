import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {useRecoilState} from 'recoil';
import {VictoryPie} from 'victory-native';
import {statePieProduct} from '../../../atoms/atom';
import {dataProduct, dataProduct1, dataProductY} from '../../data';
import {chartConfig} from '../BaoCao';

const SumProduct = () => {
  const [stateProductPay, setStateProduct] = useRecoilState(statePieProduct);
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#1890FF',
            marginTop: 14.5,
            marginStart: 9,
          }}>
          Tổng số sản phẩm bán ra
        </Text>
        <View
          style={{
            width: 180,
            backgroundColor: '#1890FF',
            height: 2,
            marginStart: 9,
          }}></View>
      </View>
      <VictoryPie
        animate={{duration: 1000}}
        height={250}
        width={250}
        colorScale={['#F5A623', '#03BD5B', '#4A90E2', '#FF4C54']}
        data={stateProductPay ? dataProductY : dataProduct}
        style={{labels: {fill: 'blue', fillOpacity: 0}}}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 80,
          justifyContent: 'space-between',
          paddingHorizontal: 27,
        }}>
        <View>
          {viewItem('31.350', 'Tổng sản phẩm', '#000000')}
          {viewItem('', '', '')}
        </View>
        <View>
          {viewItem('16.280', 'Đồ ăn', '#F5A623')}
          {viewItem('15.070', 'Đồ chơi', '#4A90E2')}
        </View>
        <View>
          {viewItem('16.280', 'Đồ uống', '#03BD5B')}
          {viewItem('15.070', 'Đồ ăn vặt', '#FF4C54')}
        </View>
      </View>
    </View>
  );
};

const viewItem = (amount: string, name: string, color: string) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text style={{fontSize: 16, fontWeight: '700', color: color}}>
        {amount}
      </Text>
      <Text style={{fontSize: 14, fontWeight: '400', color: color}}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 387,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 18,
    alignItems: 'center',
  },
});

export default SumProduct;
