import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { Icons } from '../../Assets';
import SearchInput from '../../Component/SearchField';
import string from '../../Utils/string';
import color from '../../Theme/color';
import { vh, vw } from '../../Utils/dimension';
interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface MenuProps {
  navigation: NavigationProp<any>;
}

const Menu: React.FC<MenuProps> = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeChats, setActiveChats] = useState<User[]>([]);


  useEffect(() => {
    const fetchActiveChats = async () => {
      try {
        const storedChats = await AsyncStorage.getItem('activeChats');
        if (storedChats) {
          setActiveChats(JSON.parse(storedChats));
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchActiveChats();
  }, []);


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const navigateToChatScreen = (user: User) => {
    setIsModalVisible(false);
    navigation.navigate('ContactList', { user });
  };
  const navigateContact = () => {
    navigation.navigate('ContactList');
   
  }
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };
  
  const getRandomColor = () => {
    const colors = [color.LightPink,
    color.BlueViolet,
    color.CadetBlue,
    color.Tomato,
    color.Gold,
    color.Turquoise];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={{ flexDirection: 'row', }}>
          <View style={styles.backarrow}>
            <Image style={styles.backimg} source={Icons.backarrow} />
          </View>
          <View style={styles.message}>
            <Text style={styles.location}>{string.message}</Text>
            <Text style={styles.sub2}>{activeChats.length} {string.chats}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={navigateContact} style={styles.notifi}>
          <Image source={Icons.notifi} style={styles.img2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateContact} style={styles.chaticon}>
          <Image source={Icons.chaticon} style={styles.img3} />
        </TouchableOpacity>

      </View>
      <SearchInput placeholder={string.placeholder} />
      {activeChats.length > 0 ? (
        <FlatList
          data={activeChats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (

            <TouchableOpacity onPress={() => navigateToChatScreen(item)} style={styles.flat} >
              <View style={styles.icon}>
                <Text  >
                  {getInitials(item.firstName, item.lastName)}
                </Text>
              </View>
              <View style={styles.name}>
                <Text>{item.firstName} {item.lastName}</Text>
              </View>
            </TouchableOpacity>

          )}
        />
      ) : (
        <View style={styles.nochat}>
          <Image style={styles.nochatimg} source={Icons.chat} />
          <Text>{string.nochat}</Text>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>{string.startchat}</Text>
          </TouchableOpacity>
        </View>
      )}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={modalStyles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={modalStyles.modalContent}>
                <View style={modalStyles.viewBoth}>
                  <Image source={Icons.addchat} style={styles.addMsg} />
                  <TouchableOpacity onPress={navigateContact}>
                    <Text style={modalStyles.modalText}>{string.newChat}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: color.overlay,
  },
  modalContent: {
    backgroundColor: color.white,
    padding: 40,
    borderTopLeftRadius: vw(20),
    borderTopRightRadius: vw(20),
  },
  viewBoth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: vw(10),
    color: color.grey,
  },
});

export default Menu;
