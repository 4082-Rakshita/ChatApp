import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { vh, vw } from '../../Utils/dimension';
import {Icons} from '../../Assets'
import color from '../../Theme/color';
const SearchInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.searchContainer}>
      <Image source={Icons.bsearch} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={color.greysh} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white, 
    borderRadius: 8,
    paddingHorizontal: vw(10), 
    marginVertical: vh(10), 
  marginHorizontal:vw(15),
  },
  searchInput: {
    flex: 1,
    height: vh(40), 
    paddingLeft: vw(10), 
    fontSize: 16,
  },
  searchIcon: {
    width: vw(20), 
    height: vh(20), 
    marginRight: vw(10), 
  },
});

export default SearchInput;
