import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONT} from '../../assets';

const RoundButton = ({
  Label,
  onPress,
  bgColor,
  width = 80,
  height = 80,
  textColor,
  borderRadius = 50,
  fontWeight = '500',
  fontSize = 25,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius,
        borderColor: 'white',
        borderWidth: 2,
      }}>
      <Text
        style={{
          color: textColor,
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}>
        {Label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundButton;