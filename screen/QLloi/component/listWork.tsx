import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useRecoilState} from 'recoil';
import {RootStackParams} from '../../../App';
import {listWorkRecoil} from '../../../atoms/atom';
import {dataQLloi, ErrorWork} from '../../../datas/dataWork';

const ListWork = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [listWork, setListWork] = useRecoilState(listWorkRecoil);

  const ItemList: React.FC<ErrorWork> = ({
    id,
    name,
    image,
    location,
    time,
    state,
    nameStaff,
    imageStaff,
    type,
    listProduct,
  }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChiTietLoi_CongViec', {
            id: id,
            name: name,
            image: image,
            location: location,
            time: time,
            state: state,
            nameStaff: nameStaff,
            imageStaff: imageStaff,
            type: type,
            listProduct: listProduct,
          });
        }}
        style={styles.itemList}>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} />
          <View style={styles.viewinfo}>
            <Text style={styles.textId}>{id}</Text>
            <Text style={styles.textName}>{name}</Text>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <Path
                  d="M6.51332 2.9964C9.82905 1.62274 13.6301 3.1979 15.0038 6.51363C16.3774 9.82935 14.8023 13.6304 11.4865 15.0041C8.17082 16.3777 4.36977 14.8026 2.9961 11.4868C1.62316 8.17113 3.1976 4.37007 6.51332 2.9964"
                  stroke="#4D5971"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M8.79614 6.10059V9.45964L11.4366 11.0695"
                  stroke="#4D5971"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
              <Text style={styles.textTime}>{time}</Text>
            </View>
            <View style={{marginTop: 8, flexDirection: 'row'}}>
              <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.22217 7.43123V7.2932C3.22217 4.24703 5.80884 1.77783 8.99995 1.77783V1.77783C12.191 1.77783 14.7777 4.24703 14.7777 7.2932V7.43123C14.7777 10.2086 11.094 14.3894 9.60942 15.9623C9.2824 16.3089 8.71749 16.3089 8.39047 15.9623C6.90589 14.3894 3.22217 10.2086 3.22217 7.43123Z"
                  stroke="#4D5971"
                  stroke-width="1.4468"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M7.55554 6.84684C7.55554 7.63758 8.20193 8.27805 8.99999 8.27805V8.27805C9.79804 8.27805 10.4444 7.63758 10.4444 6.84684V6.82037C10.4444 6.02962 9.79804 5.38916 8.99999 5.38916V5.38916C8.20193 5.38916 7.55554 6.02962 7.55554 6.82037"
                  stroke="#4D5971"
                  stroke-width="1.4468"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
              <Text style={styles.textTime}>{location}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: '100%',
            justifyContent: 'flex-end',
            paddingBottom: 20,
          }}>
          <Image source={imageStaff} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listWork}
        renderItem={({item, index}) => (
          <ItemList
            id={item.id}
            name={item.name}
            image={item.image}
            location={item.location}
            time={item.time}
            state={item.state}
            nameStaff={item.nameStaff}
            imageStaff={item.imageStaff}
            type={item.type}
            listProduct={item.listProduct}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingBottom: 56,
  },
  itemList: {
    width: '100%',
    height: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  viewinfo: {
    marginStart: 12,
    marginTop: 1,
  },
  textId: {
    color: '#00BAB5',
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
    marginTop: 3,
  },
  textTime: {
    color: '#1A2948',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    height: 20,
    marginStart: 3,
  },
});

export default ListWork;
