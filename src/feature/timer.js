import {StyleSheet, Text, Vibration, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assets';
import {ProgressBar} from 'react-native-paper';
import {MyCountdown} from '../components/common';
import RoundButton from '../components/common/RoundButton';
import Timing from './timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];
const Timer = ({focusSubject, clearSubject, onTimeEnd}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onEndFunction = reset => {
    console.log('reset', reset);
    Vibration.vibrate(PATTERN);
    setProgress(1);
    setIsStarted(false);
    reset();
    onTimeEnd(focusSubject);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.countdown}>
        <MyCountdown
          minutes={minutes}
          onProgress={setProgress}
          isPaused={!isStarted}
          onEnd={onEndFunction}
        />
        <Text style={styles.text}> Focus on {focusSubject} </Text>
      </View>
      <View style={styles.barContainer}>
        <ProgressBar
          progress={progress}
          color={COLORS.lightBlue}
          style={{height: 10, marginHorizontal: 12}}
        />
      </View>

      <View style={styles.btnWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.btnContainer}>
        {!isStarted ? (
          <RoundButton
            Label="Start"
            textColor="white"
            onPress={() => setIsStarted(true)}
          />
        ) : (
          <RoundButton
            fontSize={22}
            Label="Pause"
            textColor="white"
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundButton
          Label="-"
          height={50}
          textColor={COLORS.white}
          width={50}
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
  barContainer: {
    marginVertical: 12,
  },
  btnWrapper: {
    flex: 0.2,
    marginHorizontal: 17,
    // backgroundColor: 'coral',
  },
  btnContainer: {
    flex: 0.2,
    // backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  text: {
    marginTop: 22,
    color: COLORS.white,
  },
  clearSubject: {
    flex: 0.1,
    alignItems: 'center',
    // backgroundColor:'coral'
  },
});
