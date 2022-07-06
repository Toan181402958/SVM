import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {dataHisttoryNapHang} from '../../../../datas/dataHistory';
import {NapHangACtion, ProductNapHang} from '../../../../models/modelHistory';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../../App';

const NapHang = () => {
  const [stateDataHistory, setStateDataHistory] = useState('Thời gian');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setStateDataHistory(moment(date).format('l'));
    hideDatePicker();
  };

  const ItemList: React.FC<NapHangACtion> = ({
    id,
    time,
    name,
    nameStaff,
    image,
    listProduct,
    location,
  }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ItemLichSuNapHang', {
            id: id,
            time: time,
            name: name,
            nameStaff: nameStaff,
            image: image,
            listProduct: listProduct,
            location: location,
          });
        }}
        style={styles.viewItemList}>
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
        <View style={{flexDirection: 'column', width: '100%', marginStart: 6}}>
          <Text style={styles.textTime}>{time}</Text>
          <Text style={styles.textId}>{id}</Text>
          <Text style={styles.textName}>{name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Svg width="14" height="15" viewBox="0 0 14 15" fill="none">
              <Path
                d="M12.3333 13.5002C11.9474 10.8638 9.71838 8.8335 6.99996 8.8335C4.28154 8.8335 2.05253 10.8638 1.66663 13.5002"
                stroke="#4D5971"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M8.88554 2.28105C9.92693 3.32244 9.92693 5.01089 8.88554 6.05229C7.84414 7.09368 6.1557 7.09368 5.1143 6.05229C4.0729 5.01089 4.0729 3.32244 5.1143 2.28105C6.1557 1.23965 7.84414 1.23965 8.88554 2.28105"
                stroke="#4D5971"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <Text style={styles.textNameStaff}>{nameStaff}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTime}>
        <Text>{stateDataHistory}</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Image source={require('../../../../assets/icon/icon_time.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.viewList}
        data={dataHisttoryNapHang}
        renderItem={({item, index}) => (
          <ItemList
            id={item.id}
            time={item.time}
            name={item.name}
            nameStaff={item.nameStaff}
            image={item.image}
            location={item.location}
            listProduct={item.listProduct}
          />
        )}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5F8FB',
    flex: 1,
  },
  viewTime: {
    width: '90%',
    height: 44,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  viewList: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginTop: 10,
  },
  viewItemList: {
    paddingTop: 15,
    width: '100%',
    height: 130,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    paddingHorizontal: 18,
    flexDirection: 'row',
  },
  textTime: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    color: '#1A2948',
    height: 21,
  },
  textId: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    color: '#00DAD4',
    height: 21,
    marginTop: 8,
  },
  textName: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    color: '#1A2948',
    height: 23,
    marginTop: 2,
  },
  textNameStaff: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#1A2948',
    height: 21,
    marginStart: 10,
    marginTop: 2,
  },
});
export default NapHang;
