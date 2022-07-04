import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {useRecoilState} from 'recoil';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryZoomContainer,
} from 'victory-native';
import {statePieProduct} from '../../atoms/atom';
import {data, dataWithYear, lineCustom, lineCustom1} from '../data';
import HinhThucThanhToan from './component/hinhthucthanhtoan';
import SumProduct from './component/tongsanphambanra';
import SumMoney from './component/tongtien';

const screenWidth = Dimensions.get('window').width;
export const chartConfig = {
  backgroundGradientFrom: '#FFFFFF',
  // backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#FFFFFF',
  backgroundColor: '#FFFFFF',
  // backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: true, // optional
};

const BaoCao = () => {
  const [zoomDomain, setZoomDomain] = useState();
  const [stateChartLine1, setStateChartLine1] = useState<boolean>(false);

  const animatedSize = useRef(new Animated.Value(0)).current;
  const [stateView1, setStateView1] = useState<boolean>(true);
  const [textStateChart, setTextStateChart] = useState('Thời gian');
  const [styleChart, setStyleChart] = useState<boolean>(true);
  const [stateProductPay, setStateProduct] = useRecoilState(statePieProduct);

  const changeSizeView = () => {
    Animated.timing(animatedSize, {
      toValue: stateView1 ? 80 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const textMonth = 'hiển thị theo tháng';
  const textYear = 'hiển thị theo năm';
  const textDefault = 'Thời gian';
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topView}>
          <View style={{position: 'absolute', right: 0, top: 0}}>
            <Image source={require('../../assets/images/layout_an1.png')} />
          </View>
          <View style={styles.viewnumber3}>
            <Text style={{fontSize: 11, color: '#FFFFFF'}}>3</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 56,
              marginStart: 16,
              alignItems: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                right: 0,
                height: 40,
                width: 40,
                backgroundColor: '#FFFFFF',
                opacity: 0.2,
                marginRight: 16,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
            <View
              style={{
                position: 'absolute',
                right: 0,
                marginRight: 28.75,
              }}>
              <Image
                source={require('../../assets/icon/icon_bell1.png')}
                style={{tintColor: '#FFFFFF'}}
              />
            </View>
            <Image
              source={require('../../assets/images/img_avatar.png')}
              style={{
                height: 48,
                width: 48,
                borderRadius: 16,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                marginStart: 16,
                justifyContent: 'space-around',
              }}>
              <Text
                style={{fontSize: 14, color: 'white', fontFamily: 'Roboto'}}>
                Xin chào
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontStyle: 'normal',
                  fontWeight: '700',
                }}>
                Nguyễn Hoàng Nam
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 25,
            }}>
            {viewInTop('Tổng máy', 1.2467, '', '#4080FF')}
            {viewInTop('Hoạt động', 1.2433, '(30%)', '#33CC5E')}
            {viewInTop('Đã ngừng', 1.2467, '(30%)', '#FF4D54')}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            changeSizeView();
            setStateView1(!stateView1);
          }}
          style={{
            marginHorizontal: 16,
            marginTop: 30,
            height: 33,
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              marginStart: 22,
              fontWeight: '700',
              color: '#2D3540',
            }}>
            {textStateChart}
          </Text>
          <Image
            source={require('../../assets/icon/icon_calendar2.png')}
            style={{
              tintColor: 'black',
              height: 14,
              width: 14,
              marginRight: 10.5,
            }}
          />
        </TouchableOpacity>
        <Animated.View
          style={{
            height: animatedSize,
            backgroundColor: '#FFA07A',
            borderRadius: 10,
            marginHorizontal: 16,
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              setStateView1(!stateView1);
              setTextStateChart(textMonth);
              changeSizeView();
              setStateProduct(false);
              setStateChartLine1(false);
            }}>
            <Text style={{fontSize: 13, color: '#000000'}}>{textMonth}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => {
              setStateView1(!stateView1);
              setTextStateChart(textYear);
              changeSizeView();
              setStateProduct(true);
              setStateChartLine1(true);
            }}>
            <Text style={{fontSize: 13, color: '#000000'}}>{textYear}</Text>
          </TouchableOpacity>
        </Animated.View>
        <View
          style={{
            marginTop: 21,
            marginHorizontal: 16,
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            height: 343,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#1890FF',
              marginTop: 14.5,
              marginStart: 9,
            }}>
            Thống kế doanh thu bán hàng
          </Text>
          <View
            style={{
              width: 211,
              backgroundColor: '#1890FF',
              height: 2,
              marginStart: 9,
            }}></View>
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <LineChart
              isAnimated
              width={280}
              height={200}
              maxValue={100}
              data={stateChartLine1 == false ? lineCustom : lineCustom1}
              dataPointsColor="#FFFFFF"
              // customDataPoint={customDataPoint}
              showVerticalLines={false}
              horizontalRulesStyle={false}
              color="#4A90E2"
              yAxisColor="#FFFFFF"
              yAxisThickness={0}
              initialSpacing={7}
              noOfSections={4}
              spacing={68}
              rulesType="solid"
              showStripOnPress={true}
            />
            <View
              style={{
                right: 20,
                position: 'absolute',
                height: 250,
                width: 1.5,
                opacity: 0.5,
                backgroundColor: '#000000',
              }}></View>
          </View>
        </View>
        <SumMoney />
        <SumProduct />
        <HinhThucThanhToan />
        <View style={{position: 'absolute', top: 138, left: 0}}>
          <Image source={require('../../assets/images/layout_an2.png')} />
        </View>
      </ScrollView>
    </View>
  );
};

const viewInTop = (
  title: string,
  value: number,
  percent: string,
  color: string,
) => {
  return (
    <View
      style={{
        height: 72,
        width: 106,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
      }}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: '400',
          fontStyle: 'normal',
          marginStart: 10,
          marginTop: 10.5,
          height: 20,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          fontStyle: 'normal',
          marginStart: 10,
          marginTop: 4,
          color: color,
          height: 27,
        }}>
        {value}
      </Text>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          marginTop: 39,
          marginLeft: 63,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            fontStyle: 'normal',
            color: '#808999',
          }}>
          {percent}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FB',
    justifyContent: 'center',
  },
  topView: {
    height: 214,
    backgroundColor: '#00DAD4',
  },
  viewnumber3: {
    height: 19,
    width: 19,
    borderRadius: 9.5,
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
    marginTop: 54,
  },
});
export default BaoCao;
