import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {RootStackParams} from '../../../App';

interface PropsText {
  title: string;
}
const ViewTabbar: React.FC<PropsText> = ({title}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.viewTop}>
      <Text style={styles.textTitle}>{title}</Text>
      {title != 'Quản lý công việc' ? (
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={{
            height: '100%',
            position: 'absolute',
            left: 16,
            justifyContent: 'center',
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
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  viewTop: {
    height: 56,
    width: '100%',
    backgroundColor: '#00DAD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
    height: 27,
  },
});

export default ViewTabbar;
