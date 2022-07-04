import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

const ViewNoDataWork = () => {
  return (
    <View style={styles.container}>
      <Svg width="186" height="200" viewBox="0 0 186 200" fill="none">
        <Path
          d="M165.115 149.273H38.207C26.9546 149.273 17.7549 140.067 17.7549 128.807V38.1696C17.7549 26.9093 26.9546 17.7031 38.207 17.7031H165.115C176.367 17.7031 185.567 26.9093 185.567 38.1696V128.792C185.567 140.067 176.367 149.273 165.115 149.273Z"
          fill="#F5F8FB"
        />
        <Path
          d="M97.125 84.1942H140.875"
          stroke="#00BAB5"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M77.0613 77.9489C80.4781 81.3983 80.4781 86.9898 77.0613 90.4392C73.6444 93.8886 68.1056 93.8886 64.6888 90.4392C61.2719 86.9898 61.2719 81.3983 64.6888 77.9489C68.1056 74.4995 73.6444 74.4995 77.0613 77.9489"
          stroke="#00BAB5"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M97.125 55.0833H140.875"
          stroke="#00BAB5"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M62.2125 52.9103L69.4444 59.4823L84 46.25"
          stroke="#00BAB5"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M97.125 114.208H140.875"
          stroke="#00BAB5"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M77.0613 107.963C80.4781 111.412 80.4781 117.003 77.0613 120.453C73.6444 123.902 68.1056 123.902 64.6888 120.453C61.2719 117.003 61.2719 111.412 64.6888 107.963C68.1056 104.513 73.6444 104.513 77.0613 107.963"
          stroke="#00BAB5"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.7321 17.2385C15.3425 17.2385 14.9679 17.0885 14.6683 16.8036L3.10122 5.22847C2.51688 4.64371 2.51688 3.6991 3.10122 3.11435C3.68557 2.52959 4.62951 2.52959 5.21386 3.11435L16.7809 14.6895C17.3652 15.2743 17.3652 16.2189 16.7809 16.8036C16.4962 17.0885 16.1216 17.2385 15.7321 17.2385Z"
          fill="#EEF0F7"
        />
        <Path
          d="M23.1637 14.0597C22.4595 14.0597 21.8302 13.5649 21.6954 12.8452L19.5678 1.77982C19.4179 0.970158 19.9424 0.175489 20.7514 0.0255519C21.5605 -0.124386 22.3546 0.400396 22.5045 1.21006L24.6321 12.2754C24.7819 13.0851 24.2575 13.8798 23.4484 14.0297C23.3585 14.0447 23.2536 14.0597 23.1637 14.0597Z"
          fill="#EEF0F7"
        />
        <Path
          d="M12.5556 24.6754C12.4657 24.6754 12.3608 24.6604 12.2709 24.6454L1.21334 22.5163C0.404247 22.3664 -0.135148 21.5717 0.0296673 20.762C0.179499 19.9524 0.97361 19.4126 1.7827 19.5775L12.8403 21.7066C13.6494 21.8566 14.1888 22.6513 14.024 23.4609C13.8891 24.1806 13.2598 24.6754 12.5556 24.6754Z"
          fill="#EEF0F7"
        />
        <Path
          d="M92.7836 146.392L84.9033 168.041L60.8248 146.392H92.7836Z"
          fill="#F5F8FB"
        />
        <Path
          d="M107.732 200C146.164 200 177.32 197.923 177.32 195.361C177.32 192.799 146.164 190.722 107.732 190.722C69.2997 190.722 38.1443 192.799 38.1443 195.361C38.1443 197.923 69.2997 200 107.732 200Z"
          fill="#EEF0F7"
        />
      </Svg>
      <Text style={styles.text}>Không có công việc</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    height: 23,
    color: '#4D5971',
    marginTop: 20,
  },
});

export default ViewNoDataWork;
