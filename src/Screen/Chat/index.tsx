import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GiftedChat, IMessage, InputToolbar, Bubble } from "react-native-gifted-chat";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icons } from '../../Assets';
import MessageOptionsModal from '../../Component/ChatModal';
import CustomModal from "../../Component/CustomModal";
import styles from "./style";
import DetailOptionsModal from "../../Component/DetailModal";
import string from "../../Utils/string";
import color from "../../Theme/color";


interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface ChatProps {
  userId: number;
  onBack: () => void;
  handleBack: () => void;
  selectedUser: User;
}
interface IMessage {
  _id: string;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
  };
  deletedBy?: string;
  emoji?: string;
}
const Chat: React.FC<ChatProps> = ({ userId, onBack, handleBack, selectedUser }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<IMessage | null>(null);
  const [confirmDeleteModalVisible, setConfirmDeleteModalVisible] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [confirmDeleteAllModalVisible, setConfirmDeleteAllModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    loadMessages(userId);
  }, [userId]);

  const loadMessages = async (userId: number) => {
    try {
      const storedMessages = await AsyncStorage.getItem(`messages_${userId}`);
      const parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
      setMessages(parsedMessages);
    } catch (e) {
      console.log(e);
    }
  };





  const onSend = async (newMessages: IMessage[] = []) => {
    if(inputText.trim().length===0) return;
    setMessages(previousMessages => {
      const updatedMessages = GiftedChat.append(previousMessages, newMessages);
      saveMessages(userId, updatedMessages);
      return updatedMessages;
    });

    setInputText('');

    try {
      const storedChats = await AsyncStorage.getItem('activeChats');
      const activeChats = storedChats ? JSON.parse(storedChats) : [];
      const isUserAlreadyInChats = activeChats.some(
        (chatUser: User) => chatUser.id === selectedUser.id
      );

      if (!isUserAlreadyInChats) {
        const updatedChats = [...activeChats, selectedUser];
        await AsyncStorage.setItem('activeChats', JSON.stringify(updatedChats));
      }
    } catch (error) {
      console.log('Error saving active chat:', error);
    }
  };


  const saveMessages = async (userId: number, messages: IMessage[]) => {
    try {
      await AsyncStorage.setItem(`messages_${userId}`, JSON.stringify(messages));
    } catch (e) {
      console.log(e);
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };


  const deleteChat = async (messageId: string) => {
    try {
      const updatedMessages = messages.map(message => {
        if (message._id === messageId) {
          return {
            ...message,
            text: 'This message was deleted.',
            deletedBy: 'You',
          };
        }
        return message;
      });
      setMessages(updatedMessages);
      await saveMessages(userId, updatedMessages);
    } catch (error) {
      console.error('Failed to delete chat:', error);
    }
  };


  const handleMessageLongPress = (context, message) => {
    setSelectedMessage(message);
    setModalVisible(true);
  };

  const handleDelete = () => {
    if (selectedMessage) {
      setModalVisible(false);
      setConfirmDeleteModalVisible(true);
    }
  };

  const confirmDelete = () => {
    if (selectedMessage) {
      deleteChat(selectedMessage._id);
      setConfirmDeleteModalVisible(false);
    }
  };
  const deleteAllChats = async () => {
    try {
      await AsyncStorage.removeItem(`messages_${userId}`);
      setMessages([]);
    } catch (error) {
      console.error('Failed to delete all chats:', error);
    }
  };

  const handleDeleteAll = () => {
    setConfirmDeleteAllModalVisible(true);
    setDetailModal(false);
  };

  const confirmDeleteAll = () => {
    deleteAllChats();
    setConfirmDeleteAllModalVisible(false);
  };



  const renderInputToolbar = (props: any) => {
    return (
      <View style={styles.inputToolbarContainer}>
        <TouchableOpacity style={styles.addIconContainer}>
          <Image source={Icons.add} style={styles.addIcon} />
        </TouchableOpacity>
        <InputToolbar
          {...props}
          containerStyle={[styles.inputToolbar, { borderTopWidth: 0 }]}
          text={inputText}
          onTextChanged={(text: string) => setInputText(text)}
        />
        <TouchableOpacity onPress={() => {
          props.onSend({ text: inputText });
          setInputText('');
        }}>
          <View style={styles.imgContainer}>
            <Image
              source={Icons.send}
              style={styles.sendIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };



  const renderBubble = (props: any) => {
    const { currentMessage } = props;
    const isDeletedMessage = currentMessage.deletedBy !== undefined;
    return (


      <View style={{ marginBottom: 10 }}>
        {currentMessage.emoji && (
          <View style={styles.emojiAboveMessage}>
            <Text>{currentMessage.emoji}</Text>
          </View>
        )}
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: isDeletedMessage ? color.grey : color.primary,
              borderTopRightRadius: 0,
              marginBottom: 10,
            },
            left: {
              backgroundColor: isDeletedMessage ? '#ffcccc' : '#e6e6e6',
            },
          }}
        />
      </View>
    );
  };
  const handleEmojiSelect = (emoji: string) => {
    if (selectedMessage) {
      const updatedMessages = messages.map(message =>
        message._id === selectedMessage._id
          ? { ...message, emoji: emoji }
          : message
      );
      setMessages(updatedMessages);
      setModalVisible(false);
      saveMessages(userId, updatedMessages);
    }
  };


  const handledetailModal = () => {
    setDetailModal(true);
  }
  const handleConfirmDeleteAllModalVisible = () => {
    setConfirmDeleteAllModalVisible(false)
  }
  const handleDetailModal = () => setDetailModal(false)
  const handleConfirmDeleteModal = () => setConfirmDeleteModalVisible(false)
  return (

    <View style={styles.chatContainer}>
      <View style={styles.header}>
        <View style={styles.left}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image source={Icons.blackarrow} />
          </TouchableOpacity>
          <View style={styles.initialsContainer}>
            <Text style={styles.initialsText}>
              {getInitials(selectedUser.firstName, selectedUser.lastName)}
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{selectedUser.firstName}</Text>
            <Text style={styles.userName}>{selectedUser.lastName}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.detailContainer} onPress={handledetailModal}>
          <Image style={styles.detail} source={Icons.detail} />
        </TouchableOpacity>
      </View>

      <GiftedChat
        alignTop={true}
        messages={messages || []}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1, name: "You" }}
        renderInputToolbar={renderInputToolbar}
        renderBubble={renderBubble}
        renderSend={() => <></>}
        renderUsernameOnMessage
        alwaysShowSend={false}
        onLongPress={(context, message) => handleMessageLongPress(context, message)}
      />


      <MessageOptionsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onDelete={handleDelete}
        onEmojiSelect={
          handleEmojiSelect}

      />
      {detailModal &&
        <DetailOptionsModal
          visible={detailModal}
          onClose={handleDetailModal}
          onDelete={handleDeleteAll}
        />}
      {confirmDeleteModalVisible && <CustomModal
        visibility={confirmDeleteModalVisible}
        onClose={handleConfirmDeleteModal}
        image={Icons.delete}
        Heading={string.confirmdelete}
        text={string.deleteare}
        buttonText={string.delete}
        buttonText2={string.cancel}
        onPress={confirmDelete}
        onPress2={handleConfirmDeleteModal}
      />}
      {confirmDeleteAllModalVisible && (
        <CustomModal
          visibility={confirmDeleteAllModalVisible}
          onClose={handleConfirmDeleteAllModalVisible}
          image={Icons.delete}
          Heading={string.deleteall}
          text={string.deleteallconfirm}
          buttonText={string.delete_all}
          buttonText2={string.cancel}
          onPress={confirmDeleteAll}
          onPress2={handleConfirmDeleteAllModalVisible}
        />
      )}
    </View>

  );
};

export default Chat;






