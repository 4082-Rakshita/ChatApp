import React from 'react';
import {  TouchableOpacity, Text, StyleSheet } from 'react-native';
import color from '../../Theme/color';
import {vw} from '../../Utils/dimension'
interface CustomButtonProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string; 
  textColor?: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, backgroundColor =color.primary, textColor = color.white }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: vw(10),
    borderRadius: vw(5),

  },
  text: {
  fontSize: 16,
  textAlign:"center"
  },
});

export default CustomButton;
