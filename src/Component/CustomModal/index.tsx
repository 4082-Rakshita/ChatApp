import React from 'react';
import { View, Text, Modal, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CustomButton from '../Button'; 
import color from '../../Theme/color';
import { vh, vw } from '../../Utils/dimension';

interface CustomModalProps {
  visibility: boolean;
  onClose: () => void;
  image: any;
  Heading: string;
  text: string;
  buttonText: string;
  buttonText2: string;
  onPress: () => void;
  onPress2: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visibility,
  onClose,
  image,
  Heading,
  text,
  buttonText,
  buttonText2,
  onPress,
  onPress2,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visibility}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>
        <View style={styles.icon}>
          <Image style={styles.lockStyle} source={image} />
        </View>
        <Text style={styles.modalTextLocked}>{Heading}</Text>
        <Text style={styles.modalText}>{text}</Text>
        <View style={styles.buttonRow}>
          
            <View style={styles.buttonContainer}>
              <CustomButton
                title={buttonText2}
                onPress={onPress2}
                backgroundColor={color.Gainsboro}
                textColor={color.black}
              />
            </View>
          
          <View style={styles.buttonContainer}>
            <CustomButton
              title={buttonText}
              onPress={onPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: color.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    maxWidth: vw(250),
    padding: vw(10),
    borderRadius: vw(13),
    backgroundColor: color.white,
    alignItems: 'center',
    position: 'absolute', 
    marginTop: vh(290), 
    marginLeft: vw(70),
   
  },
  modalText: {
    fontSize: 13,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '400',
  },
  modalTextLocked: {
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
  lockStyle: {
    width: vw(20),
    height: vh(20),
  },
  icon: {
    backgroundColor: color. PastelPink,
    padding: vw(10),
    borderRadius: vw(20),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    flex: 1, 
    margin: vw(5), 
  },
});

export default CustomModal;
