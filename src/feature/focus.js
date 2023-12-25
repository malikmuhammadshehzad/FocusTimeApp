import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {MyInput} from '../components/common';
  import {COLORS, ICONS} from '../assets';
  
  const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null);
    return (
      <View style={styles.inputContainer}>
        <MyInput
          value={subject}
          onChangeText={setSubject}
          placeholder="Enter Your Text"
        />
        <TouchableOpacity onPress={() => addSubject(subject)}>
          <ICONS.PlusIcon size={44} />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Focus;
  
  const styles = StyleSheet.create({
    inputContainer: {
      width: '100%',
      height: 100,
      // backgroundColor:'coral',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });