import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextPropTypes,
  View,
} from 'react-native';
import {RootStackParams} from '../../../App';
import {ProductDelivery} from '../../../datas/dataWork';
import ViewTabbar from './ViewTabbar';

type Props = NativeStackScreenProps<RootStackParams, 'ChiTietLoi_CongViec'>;
const ChiTietLoi_CongViec = ({route}: Props) => {
  const type = route.params.type;
  const ViewName = () => {
    return (
      <View style={styles.ViewName}>
        <Image source={route.params.image} />
        <View style={{marginStart: 12}}>
          <Text style={styles.textId}>{route.params.id}</Text>
          <Text style={styles.textName}>{route.params.name}</Text>
        </View>
      </View>
    );
  };
  const ViewState = () => {
    return (
      <View style={styles.viewState}>
        <View>
          <Text style={styles.textState}>
            {type == 1 ? 'Thời gian lỗi' : 'Thời gian'}:
          </Text>
          <Text style={styles.textState}>
            {type == 1 ? 'Tình trạng' : 'Nội dung'}:
          </Text>
          <Text style={styles.textState}>
            {type == 1
              ? 'Nhân viên sửa'
              : type == 2
              ? 'Nhân viên rút'
              : 'Nhân viên tiếp'}
            :
          </Text>
          <Text style={styles.textState}>Địa điểm:</Text>
        </View>
        <View style={{marginStart: 30}}>
          <Text style={styles.textState}>{route.params.time}</Text>
          {type == 1 ? (
            <View
              style={{
                backgroundColor: '#FF4D54',
                width: 65,
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 15,
              }}>
              <Text
                style={{
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: 12,
                  color: '#FFFFFF',
                }}>
                {route.params.state}
              </Text>
            </View>
          ) : (
            <Text style={styles.textState}>{route.params.state}</Text>
          )}

          <Text style={styles.textState}>{route.params.nameStaff}</Text>
          <Text style={styles.textState}>{route.params.location}</Text>
        </View>
      </View>
    );
  };

  const ViewInfo = () => {
    return (
      <View style={styles.viewInfo}>
        <Text style={styles.textTitleInfo}>
          {type == 1
            ? 'THÔNG TIN LỖI'
            : type == 2
            ? 'THÔNG TIN RÚT TIỀN'
            : 'THÔNG TIN NẠP HÀNG'}
        </Text>
        {type == 3 ? (
          <View style={{backgroundColor: '#FFFFFF', width: '100%'}}>
            {viewListProduct()}
          </View>
        ) : (
          <View>
            {viewInput(
              'Tên lỗi',
              'Nhập số tiền đã rút',
              'Nhập tên lỗi',
              'Nhập tiền đã rút',
            )}
            {viewInput('Mô tả lỗi', 'Mô tả', 'Nhập mô tả về lỗi', 'Nhập mô tả')}
          </View>
        )}
      </View>
    );
  };

  const viewInput = (
    titleError: string,
    titleMoney: string,
    placeholderError: string,
    placeholderMoney: string,
  ) => {
    return (
      <View style={{marginTop: 16, width: '100%', paddingHorizontal: 16}}>
        <Text style={styles.text1Info}>
          {type == 1 ? titleError : type == 2 ? titleMoney : null}
        </Text>
        {type == 1 ? (
          <TextInput
            placeholder={placeholderError}
            style={[styles.textInputInfo, {height: 40}]}
          />
        ) : type == 2 ? (
          <View
            style={{
              width: '100%',
              height: titleMoney == 'Mô tả' ? 132 : 40,
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder={placeholderMoney}
              multiline={titleMoney == 'Mô tả' ? true : false}
              style={[
                styles.textInputInfo,
                {
                  height: titleMoney == 'Mô tả' ? 132 : 40,
                  textAlignVertical: 'top',
                },
              ]}
            />
            {titleMoney != 'Mô tả' ? (
              <View style={{position: 'absolute', right: 10}}>
                <Text
                  style={{color: '#99A0AD', textDecorationLine: 'underline'}}>
                  đ
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}
      </View>
    );
  };

  const viewListProduct = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        data={route.params.listProduct}
        renderItem={({item, index}) => (
          <ItemListProduct id={item.id} name={item.name} image={item.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const ItemListProduct: React.FC<ProductDelivery> = ({id, name, image}) => {
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
        <TextInput style={styles.textInputAmount} placeholder={'Số lượng'} />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#EEF0F7', flex: 1}}>
      <ViewTabbar title={type == 1 ? 'Chi tiết lỗi' : 'Chi tiết công việc'} />
      <ViewName />
      <ViewState />
      <ViewInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewName: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
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
  viewState: {
    paddingHorizontal: 16,
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#F5F8FB',
  },
  textState: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#1A2948',
    height: 21,
    marginBottom: 12,
  },
  viewInfo: {
    marginTop: 4,
    height: '100%',
    backgroundColor: '#F5F8FB',
    paddingTop: 16,
    flex: 1,
  },
  textTitleInfo: {
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#4D5971',
    fontSize: 12,
    height: 18,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  text1Info: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    height: 21,
    color: '#1A2948',
  },
  textInputInfo: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    backgroundColor: '#FFFFFF',
    paddingStart: 10,
    marginTop: 2,
  },
  heightInput40: {
    height: 40,
  },
  heightInput132: {
    height: 132,
  },
  textInputAmount: {
    height: 40,
    width: 100,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    paddingStart: 8,
  },
});

export default ChiTietLoi_CongViec;
