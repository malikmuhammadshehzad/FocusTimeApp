import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MyInput, RoundButton} from './src/components/common';
import {COLORS, ICONS} from './src/assets';
import Focus from './src/feature/focus';
import Timer from './src/feature/timer';
import FocusHistory from './src/feature/focusHistory';

const App = () => {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  // useEffect(() => {
  //   const todo =[{...history} , {title:currentSubject}]
  //   setHistory(todo)
  // }, [currentSubject])

  return (
    <View style={styles.mainContainer}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimeEnd={subject => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },
});
