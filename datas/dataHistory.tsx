import {Timer} from 'victory-core';
import {NapHangACtion, ProductNapHang} from '../models/modelHistory';

export const dataHisttoryNapHang = [
  {
    time: '24/12/2021',
    id: '3HG2JH1',
    name: 'Máy bán hàng tự động Cầu Giấy 1',
    image: require('../assets/images/img_tiephang.png'),
    location: 'Cầu Giấy',
    nameStaff: 'Nguyễn Ngọc Lâm',
    listProduct: [
      {
        id: '#1HG2JH9',
        name: 'Coca Cola chai 1 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 10,
      },
      {
        id: '#2HG2JH9',
        name: 'Coca Cola chai 2 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 20,
      },
      {
        id: '#2HG2JH9',
        name: 'Coca Cola chai 3 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 15,
      },
      {
        id: '#4HG2JH9',
        name: 'Coca Cola chai 4 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 5,
      },
      {
        id: '#5HG2JH9',
        name: 'Coca Cola chai 3 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 15,
      },
      {
        id: '#6HG2JH9',
        name: 'Coca Cola chai 4 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 5,
      },
    ] as Array<ProductNapHang>,
  },
  {
    time: '24/12/2021',
    id: '3HG2JH2',
    name: 'Máy bán hàng tự động Thanh Xuân 2',
    image: require('../assets/images/img_tiephang.png'),
    location: 'Thanh Xuân',
    nameStaff: 'Nguyễn Ngọc Lâm',
    listProduct: [
      {
        id: '#1HG2JH9',
        name: 'Coca Cola chai 1 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 10,
      },
      {
        id: '#2HG2JH9',
        name: 'Coca Cola chai 2 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 20,
      },
      {
        id: '#2HG2JH9',
        name: 'Coca Cola chai 3 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 15,
      },
      {
        id: '#4HG2JH9',
        name: 'Coca Cola chai 4 330ml',
        image: require('../assets/images/img_product.png'),
        amount: 5,
      },
    ] as Array<ProductNapHang>,
  },
] as Array<NapHangACtion>;
