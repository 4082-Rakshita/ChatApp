import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ListRenderItem, TextInput, TouchableOpacity, Image } from "react-native";
import { NavigationProp, RouteProp } from '@react-navigation/native';
import usersData from '../../Contact.json';
import { Icons } from "../../Assets";
import styles from './style';
import Chat from '../Chat';
import string from "../../Utils/string";

interface User {
  id: number;            
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface ContactProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const ContactList: React.FC<ContactProps> = ({ navigation, route }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(route.params?.user || null);

  useEffect(() => {
    const allUsers = usersData.users.map(user => ({
      id: Number(user.id),    
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    }));
    
    setUsers(allUsers);
    setFilteredUsers(allUsers);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredUsers([]);
    } else {
      const filtered = users.filter(user =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  const handleBack = () => {
    navigation.navigate('Menu');
  };

  const renderItem: ListRenderItem<User> = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedUser(item)} style={styles.userContainer}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initialsText}>
          {getInitials(item.firstName, item.lastName)}
        </Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.userPhone}>{item.phoneNumber}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedUser ? (
        <Chat 
          userId={selectedUser.id} 
          onBack={handleBack} 
          handleBack={handleBack} 
          selectedUser={selectedUser} 
        />
      ) : (
        <>
          <View style={styles.searchView}>
            <TouchableOpacity onPress={handleBack} style={styles.top}>
              <Image style={styles.back} source={Icons.blackarrow} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchBar}
              placeholder={string.searchHere}
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>

          {searchQuery.length > 0 ? (
            filteredUsers.length > 0 ? (
              <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id.toString()} 
                renderItem={renderItem}
                style={styles.userList}
              />
            ) : (
              <View style={styles.noContactsContainer}>
                <Image style={styles.noresult} source={Icons.noresult} />
                <Text style={styles.noContactsText}>{string.nocontact}</Text>
              </View>
            )
          ) : null}
        </>
      )}
    </View>
  );
};

export default ContactList;
