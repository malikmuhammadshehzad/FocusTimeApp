import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../assets';

const FocusHistory = ({history}) => {
  // console.log("history" , history);;

    if (!history || !history.length) return  <Text style={styles.notFocus}>we haven't  focus on anything yet:</Text>;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Thing we are focus on:</Text>
      <FlatList
        data={history}
        renderItem={({item}) => {
          return (
            <View style={styles.listContainer}>
              <Text style={styles.historyText} >- {item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 12,
    flex: 1,
    margin: 7,
  },
  notFocus:{
    color: COLORS.white,
    fontSize: 27,
    marginTop: 12,
    paddingHorizontal:12
  },
  text: {
    color: COLORS.white,
    fontSize: 27,
    marginTop: 12,
  },
  listContainer:{
    // backgroundColor:'coral'
    
  },
  historyText:{
    color:COLORS.white,
    fontSize:19,
    // marginHorizontal:12,
    marginVertical:9
  }
});
