import React from 'react';
import {ImageSourcePropType, Text, View} from 'react-native';

export interface doanhThuNam {
  month: number;
  earningsMonth: number;
}

export interface doanhThuThang {
  day: string;
  earnings: number;
}

export const dataSVG = [
  {
    month: '20/6',
    earnings: 0,
  },
  {
    month: '21/6',
    earnings: 2,
  },
  {
    month: '22/6',
    earnings: 3,
  },
  {
    month: '23/6',
    earnings: 4,
  },
  {
    month: '24/6',
    earnings: 2,
  },
  {
    month: '25/6',
    earnings: 8,
  },
  {
    month: '26/6',
    earnings: 2,
  },
  {
    month: '27/6',
    earnings: 6,
  },
  {
    month: '28/6',
    earnings: 3,
  },
  {
    month: '29/6',
    earnings: 7,
  },
];

export const data = [
  {
    day: '20/6',
    earnings: 1,
  },
  {
    day: '21/6',
    earnings: 2,
  },
  {
    day: '22/6',
    earnings: 3,
  },
  {
    day: '23/6',
    earnings: 4,
  },
  {
    day: '24/6',
    earnings: 2,
  },
  {
    day: '25/6',
    earnings: 8,
  },
  {
    day: '26/6',
    earnings: 2,
  },
  {
    day: '27/6',
    earnings: 4,
  },
  {
    day: '28/6',
    earnings: 5,
  },
] as Array<doanhThuThang>;

export const dataProduct = [
  {x: '', y: 35},
  {x: '', y: 40},
  {x: '', y: 30},
  {x: '', y: 25},
];
export const dataProductY = [
  {x: '', y: 10},
  {x: '', y: 10},
  {x: '', y: 70},
  {x: '', y: 10},
];

export const dataProduct1 = {
  labels: ['Đồ ăn', 'Đồ uống', 'Đồ chơi', 'Dồ ăn vặt'],
  datasets: [
    {
      data: [14, 32, 23, 12],
      backgroundColor: ['#F5A623', '#03BD5B', '#4A90E2', '#FF4C54'],
      borderColor: ['#000000', '#000000', '#000000', '#000000'],
      borderWidth: 1,
    },
  ],
};

export const dataWithYear = [
  {
    month: 1,
    earningsMonth: 123,
  },
  {
    month: 2,
    earningsMonth: 543,
  },
  {
    month: 3,
    earningsMonth: 553,
  },
  {
    month: 4,
    earningsMonth: 245,
  },
  {
    month: 5,
    earningsMonth: 653,
  },
  {
    month: 6,
    earningsMonth: 245,
  },
  {
    month: 7,
    earningsMonth: 512,
  },
  {
    month: 8,
    earningsMonth: 6,
  },
] as Array<doanhThuNam>;

export const dataPieTienMat = [
  {x: '1', y: 20},
  {x: '2', y: 50},
  {x: '3', y: 30},
];
export const dataPieMomo = [
  {x: '1', y: 70},
  {x: '2', y: 20},
  {x: '3', y: 10},
];
export const dataPieTheNganHang = [
  {x: '1', y: 10},
  {x: '2', y: 80},
  {x: '3', y: 10},
];
export const dataPieTienMatY = [
  {x: '1', y: 15},
  {x: '2', y: 55},
  {x: '3', y: 30},
];
export const dataPieMomoY = [
  {x: '1', y: 30},
  {x: '2', y: 40},
  {x: '3', y: 30},
];
export const dataPieTheNganHangY = [
  {x: '1', y: 40},
  {x: '2', y: 10},
  {x: '3', y: 50},
];

//data chart line
const customDataPoint = (size: number, radius: number, borderWidth: number) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: 'white',
        borderWidth: borderWidth,
        borderRadius: radius,
        borderColor: '#4A90E2',
        marginTop: 16,
        marginLeft: 0,
      }}
    />
  );
};

const customLabel = (val: string) => {
  return (
    <View style={{width: 30, marginLeft: 15}}>
      <Text style={{color: '#000000', fontWeight: 'normal'}}>{val}</Text>
    </View>
  );
};

export const lineCustom = [
  {
    value: 23,
    labelComponent: () => customLabel('20/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 76,
    labelComponent: () => customLabel('21/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 27,
    labelComponent: () => customLabel('22/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 89,
    labelComponent: () => customLabel('23/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 68,
    labelComponent: () => customLabel('24/4'),
    customDataPoint: () => customDataPoint(12, 6, 2),
    showStrip: true,
    stripHeight: 200,
    stripWidth: 1.5,
    stripColor: '#EA4972',
  },
  {
    value: 12,
    labelComponent: () => customLabel('25/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 78,
    labelComponent: () => customLabel('26/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 67,
    labelComponent: () => customLabel('27/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 89,
    labelComponent: () => customLabel('28/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
];
export const lineCustom1 = [
  {
    value: 56,
    labelComponent: () => customLabel('20/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 12,
    labelComponent: () => customLabel('21/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 34,
    labelComponent: () => customLabel('22/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 56,
    labelComponent: () => customLabel('23/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 12,
    labelComponent: () => customLabel('24/4'),
    customDataPoint: () => customDataPoint(12, 6, 2),
    showStrip: true,
    stripHeight: 200,
    stripOpacity: 0.5,
    stripWidth: 1.5,
    stripColor: '#EA4972',
  },
  {
    value: 56,
    labelComponent: () => customLabel('25/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 78,
    labelComponent: () => customLabel('26/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 21,
    labelComponent: () => customLabel('27/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
  {
    value: 39,
    labelComponent: () => customLabel('28/4'),
    customDataPoint: () => customDataPoint(8, 4, 1.7),
  },
];

export interface Product {
  id: string;
  name: string;
  image: ImageSourcePropType;
  price: string;
  quantity: string;
}

export interface maybanhang {
  id: string;
  name: string;
  percent: number;
  turnover: string;
  state: Array<stateMay>;
  location: string;
  quantity: number;
  totalProduct: number;
  listProduct: Array<Product>;
}

export interface stateMay {
  state: string;
  color: string;
}

export const listMayBanHang = [
  {
    id: '1#3HG2JH1',
    name: 'Máy bán hàng tự động Cầu Giấy 1',
    percent: 35,
    turnover: '12tr500',
    state: [
      {state: 'Máy lỗi', color: '#FF4D54'},
      {state: 'Hết hàng', color: '#FFBE40'},
      {state: 'Tiền đầy', color: '#4080FF'},
    ] as Array<stateMay>,
    location: 'Cầu Giấy',
    quantity: 12,
    totalProduct: 30,
    listProduct: [
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
    ] as Array<Product>,
  },
  {
    id: '2#3HG2JH2',
    name: 'Máy bán hàng tự động Cầu Giấy 2',
    percent: 60,
    turnover: '12tr500',
    state: [] as Array<stateMay>,
    location: 'Hà Đông',
    quantity: 12,
    totalProduct: 30,
    listProduct: [
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
    ] as Array<Product>,
  },
  {
    id: '3#3HG2JH3',
    name: 'Máy bán hàng tự động Cầu Giấy 3',
    percent: 45,
    turnover: '12tr500',
    state: [{state: 'Hết hàng', color: '#FFBE40'}] as Array<stateMay>,
    location: 'Tây Hồ',
    quantity: 10,
    totalProduct: 50,
    listProduct: [
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
    ] as Array<Product>,
  },
  {
    id: '1#3HG2JH4',
    name: 'Máy bán hàng tự động Cầu Giấy 4',
    percent: 35,
    turnover: '12tr500',
    state: [{state: 'Máy lỗi', color: '#FF4D54'}] as Array<stateMay>,
    location: 'Đống Đa',
    quantity: 12,
    totalProduct: 30,
    listProduct: [
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
    ] as Array<Product>,
  },
  {
    id: '3#3HG2JH5',
    name: 'Máy bán hàng tự động Cầu Giấy 5',
    percent: 35,
    turnover: '12tr500',
    state: [
      {state: 'Máy lỗi', color: '#FF4D54'},
      {state: 'Tiền đầy', color: '#4080FF'},
    ] as Array<stateMay>,
    location: 'Ba Đình',
    quantity: 12,
    totalProduct: 30,
    listProduct: [
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
    ] as Array<Product>,
  },
  {
    id: '1#3HG2JH6',
    name: 'Máy bán hàng tự động Cầu Giấy 6',
    percent: 80,
    turnover: '12tr500',
    state: [{state: 'Tiền đầy', color: '#4080FF'}] as Array<stateMay>,
    location: 'Thanh Xuân',
    quantity: 12,
    totalProduct: 30,
    listProduct: [
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
      {
        id: '#213KH1',
        name: 'Coca Cola chai 330ml',
        image: require('../assets/images/img_product.png'),
        price: '20.000đ',
        quantity: '2/5',
      },
    ] as Array<Product>,
  },
] as Array<maybanhang>;

export const dataLocation = [
  'Cầu giấy',
  'Ba đình',
  'Thanh Xuân',
  'Đống đa',
  'Tây hồ',
  'Hà đông',
  'Hoàn kiếm',
  'Nam định',
  'Thái bình',
  'Ninh bình',
  'Thanh hóa',
  'Hải phòng',
];
