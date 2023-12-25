import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {COLORS} from '../../assets';
import RoundButton from './RoundButton';

const MyCountdown = ({minutes = 0.1, isPaused, onProgress, onEnd}) => {
  const interval = useRef(null);
  const minutesToMillis = min => min * 1000 * 60;
  const formatTime = time => (time < 10 ? `0${time}` : time);
  const [millis, setMillis] = useState(null);

  const reset = () => setMillis(minutesToMillis(minutes));
  
  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);
  const countDownFunction = () => {
    setMillis(time => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };
  useEffect(() => {
    if (onProgress) {
      onProgress(millis / minutesToMillis(minutes));
    }
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDownFunction, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
    // <Text style={styles.text} > Hello </Text>
  );
};

export default MyCountdown;

const styles = StyleSheet.create({
  text: {
    fontSize: 44,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: 12,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
