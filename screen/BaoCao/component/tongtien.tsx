import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SumMoney = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          marginTop: 33,
          marginStart: 22,
          height: 19,
          color: '#2D3540',
        }}>
        Tổng doanh thu
      </Text>
      <View style={{alignItems: 'center', marginTop: 9}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '700',
            height: 36,
            color: '#2D3540',
          }}>
          500.000đ
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        {roomView('Khu vực Hà Nội', 20, 1, false)}
        {roomView('Khu vực Sài Gòn', 20, 20.57, true)}
        {roomView('Khu vực miền Trung', 20, 20.57, true)}
      </View>
      <View
        style={{
          position: 'absolute',
          marginTop: 71,
          right: 0,
          marginRight: 30,
          flexDirection: 'row',
        }}>
        <Image source={require('../../../assets/icon/icon_up.png')} />
        <Text style={{marginStart: 12, color: '#08A781', fontSize: 13}}>
          20.57%
        </Text>
      </View>
    </View>
  );
};

const roomView = (
  nameRoom: string,
  value: number,
  percent: number,
  checkPercent: boolean,
) => {
  if (checkPercent == true) {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 22,
          marginTop: 12,
        }}>
        <Text style={{fontSize: 14, fontWeight: '400'}}>{nameRoom}</Text>
        <View style={{position: 'absolute', right: 100}}>
          <Text style={{fontSize: 14, fontWeight: '400'}}>{value}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../../assets/icon/icon_up.png')} />
          <Text style={{marginStart: 12, fontSize: 13}}>{percent}%</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 22,
          marginTop: 12,
        }}>
        <Text>{nameRoom}</Text>
        <View style={{position: 'absolute', right: 100}}>
          <Text>{value}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginStart: 12}}>.</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: 233,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
  },
});

export default SumMoney;
