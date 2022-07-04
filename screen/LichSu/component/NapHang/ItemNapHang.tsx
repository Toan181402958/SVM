import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {RootStackParams} from '../../../../App';
import {ProductNapHang} from '../../../../models/modelHistory';

type Props = NativeStackScreenProps<RootStackParams, 'ItemLichSuNapHang'>;
const ItemLichSuNapHang = ({route}: Props) => {
  const imageItem = route.params.image;
  const idItem = route.params.id;
  const nameItem = route.params.name;
  const timeItem = route.params.time;
  const nameStaffItem = route.params.nameStaff;
  const locationItem = route.params.location;
  const listProductItem = route.params.listProduct;
  console.log('list', listProductItem);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const ViewTop = () => {
    return (
      <View style={styles.viewTop}>
        <TouchableOpacity
          style={styles.viewTouchable}
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
        <Text style={styles.textTitle}>Lịch sử nạp hàng</Text>
      </View>
    );
  };

  const ViewInfoLSNapHang = () => {
    return (
      <View style={styles.viewInfo}>
        <View style={{flexDirection: 'row'}}>
          <Image source={imageItem} />
          <View style={{marginStart: 12}}>
            <Text style={styles.textId}>{idItem}</Text>
            <Text style={styles.textName}>{nameItem}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <Text style={styles.textState}>Thời gian: </Text>
            <Text style={styles.textState}>Nội dung: </Text>
            <Text style={styles.textState}>Nhân viên rút: </Text>
            <Text style={styles.textState}>Địa điểm: </Text>
          </View>
          <View style={{marginStart: 40}}>
            <Text style={styles.textState}>{timeItem}</Text>
            <Text style={styles.textState}>Tiếp hàng</Text>
            <Text style={styles.textState}>{nameStaffItem}</Text>
            <Text style={styles.textState}>{locationItem}</Text>
          </View>
        </View>
      </View>
    );
  };

  const ViewList = () => {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.textTitleList}>THÔNG TIN NẠP HÀNG</Text>
        <FlatList
          style={{backgroundColor: '#FFFFFF'}}
          data={listProductItem}
          renderItem={({item, index}) => (
            <ItemProduct
              id={item.id}
              name={item.name}
              image={item.image}
              amount={item.amount}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const ItemProduct: React.FC<ProductNapHang> = ({id, name, image, amount}) => {
    return (
      <View
        style={{
          height: 84,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderColor: 'grey',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <View
          style={{flexDirection: 'row', height: '100%', alignItems: 'center'}}>
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
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#33CC5E'}}>+{amount}</Text>
          <Text> Sản phẩm</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ViewTop />
      <ViewInfoLSNapHang />
      <View style={{height: 2, width: '100%', backgroundColor: '#EEF0F7'}} />
      <ViewList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F8FB',
    flex: 1,
  },
  viewTop: {
    backgroundColor: '#00BAB5',
    height: 60,
    justifyContent: 'center',
    paddingStart: 16,
    alignItems: 'center',
  },
  viewTouchable: {
    position: 'absolute',
    height: '100%',
    left: 16,
    justifyContent: 'center',
  },
  textTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
    height: 27,
  },
  viewInfo: {
    height: 233,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FFFFFF',
  },
  textId: {
    color: '#00DAD4',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    height: 20,
  },
  textName: {
    color: '#1A2948',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    height: 23,
    marginTop: 2,
  },
  textState: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#1A2948',
    height: 21,
    marginBottom: 12,
  },
  textTitleList: {
    fontWeight: '700',
    fontSize: 12,
    color: '#4D5971',
    height: 18,
    marginVertical: 13,
    marginHorizontal: 16,
  },
});

export default ItemLichSuNapHang;
