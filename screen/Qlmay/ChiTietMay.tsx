import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {RootStackParams} from '../../App';
import {Product, stateMay} from '../data';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParams, 'ChiTietMay'>;
const ChiTietMay = ({route}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  //top view in chi tiet may
  const ViewTop = (
    id: string,
    name: string,
    percent: number,
    turnover: string,
    state: Array<stateMay>,
    location: string,
    quantity: number,
    totalProduct: number,
    listProduct: Array<Product>,
  ) => {
    return (
      <View style={styles.viewTop}>
        <Image
          style={{position: 'absolute', right: 0, top: 0}}
          source={require('../../assets/images/layout_an1.png')}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M4.51099 11.989L19.501 11.989"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M10.515 17.9761L4.49896 11.9991L10.515 6.02207"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        <View style={{marginTop: 18, flexDirection: 'row'}}>
          <Text style={styles.textId}>{id}</Text>
          <FlatList
            style={{marginStart: 18}}
            data={state}
            horizontal
            renderItem={({item, index}) => (
              <View
                style={{
                  height: 21,
                  width: 55,
                  backgroundColor: item.color,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}>
                <Text
                  style={{color: '#FBFBFB', fontSize: 12, fontWeight: '400'}}>
                  {item.state}
                </Text>
              </View>
            )}
          />
        </View>
        <Text style={styles.textName}>{name}</Text>
        <View style={{marginTop: 8, flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/icon/icon_money.png')} />
            <Text style={styles.textTurnover}>{turnover}</Text>
          </View>
          <View
            style={{
              marginStart: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.928711 5.89425V6.03758C0.928711 8.92175 4.79966 13.2634 6.35969 14.8967C6.70333 15.2567 7.29695 15.2567 7.64058 14.8967C9.20062 13.2634 13.0716 8.92175 13.0716 6.03758V5.89425C13.0716 2.73091 10.3534 0.166748 7.00014 0.166748C3.64685 0.166748 0.928711 2.73091 0.928711 5.89425ZM7 7.30961C6.01339 7.30961 5.21429 6.51782 5.21429 5.54026V5.50752C5.21429 4.52996 6.01339 3.73818 7 3.73818C7.98661 3.73818 8.78571 4.52996 8.78571 5.50752V5.54026C8.78571 6.51782 7.98661 7.30961 7 7.30961Z"
                fill="white"
              />
            </Svg>
            <Text style={styles.textLocation}>{location}</Text>
          </View>
        </View>
        <View style={{width: '100%', marginTop: 14}}>
          <Progress.Bar
            animated
            progress={percent * 0.01}
            width={350}
            color={'#4080FF'}
            borderColor={'#FFFFFF'}
            unfilledColor={'#FFFFFF'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 4,
          }}>
          <Text style={styles.textProgessBar}>
            {quantity}/{totalProduct} sản phẩm
          </Text>
          <Text style={styles.textProgessBar}>{percent}%</Text>
        </View>
      </View>
    );
  };

  //view item product
  const ItemProduct: React.FC<Product> = ({
    id,
    name,
    image,
    price,
    quantity,
  }) => {
    return (
      <View
        style={{
          height: 84,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderColor: 'grey',
          paddingHorizontal: 18,
        }}>
        <Image source={image} />
        <View
          style={{
            height: '100%',
            marginStart: 12,
            marginTop: 11,
          }}>
          <Text
            style={{
              color: '#00DAD4',
              fontSize: 13,
              fontWeight: '500',
              height: 20,
            }}>
            {id}
          </Text>
          <Text
            style={{
              color: '#1A2948',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 4,
              height: 23,
            }}>
            {name}
          </Text>
        </View>
        <View style={{position: 'absolute', right: 18}}>
          <View
            style={{
              height: 20,
              width: 32,
              borderRadius: 4,
              backgroundColor: '#00BAB5',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 13, color: '#FFFFFF', fontWeight: '500'}}>
              {quantity}
            </Text>
          </View>
          <Text
            style={{
              marginTop: 6,
              color: '#FF7F08',
              fontSize: 14,
              fontWeight: '500',
              height: 21,
            }}>
            {price}
          </Text>
        </View>
      </View>
    );
  };

  //return chi tiet may
  return (
    <View style={styles.container}>
      {ViewTop(
        route.params.id,
        route.params.name,
        route.params.percent,
        route.params.turnover,
        route.params.state,
        route.params.location,
        route.params.quantity,
        route.params.totalProduct,
        route.params.listProduct,
      )}
      <Text style={styles.textTitleListProduct}>DANH SÁCH SẢN PHẨM</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FFFFFF', marginBottom: 66}}
        data={route.params.listProduct}
        renderItem={({item, index}) => (
          <ItemProduct
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.viewBottom}>
        {viewButton('Nạp hàng')}
        {viewButton('Rút tiền')}
      </View>
    </View>
  );
};

const viewButton = (text: string) => {
  return (
    <View
      style={{
        height: 44,
        width: 166,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: text == 'Nạp hàng' ? '#33CC5E' : '#00DAD4',
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: '500'}}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTop: {
    backgroundColor: '#00DAD4',
    width: '100%',
    paddingHorizontal: 18,
    paddingTop: 30,
    paddingBottom: 15,
  },
  textId: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    height: 21,
    color: '#FFFFFF',
  },
  textName: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    height: 27,
    color: '#FFFFFF',
    marginTop: 8,
  },
  textTurnover: {
    color: '#FFDF5C',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    height: 21,
    marginStart: 3,
  },
  textLocation: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    height: 21,
    color: '#FFFFFF',
    marginStart: 3,
  },
  textProgessBar: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    height: 18,
    color: '#FFFFFF',
  },
  textTitleListProduct: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    height: 18,
    color: '#4D5971',
    marginStart: 18,
    marginVertical: 13,
  },
  viewBottom: {
    height: 66,
    borderTopWidth: 0.5,
    borderColor: 'grey',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
});

export default ChiTietMay;
