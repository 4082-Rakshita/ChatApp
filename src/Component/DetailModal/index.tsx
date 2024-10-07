import React from 'react';
import { Image, Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { vh, vw } from '../../Utils/dimension';
import { Icons } from '../../Assets';
import color from '../../Theme/color';
import string from '../../Utils/string';


interface MessageOption {
  label: string;
  onPress: () => void;
  image: any;
}

interface DetailOptionsModalProps {
  visible: boolean;
  onDelete: () => void;
  onClose: () => void;
  onReply?: () => void;
  onForward?: () => void;
  onCopy?: () => void;
}

const DetailOptionsModal: React.FC<DetailOptionsModalProps> = ({
  visible,
  onClose,
  onReply,
  onForward,
  onCopy,
  onDelete,
}) => {
  const options: MessageOption[] = [
    { label: string.viewdetail, onPress: onReply || (() => {}), image: Icons.eye },
    { label: string.pinchat, onPress: onForward || (() => {}), image: Icons.forward },
    { label: string.searchchat, onPress: onCopy || (() => {}), image: Icons.bsearch },
    { label: string.delete, onPress: onDelete, image: Icons.delete },
  ];

  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} onPress={option.onPress} style={styles.option}>
            <Image source={option.image} style={styles.icon} />
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
    backgroundColor: color.white,
    padding: vw(20),
    borderTopLeftRadius: vw(10),
    borderTopRightRadius: vw(10),
  },
  option: {
    padding: vw(15),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: color.underline,
  },
  icon: {
    width: vw(20),
    height: vh(20),
    marginRight: vw(15),
  },
  text: {
    paddingTop: vh(2),
    fontWeight: '500',
    color: color.grey,
    fontSize: 16,
  },
});

export default DetailOptionsModal;
