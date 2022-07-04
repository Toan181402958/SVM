import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useRecoilState} from 'recoil';
import {VictoryLabel, VictoryPie} from 'victory-native';
import {RootStackParams} from '../../App';
import {
  listLocationRecoil,
  listMachineRecoil,
  modalVisibleRecoil,
  stateSearchRecoil,
  textInputLocation,
  textInputRecoil,
} from '../../atoms/atom';
import {dataLocation, listMayBanHang, maybanhang} from '../data';
import SearchLocation from './component/searchLocation';
import ViewNoData from './component/viewNoData';

const QLmay = () => {
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleRecoil);
  const [textInput, setTextInput] = useRecoilState(textInputRecoil);
  const [textinputLocation, setTextinputLocation] =
    useRecoilState(textInputLocation);
  const [listMay, setListMay] = useRecoilState(listMachineRecoil);
  const [listLocation, setListLocation] = useRecoilState(listLocationRecoil);
  const [stateSearch, setStateSearch] = useRecoilState(stateSearchRecoil);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const ItemList: React.FC<maybanhang> = ({
    id,
    name,
    percent,
    turnover,
    state,
    location,
    quantity,
    totalProduct,
    listProduct,
  }) => {
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          paddingBottom: 20,
          flexDirection: 'row',
          borderBottomWidth: 0.7,
          borderColor: 'grey',
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('chi tiet may screen');
            navigation.navigate('ChiTietMay', {
              id: id,
              name: name,
              percent: percent,
              turnover: turnover,
              state: state,
              location: location,
              quantity: quantity,
              totalProduct: totalProduct,
              listProduct: listProduct,
            });
          }}>
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              height: '100%',
              marginTop: 15,
            }}>
            <Svg viewBox="10 0 400 400" width={80} height={80}>
              <VictoryPie
                animate
                colorScale={['#33CC5E', '#C7F2D3']}
                standalone={false}
                data={[
                  {x: 1, y: percent},
                  {x: 2, y: 100 - percent},
                ]}
                innerRadius={120}
                labelRadius={0}
                style={{labels: {fontSize: 20, fill: 'white'}}}
              />
              <VictoryLabel
                textAnchor="middle"
                style={{fontSize: 80, fill: '#33CC5E'}}
                x={200}
                y={200}
                text={percent + '%'}
              />
            </Svg>
          </View>
          <View style={{marginLeft: 80}}>
            <Text style={{fontSize: 13, fontWeight: '500', color: '#00DAD4'}}>
              {id}
            </Text>
            <Text
              style={{
                color: '#1A2948',
                height: 23,
                fontSize: 16,
                fontWeight: '700',
              }}>
              {name}
            </Text>
            <View
              style={{flexDirection: 'row', marginBottom: 10, marginTop: 4}}>
              <Text>Doanh thu: </Text>
              <Text style={{color: '#FF7F08'}}>{turnover}</Text>
            </View>
            <FlatList
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
        </TouchableOpacity>
      </View>
    );
  };

  const onChangeTextInput = (input: string) => {
    let dataNew = listMayBanHang;
    let searchData = dataNew.filter(item => {
      return item.location.toLowerCase().includes(input.toLowerCase());
    });
    // setTextinputLocation('Vị trí');
    setListMay(searchData);
  };
  const onChangeTextInputLocation = (input: string) => {
    let dataNew = dataLocation;
    let searchData = dataNew.filter(item => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
    setListLocation(searchData);
    setTextInput(input);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#00DAD4',
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            fontStyle: 'normal',
            color: '#FFFFFF',
          }}>
          Quản lý máy
        </Text>
      </View>
      <View
        style={{
          height: 68,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          marginTop: 12,
        }}>
        <TextInput
          onChangeText={input => {
            // setStateSearch(false);
            onChangeTextInput(input);
          }}
          style={styles.textInputMay}
          placeholder="Nhập máy cần tìm kiếm"
        />
        <TouchableOpacity
          onPress={() => {
            setStateSearch(!stateSearch);
            // changeSizeViewSearch();
            setModalVisible(!modalVisible);
          }}
          style={styles.viewSearchLocation}>
          <Text>{textinputLocation}</Text>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <Path
              d="M4 6L8 10L12 6"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            height: 44,
            justifyContent: 'center',
            marginLeft: 4,
          }}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M15.9497 6.05025C18.6834 8.78392 18.6834 13.2161 15.9497 15.9497C13.2161 18.6834 8.78392 18.6834 6.05025 15.9497C3.31658 13.2161 3.31658 8.78392 6.05025 6.05025C8.78392 3.31658 13.2161 3.31658 15.9497 6.05025"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M20 20L16 16"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </View>
      </View>
      {listMay.length != 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listMay}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          renderItem={({item, index}) => (
            <ItemList
              id={item.id}
              name={item.name}
              percent={item.percent}
              turnover={item.turnover}
              state={item.state}
              location={item.location}
              quantity={item.quantity}
              totalProduct={item.totalProduct}
              listProduct={item.listProduct}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%',
          }}>
          <Image source={require('../../assets/images/icon_noData.png')} />
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
      )}
      <SearchLocation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#1A2948',
    height: 27,
    marginTop: 11,
  },
  textInput: {
    height: 44,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,

    paddingHorizontal: 36,
  },
  textInputMay: {
    width: 220,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingLeft: 28,
    height: 44,
    borderWidth: 1,
    borderColor: '#E6E8EB',
  },
  viewSearchLocation: {
    width: 110,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6E8EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  viewItemList: {
    borderTopWidth: 0.5,
    height: 56,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItem: {
    marginLeft: 10,
    fontWeight: '500',
    height: 21,
    color: '#1A2948',
    fontSize: 14,
    fontStyle: 'normal',
  },
});
export default QLmay;
