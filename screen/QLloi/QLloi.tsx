import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../../App';
import ListWork from './component/listWork';
import ViewTabbar from './component/ViewTabbar';
import ViewTopQLloi from './component/viewTop';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useRecoilState} from 'recoil';
import {DataWorkRecoil, datePickerRecoil} from '../../atoms/atom';
import moment from 'moment';
import ViewNoDataWork from './component/ViewNoDataWork';
const QLloi = () => {
  const [stateDataWork, setStateDataWork] = useRecoilState(DataWorkRecoil);
  const [isDatePickerVisible, setDatePickerVisibility] =
    useRecoilState(datePickerRecoil);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setStateDataWork(moment(date).format('l'));
    console.log('Date: ', moment(date).format('l'));

    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <ViewTabbar title={'Quản lý công việc'} />
      <ViewTopQLloi />
      {stateDataWork == '7/1/2022' ? <ListWork /> : <ViewNoDataWork />}

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
    flex: 1,
    paddingBottom: 56,
  },
});
export default QLloi;
