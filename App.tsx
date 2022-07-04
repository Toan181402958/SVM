import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {RecoilRoot} from 'recoil';
import {ProductDelivery} from './datas/dataWork';
import {ProductNapHang} from './models/modelHistory';
import BaoCao from './screen/BaoCao/BaoCao';
import {Product, stateMay} from './screen/data';
import ItemLichSuNapHang from './screen/LichSu/component/NapHang/ItemNapHang';
import LichSu from './screen/LichSu/LichSu';
import ChiTietLoi_CongViec from './screen/QLloi/component/ChiTietLoi_CongViec';
import QLloi from './screen/QLloi/QLloi';
import ChiTietMay from './screen/Qlmay/ChiTietMay';
import QLmay from './screen/Qlmay/QLmay';
import TaiKhoan from './screen/TaiKhoan';

export type RootStackParams = {
  Home: undefined;
  ChiTietMay: {
    id: string;
    name: string;
    percent: number;
    turnover: string;
    state: Array<stateMay>;
    location: string;
    quantity: number;
    totalProduct: number;
    listProduct: Array<Product>;
  };
  ChiTietLoi_CongViec: {
    id: string;
    name: string;
    image: ImageSourcePropType;
    location: string;
    time: string;
    state: string;
    nameStaff: string;
    imageStaff: ImageSourcePropType;
    type: number;
    listProduct: Array<ProductDelivery>;
  };
  ItemLichSuNapHang: {
    time: string;
    id: string;
    name: string;
    nameStaff: string;
    image: ImageSourcePropType;
    location: string;
    listProduct: Array<ProductNapHang>;
  };
};

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#00DAD4',
      }}>
      <Tab.Screen
        name="Báo cáo"
        component={BaoCao}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assets/icon/icon_baocao.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                resizeMode: 'stretch',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QL máy"
        component={QLmay}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assets/icon/icon_qlmay.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                resizeMode: 'stretch',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QL lỗi"
        component={QLloi}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assets/icon/icon_qlloi.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                resizeMode: 'stretch',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lịch Sử"
        component={LichSu}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assets/icon/icon_ls.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                resizeMode: 'stretch',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tài Khoản"
        component={TaiKhoan}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assets/icon/icon_user.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                resizeMode: 'stretch',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="ChiTietMay"
            component={ChiTietMay}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="ChiTietLoi_CongViec"
            component={ChiTietLoi_CongViec}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="ItemLichSuNapHang"
            component={ItemLichSuNapHang}
            options={{headerShown: false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
