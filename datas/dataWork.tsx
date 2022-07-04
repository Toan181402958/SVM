import React from 'react';
import {ImageSourcePropType} from 'react-native';

export interface ProductDelivery {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

export interface ErrorWork {
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
}

export const dataQLloi = [
  {
    id: '1#3HG2JH9',
    name: 'Sửa máy bán hàng Cầu Giấy 1',
    image: require('../assets/images/img_suamay.png'),
    location: 'Cầu Giấy',
    time: '12:30 12/02/2021',
    state: 'Chưa sửa',
    nameStaff: 'Nguyễn Văn A',
    imageStaff: require('../assets/images/img_staff.png'),
    type: 1,
    listProduct: [],
  },
  {
    id: '2#3HG2JH9',
    name: 'Rút tiền máy bán hàng Cầy Giấy 1',
    image: require('../assets/images/img_ruttien.png'),
    location: 'Cầu Giấy',
    time: '12:30 12/02/2021',
    state: 'Tiền tại máy bán hàng đầy',
    nameStaff: 'Nguyễn Văn A',
    imageStaff: require('../assets/images/img_staff.png'),
    type: 2,
    listProduct: [],
  },
  {
    id: '3#3HG2JH9',
    name: 'Tiếp hàng máy bán hàng Cầu giấy 1',
    image: require('../assets/images/img_tiephang.png'),
    location: 'Cầu Giấy',
    time: '12:30 12/02/2021',
    state: 'Tiếp hàng',
    nameStaff: 'Nguyễn Văn A',
    imageStaff: require('../assets/images/img_staff.png'),
    type: 3,
    listProduct: [
      {
        id: '#1HG2JH9',
        name: 'Coca Cola chai 1 330ml',
        image: require('../assets/images/img_product.png'),
      },
      {
        id: '#2HG2JH9',
        name: 'Coca Cola chai 2 330ml',
        image: require('../assets/images/img_product.png'),
      },
      {
        id: '#3HG2JH9',
        name: 'Coca Cola chai 3 330ml',
        image: require('../assets/images/img_product.png'),
      },
      {
        id: '#4HG2JH9',
        name: 'Coca Cola chai 4 330ml',
        image: require('../assets/images/img_product.png'),
      },
      {
        id: '#5HG2JH9',
        name: 'Coca Cola chai 5 330ml',
        image: require('../assets/images/img_product.png'),
      },
      {
        id: '#4HG2JH9',
        name: 'Coca Cola chai 6 330ml',
        image: require('../assets/images/img_product.png'),
      },
      {
        id: '#5HG2JH9',
        name: 'Coca Cola chai 7 330ml',
        image: require('../assets/images/img_product.png'),
      },
    ],
  },
  {
    id: '4#3HG2JH9',
    name: 'Sửa máy bán hàng Cầu Giấy 1',
    image: require('../assets/images/img_suamay.png'),
    location: 'Cầu Giấy',
    time: '12:30 12/02/2021',
    state: 'Chưa sửa',
    nameStaff: 'Nguyễn Văn A',
    imageStaff: require('../assets/images/img_staff.png'),
    type: 1,
    listProduct: [],
  },
  {
    id: '5#3HG2JH9',
    name: 'Sửa máy bán hàng Cầu Giấy 1',
    image: require('../assets/images/img_suamay.png'),
    location: 'Cầu Giấy',
    time: '12:30 12/02/2021',
    state: 'Chưa sửa',
    nameStaff: 'Nguyễn Văn A',
    imageStaff: require('../assets/images/img_staff.png'),
    type: 1,
    listProduct: [],
  },
] as Array<ErrorWork>;
