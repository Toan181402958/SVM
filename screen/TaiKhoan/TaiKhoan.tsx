import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Circle, Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {useRecoilState} from 'recoil';
import {RootStackParams} from '../../App';
import {ImageUSerRecoil} from '../../atoms/atom';
import {User} from '../../models/modelHistory';
import {stylesUser} from './styleUser';

let IS_MOUNTED = false;
export const URL = 'https://62c2f951ff594c65676afff1.mockapi.io/history';
const TaiKhoan = () => {
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    phone: '',
    email: '',
  });

  const [image, setImage] = useRecoilState(ImageUSerRecoil);

  const handleAxios = async () => {
    const res: User = await (await axios.get(URL)).data[0];
    // setListUser(res);
    console.log('item User', res.name);
    setUser(res);
  };

  useEffect(() => {
    IS_MOUNTED = true;
    handleAxios();
    return () => {
      IS_MOUNTED = false;
    };
  }, []);
  return (
    <View style={stylesUser.container}>
      <View style={stylesUser.viewTop}></View>
      <View style={stylesUser.viewImage}>
        <TouchableOpacity
          onPress={() => handleAxios()}
          style={stylesUser.viewImage1}>
          <Image
            style={stylesUser.image}
            source={{
              uri: image,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesUser.viewSecond}>
        <Text style={stylesUser.textName}>{user.name}</Text>
        <Text style={stylesUser.textPhone}>{user.phone}</Text>
      </View>
      <ViewInfoUser
        id={user.id}
        name={user.name}
        phone={user.phone}
        email={user.email}
      />
      <ViewLogin />
    </View>
  );
};

const ViewInfoUser: React.FC<User> = ({id, name, phone, email}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={stylesUser.viewThird}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChinhSuaThongTin', {id, name, phone, email});
        }}
        style={{flexDirection: 'row', height: 56, alignItems: 'center'}}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5679 5.1828L18.7625 3.37736C18.2593 2.87421 17.4447 2.87421 16.9429 3.37736L3 17.3189V20.9453H6.6263L20.5679 7.00367C21.071 6.50052 21.071 5.68595 20.5679 5.1828Z"
            stroke="#4D5971"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M18.2744 9.29978L14.6455 5.6709"
            stroke="#4D5971"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
        <Text style={{color: '#1A2948', marginStart: 12}}>
          Chỉnh sửa thông tin
        </Text>
      </TouchableOpacity>
      <View
        style={{backgroundColor: '#E6E8EB', height: 2, width: '100%'}}></View>
      <View
        style={{
          flexDirection: 'row',
          height: 56,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', height: 56, alignItems: 'center'}}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M9.70801 18.3438V18.7088C9.70801 19.9738 10.734 20.9998 12 20.9998V20.9998C13.266 20.9998 14.292 19.9738 14.292 18.7078V18.3428"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M13.833 5.751V4.833C13.833 3.821 13.013 3 12 3V3C10.987 3 10.167 3.821 10.167 4.833V5.751"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.563 10.1882V10.1882C6.563 7.68523 8.592 5.65723 11.094 5.65723H12.907C15.41 5.65723 17.438 7.68623 17.438 10.1882V10.1882V12.9852C17.438 13.5152 17.649 14.0242 18.024 14.3992L18.665 15.0402C19.04 15.4152 19.251 15.9242 19.251 16.4542V16.4542C19.251 17.4982 18.405 18.3442 17.361 18.3442H6.64C5.596 18.3442 4.75 17.4982 4.75 16.4542V16.4542C4.75 15.9242 4.961 15.4152 5.336 15.0402L5.977 14.3992C6.352 14.0242 6.563 13.5152 6.563 12.9852V10.1882Z"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          <Text style={{color: '#1A2948', marginStart: 12}}>Thông báo</Text>
        </View>
        <Switch
          trackColor={{false: '#808080', true: '#33CC5E'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View
        style={{backgroundColor: '#E6E8EB', height: 2, width: '100%'}}></View>
      <View
        style={{
          flexDirection: 'row',
          height: 56,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', height: 56, alignItems: 'center'}}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 3.09961C16.667 8.02661 16.667 15.9726 12 20.8996"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M12 20.8996C7.33301 15.9726 7.33301 8.02661 12 3.09961"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M12 3C16.982 3 21 7.018 21 12C21 16.982 16.982 21 12 21"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M12 21C7.018 21 3 16.982 3 12C3 7.018 7.018 3 12 3"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M3.51001 9H20.49"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M3.51001 15H20.49"
              stroke="#4D5971"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          <Text style={{color: '#1A2948', marginStart: 12}}>Ngôn ngữ</Text>
        </View>
        <Text style={stylesUser.textLanguage}>Tiếng Việt</Text>
      </View>
    </View>
  );
};

const ViewLogin = () => {
  return (
    <TouchableOpacity style={stylesUser.viewLogin}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M9.85999 12H20"
          stroke="#4D5971"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.8641 19.981L6.69605 20C5.50105 20.006 4.52905 19.048 4.52905 17.865V6.135C4.52905 4.956 5.49405 4 6.68605 4H11.0001"
          stroke="#4D5971"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 16L20 12L16 8"
          stroke="#4D5971"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text style={{color: '#1A2948', marginStart: 12}}>Đăng xuất</Text>
    </TouchableOpacity>
  );
};
export default TaiKhoan;
