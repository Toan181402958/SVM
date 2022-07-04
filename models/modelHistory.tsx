import {ImageSourcePropType} from 'react-native';

//ACtion NapHang
export interface ProductNapHang {
  id: string;
  name: string;
  image: ImageSourcePropType;
  amount: number;
}

export interface NapHangACtion {
  time: string;
  id: string;
  name: string;
  nameStaff: string;
  image: ImageSourcePropType;
  location: string;
  listProduct: Array<ProductNapHang>;
}
