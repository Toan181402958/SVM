import React from 'react';
import {StyleSheet} from 'react-native';

export const stylesChinhSua = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewTop: {
    backgroundColor: '#00BAB5',
    height: 60,
    justifyContent: 'center',
    paddingStart: 16,
    alignItems: 'center',
    width: '100%',
  },
  viewTouchable: {
    position: 'absolute',
    height: '100%',
    left: 16,
    justifyContent: 'center',
  },
  textTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
    height: 27,
  },
  viewImage: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue,',
    marginTop: 30,
  },
  textChangeImage: {
    fontWeight: '400',
    fontSize: 14,
    height: 21,
    color: '#4080FF',
    textDecorationLine: 'underline',
  },
  viewInfo: {
    width: '100%',
    paddingHorizontal: 16,
  },
  viewItemInfo: {
    marginBottom: 24,
  },
  textInput: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    height: 40,
  },
  textTitleInfo: {
    color: '#1A2948',
    marginBottom: 4,
  },
  touchButton: {
    width: '90%',
    height: 44,
    backgroundColor: '#00BAB5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
  },
  textButton: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  viewBottomSheet: {
    height: 250,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    paddingTop: 20,
    position: 'absolute',
    bottom: 0,
  },
  titleBottomSheet1: {
    fontWeight: '700',
    fontSize: 20,
    color: '1A2948',
  },
  titleBottomSheet2: {
    fontWeight: '500',
    fontSize: 14,
    color: '1A2948',
    marginBottom: 10,
  },
  touchButton1: {
    height: 40,
    width: '90%',
    backgroundColor: '#00BAB5',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
