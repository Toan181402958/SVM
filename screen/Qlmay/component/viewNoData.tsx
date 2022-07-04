import React from 'react';
import {Image, Text, View} from 'react-native';
const ViewNoData = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
      }}>
      <Image source={require('../../../assets/images/icon_noData.png')} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#4D5971',
          marginTop: 10,
        }}>
        Không tìm thấy kết quả
      </Text>
    </View>
  );
};
export default ViewNoData;
