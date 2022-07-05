import React from 'react';
import {StyleSheet} from 'react-native';

export const stylesUser = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F8FB',
  },
  viewTop: {
    height: 180,
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 250,
    borderBottomEndRadius: 250,
    overflow: 'hidden',
    backgroundColor: '#00DAD4',
  },
  viewImage: {
    height: 226,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  viewImage1: {
    height: 110,
    width: 110,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 5,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 102,
    width: 102,
    borderRadius: 51,
  },
  viewSecond: {
    marginTop: 55,
    alignItems: 'center',
  },
  textName: {
    height: 27,
    fontWeight: '700',
    fontSize: 18,
    color: '#1A2948',
  },
  textPhone: {
    fontWeight: '400',
    fontSize: 14,
    height: 21,
    color: '#808999',
  },
  viewThird: {
    backgroundColor: '#FFFFFF',
    height: 180,
    width: '90%',
    paddingHorizontal: 16,
    marginTop: 26,
    borderRadius: 8,
  },
  textLanguage: {
    fontWeight: '400',
    fontSize: 14,
    height: 23,
    color: '#808999',
  },
  viewLogin: {
    height: 56,
    width: '90%',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
  },
});
