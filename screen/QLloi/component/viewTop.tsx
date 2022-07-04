import React, {useRef} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useRecoilState} from 'recoil';
import {
  DataWorkRecoil,
  datePickerRecoil,
  listWorkRecoil,
  modalVisibleRecoil,
  stateSearchRecoil,
} from '../../../atoms/atom';
import SearchLocation from '../../Qlmay/component/searchLocation';

const ViewTopQLloi = () => {
  const [listWork, setListWork] = useRecoilState(listWorkRecoil);
  const [stateSearch, setStateSearch] = useRecoilState(stateSearchRecoil);
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleRecoil);
  const [isDatePickerVisible, setDatePickerVisibility] =
    useRecoilState(datePickerRecoil);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const [stateDataWork, setStateDataWork] = useRecoilState(DataWorkRecoil);

  const onChangeTextInput = (input: string) => {
    let dataNew = listWork;
    let searchData = dataNew.filter(item => {
      return item.location.toLowerCase().includes(input.toLowerCase());
    });
    // setTextinputLocation('Vị trí');
    setListWork(searchData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text>{stateDataWork}</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Image source={require('../../../assets/icon/icon_time.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setStateSearch(!stateSearch);
          // changeSizeViewSearch();
          setModalVisible(!modalVisible);
        }}
        style={styles.view2}>
        <Text>Vị trí</Text>
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
      <SearchLocation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  view1: {
    height: 44,
    width: 215,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  view2: {
    height: 44,
    width: 110,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
});

export default ViewTopQLloi;
