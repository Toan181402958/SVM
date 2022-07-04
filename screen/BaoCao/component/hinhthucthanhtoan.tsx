import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useRecoilState} from 'recoil';
import {VictoryLabel, VictoryPie} from 'victory-native';
import {statePieProduct} from '../../../atoms/atom';
import {
  dataPieMomo,
  dataPieMomoY,
  dataPieTheNganHang,
  dataPieTheNganHangY,
  dataPieTienMat,
  dataPieTienMatY,
} from '../../data';
// import Rectangle from '../../../assets/images/Rectangle1.svg';

const HinhThucThanhToan = () => {
  const [select, setSelect] = useState(1);
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
          Báo cáo theo hình thức thanh toán
        </Text>
        <View
          style={{
            width: 250,
            backgroundColor: '#1890FF',
            height: 2,
            marginStart: 9,
          }}></View>
      </View>
      <VictoryPie
        animate={{duration: 1000}}
        standalone={true}
        height={250}
        width={250}
        colorScale={['#F5A623', '#4A90E2', '#FF4C54']}
        data={
          stateProductPay
            ? select == 1
              ? dataPieTienMatY
              : select == 2
              ? dataPieMomoY
              : dataPieTheNganHangY
            : select == 1
            ? dataPieTienMat
            : select == 2
            ? dataPieMomo
            : dataPieTheNganHang
        }
        style={{labels: {fill: 'blue', fillOpacity: 0}}}
      />
      <View style={{position: 'absolute', bottom: 70}}>
        {viewItem('#FF4C54', 'Khu vực Hà Nội')}
        {viewItem('#F5A623', 'Khu vực Nam Định')}
        {viewItem('#4A90E2', 'Khu vực Thái Bình')}
      </View>
      <View
        style={{
          width: '70%',
          height: 40,
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          position: 'absolute',
          alignItems: 'center',
          paddingHorizontal: 10,
          bottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          shadowColor: '#50C7C7',
          shadowOffset: {
            height: 1,
            width: 1,
          },
          shadowRadius: 4,
          shadowOpacity: 0.7,
          elevation: 2,
        }}>
        <TouchableOpacity
          onPress={() => {
            setSelect(1);
          }}>
          <Text
            style={{color: select == 1 ? 'red' : '#000000', fontWeight: '700'}}>
            Tiền mặt
          </Text>
        </TouchableOpacity>
        <View style={{height: 20, width: 1, backgroundColor: 'grey'}}></View>
        <TouchableOpacity
          onPress={() => {
            setSelect(2);
          }}>
          <Text
            style={{color: select == 2 ? 'red' : '#000000', fontWeight: '700'}}>
            Momo
          </Text>
        </TouchableOpacity>
        <View style={{height: 20, width: 1, backgroundColor: 'grey'}}></View>
        <TouchableOpacity
          onPress={() => {
            setSelect(3);
          }}>
          <Text
            style={{color: select == 3 ? 'red' : '#000000', fontWeight: '700'}}>
            Thẻ ngân hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const viewItem = (color: string, name: string) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 7,
        alignItems: 'center',
      }}>
      <Svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <Path d="M0 0L16 12H15.6279H0V0Z" fill={color} />
      </Svg>
      <Text style={{fontSize: 14, color: color, marginStart: 5}}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 407,
    backgroundColor: '#FFFFFF',
    marginTop: 18,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default HinhThucThanhToan;
