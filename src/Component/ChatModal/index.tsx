import React from 'react';
import { Image,Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native';
import { vh, vw } from '../../Utils/dimension';
import { Icons } from '../../Assets';
import color from '../../Theme/color';
import string from '../../Utils/string';

interface MessageOption {
  label: string;
  onPress?: () => void;
  image:any
}

interface MessageOptionsModalProps {
  visible: boolean;
  onClose: () => void;
  onReply?: () => void;
  onCopy?: () => void;
  onStar?: () => void;
  onEdit?: () => void;
  onDelete: () => void;
  onForward?: ()=>void
  onEmojiSelect: (emoji: string) => void; 
}

const emojis = ["😃", "💕", "👎", "🎉", "😂", "😍", "😢","😇"]; 

const MessageOptionsModal: React.FC<MessageOptionsModalProps> = ({
  visible,
  onClose,
  onReply,
  onForward,
  onCopy,
  onStar,
  onEdit,
  onDelete,
  onEmojiSelect, 
}) => {
  const options: MessageOption[] = [
    { label: string.reply, onPress: onReply ,image:Icons.reply},
    { label: string.forward, onPress: onForward, image:Icons.forward},
    { label: string.copy, onPress: onCopy ,image:Icons.copy},
    { label: string.star, onPress: onStar ,image:Icons.star},
    { label: string.edit, onPress: onEdit ,image:Icons.edit},
    { label: string.delete, onPress: onDelete ,image:Icons.delete},
  ];

  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <FlatList
          data={emojis}
        
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onEmojiSelect(item)} style={styles.emojiButton}>
              <Text style={styles.emojiText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={styles.emojiContainer}
        />
        {options.map((option, index) => (

          <TouchableOpacity key={index} onPress={option.onPress} style={styles.option}>
            <Image source={option.image} style={styles.icon}/>
            <Text style={styles.text}>{option.label}</Text>
            
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: color.overlay,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor:color.white,
    padding: vw(20),
    borderTopLeftRadius: vw(10),
    borderTopRightRadius: vw(10),
    elevation: 5,
  },
  emojiContainer: {
    paddingBottom: vh(10),
  },
  emojiButton: {
    padding: vw(10),
  },
  emojiText: {
    fontSize: 24,
  },
  option: {
    padding: vw(15),
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:color.underline,
  },
  icon:{
    width:vw(20),
    height:vh(20),
    marginRight:vw(15)
  },
  text:{
   paddingTop:vh(4),
  },
 
});

export default MessageOptionsModal;
