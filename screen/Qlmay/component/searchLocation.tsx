import React from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useRecoilState} from 'recoil';
import {
  listLocationRecoil,
  listMachineRecoil,
  modalVisibleRecoil,
  stateSearchRecoil,
  textInputLocation,
  textInputRecoil,
} from '../../../atoms/atom';
import {dataLocation, listMayBanHang} from '../../data';
import ViewNoData from './viewNoData';

const SearchLocation = (size: any) => {
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleRecoil);
  const [listLocation, setListLocation] = useRecoilState(listLocationRecoil);
  const [textInput, setTextInput] = useRecoilState(textInputRecoil);
  const [stateSearch, setStateSearch] = useRecoilState(stateSearchRecoil);
  const [listMay, setListMay] = useRecoilState(listMachineRecoil);

  const [textinputLocation, setTextinputLocation] =
    useRecoilState(textInputLocation);

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
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          marginTop: 40,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          alignItems: 'center',
        }}>
        <Text style={styles.textTitle}>Chọn vị trí</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setStateSearch(!stateSearch);
            // changeSizeViewSearch();
            console.log('close view search');
          }}
          style={{position: 'absolute', right: 16, top: 12}}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M6 6L18 18"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M18 6L6 18"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View
            style={{
              position: 'absolute',
              top: 24,
              width: '90%',
            }}>
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{marginLeft: 8}}>
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
          <View style={{width: '90%', marginTop: 14}}>
            <TextInput
              editable={true}
              onChangeText={input => onChangeTextInputLocation(input)}
              style={styles.textInput}
              placeholder={'Nhập vị trí cần tìm kiếm'}
              value={textInput}
            />
            {textInput != '' ? (
              <View
                style={{
                  position: 'absolute',
                  height: '100%',
                  justifyContent: 'center',
                  right: 8,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setTextInput('');
                    setListLocation(dataLocation);
                    console.log('list location', listLocation);
                  }}>
                  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <Path
                      d="M4 4L12 12"
                      stroke="#FF4D54"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <Path
                      d="M12 4L4 12"
                      stroke="#FF4D54"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
        {listLocation.length == 0 ? (
          <ViewNoData />
        ) : (
          <FlatList
            style={{width: '100%', marginTop: 12}}
            data={listLocation}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setTextinputLocation(item);
                  setModalVisible(!modalVisible);
                  setStateSearch(!stateSearch);
                  onChangeTextInput(item);
                }}
                style={styles.viewItemList}>
                <Svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  style={{marginLeft: 15}}>
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.77765 9.03916V8.86663C3.77765 5.05891 7.01099 1.97241 10.9999 1.97241V1.97241C14.9887 1.97241 18.2221 5.05891 18.2221 8.86663V9.03916C18.2221 12.5108 13.6174 17.7369 11.7617 19.703C11.3529 20.1363 10.6468 20.1363 10.238 19.703C8.3823 17.7369 3.77765 12.5108 3.77765 9.03916Z"
                    stroke="#00BAB5"
                    stroke-width="1.4468"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M9.19434 8.30819C9.19434 9.29661 10.0023 10.0972 10.9999 10.0972V10.0972C11.9975 10.0972 12.8054 9.29661 12.8054 8.30819V8.27509C12.8054 7.28666 11.9975 6.48608 10.9999 6.48608V6.48608C10.0023 6.48608 9.19434 7.28666 9.19434 8.27509"
                    stroke="#00BAB5"
                    stroke-width="1.4468"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
                <Text style={styles.textItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
export default SearchLocation;
