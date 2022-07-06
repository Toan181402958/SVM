import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useRef, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {RootStackParams} from '../../App';
import {stylesChinhSua} from './styleChinhSua';
import {stylesUser} from './styleUser';
import {URL} from './TaiKhoan';
import ImagePicker from 'react-native-image-crop-picker';
import {ImageUSerRecoil} from '../../atoms/atom';
import {useRecoilState} from 'recoil';
// import ImageCropPicker from 'react-native-image-crop-picker';

type Props = NativeStackScreenProps<RootStackParams, 'ChinhSuaThongTin'>;
const ChinhSuaThongTin = ({route}: Props) => {
  const URLDEMO = 'https://reactnative.dev/movies.json';

  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useRecoilState(ImageUSerRecoil);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [textName, SetTextName] = useState(route.params.name);
  const [textPhone, SetTextPhone] = useState(route.params.phone);
  const [textEmail, SetTextEmail] = useState(route.params.email);

  const ViewTop = () => {
    return (
      <View style={stylesChinhSua.viewTop}>
        <TouchableOpacity
          style={stylesChinhSua.viewTouchable}
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
        <Text style={stylesChinhSua.textTitle}>Chỉnh sửa thông tin</Text>
      </View>
    );
  };

  const ViewImage = () => {
    return (
      <View style={stylesChinhSua.viewImage}>
        <TouchableOpacity style={stylesUser.viewImage1}>
          <Image
            style={stylesUser.image}
            source={{
              uri: image,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={stylesChinhSua.textChangeImage}>Nhấn để sửa ảnh</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ViewInfo = () => {
    return (
      <View style={stylesChinhSua.viewInfo}>
        {viewItemInfor('Họ và tên', textName)}
        {viewItemInfor('Số điện thoại', textPhone)}
        {viewItemInfor('Email', textEmail)}
      </View>
    );
  };

  const viewItemInfor = (title: string, value: string) => {
    return (
      <View style={stylesChinhSua.viewItemInfo}>
        <Text style={stylesChinhSua.textTitleInfo}>{title}</Text>
        <TextInput
          onChangeText={value => {}}
          style={stylesChinhSua.textInput}
          defaultValue={value}
        />
      </View>
    );
  };

  const putData = async () => {
    const userPut = {
      name: textName,
      phone: textPhone,
      email: textEmail,
    };
    const config = {
      onUploadProgress: (event: any) => console.log(event.loaded),
    };

    axios.put(URL + route.params.id, userPut, config);
  };

  const ViewBottomSheet = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            flex: 1,
            justifyContent: 'flex-end',
          }}></TouchableOpacity>
        <View style={stylesChinhSua.viewBottomSheet}>
          <Text style={stylesChinhSua.titleBottomSheet1}>Upload Photo</Text>
          <Text style={stylesChinhSua.titleBottomSheet2}>
            Choose Your Profile Picture
          </Text>
          {buttonChoose('Take Photo', 1)}
          {buttonChoose('Choose From Library', 2)}
          {buttonChoose('Cancel', 3)}
        </View>
      </Modal>
    );
  };

  const chooseImageLibrary = () => {
    console.warn('choose image from library');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('image from library: ', image);
      setImage(image.path);
      setModalVisible(!modalVisible);
    });
  };

  const chooseImageCamera = () => {
    console.warn('choose image from camera');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('image from camera: ', image);
      setImage(image.path);
    });
  };

  const buttonChoose = (title: string, style: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          style == 3
            ? setModalVisible(!modalVisible)
            : style == 2
            ? chooseImageLibrary()
            : chooseImageCamera();
        }}
        style={stylesChinhSua.touchButton1}>
        <Text style={stylesChinhSua.textButton}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={stylesChinhSua.container}>
      <ViewTop />
      <ViewImage />
      <ViewInfo />
      <TouchableOpacity
        onPress={() => putData()}
        style={stylesChinhSua.touchButton}>
        <Text style={stylesChinhSua.textButton}>Lưu</Text>
      </TouchableOpacity>
      <ViewBottomSheet />
    </View>
  );
};

export default ChinhSuaThongTin;
