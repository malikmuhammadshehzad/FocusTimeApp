import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RoundButton} from '../components/common';
import {COLORS} from '../assets';

const Timing = ({onChangeTime}) => {
  return (
    <View style={styles.mainContainer}>
      <RoundButton
        height={60}
        width={60}
        textColor={COLORS.white}
        Label="10"
        onPress={() => onChangeTime(10)}
      />
      <RoundButton
        height={60}
        width={60}
        textColor={COLORS.white}
        Label="15"
        onPress={() => onChangeTime(15)}
      />
      <RoundButton
        height={60}
        width={60}
        textColor={COLORS.white}
        Label="20"
        onPress={() => onChangeTime(20)}
      />
    </View>
  );
};

export default Timing;

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
