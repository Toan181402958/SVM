import React from 'react';
import {atom} from 'recoil';
import {dataQLloi} from '../datas/dataWork';
import {dataLocation, listMayBanHang} from '../screen/data';

export const stateText = atom({
  key: 'textPay',
  default: false,
});

export const statePieProduct = atom({
  key: 'productPay1',
  default: false,
});

export const textInputLocation = atom({
  key: 'textinputlocation1',
  default: 'Vị trí',
});

export const listWorkRecoil = atom({
  key: 'listWork',
  default: dataQLloi,
});

//atom search location
export const modalVisibleRecoil = atom({
  key: 'modalRecoil',
  default: false,
});

export const listLocationRecoil = atom({
  key: 'locationReoil',
  default: dataLocation,
});

export const textInputRecoil = atom({
  key: 'textInput',
  default: '',
});

export const stateSearchRecoil = atom({
  key: 'stateSearch',
  default: true,
});

export const listMachineRecoil = atom({
  key: 'machineRecoil',
  default: listMayBanHang,
});

//picker date
export const datePickerRecoil = atom({
  key: 'datePicker',
  default: false,
});

//state Date in Work
export const DataWorkRecoil = atom({
  key: 'timework',
  default: 'Thời gian',
});
