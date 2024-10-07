import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../Screen/Home';
import FavouriteScreen from '../Screen/Favourite';
import AccountScreen from '../Screen/Account';
import MenuScreen from '../Screen/Menu';
import { Icons } from '../Assets'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        headerShown: false,
        title: 'HOME',
        tabBarIcon: ({ size}) => {
          return (
            <Image style={{ width: size, height: size }} source={Icons.home} />
          );
        },
      }} name="Home" component={HomeScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
          title: 'ACCOUNT',
          tabBarIcon: ({ size }) => {
            return (
              <Image style={{ width: size, height: size }} source={Icons.account} />
            );
          },
        }}
        name="Account" component={AccountScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
          title: 'FAVOURITE',
          tabBarIcon: ({ size }) => {
            return (
              <Image style={{ width: size, height: size }} source={Icons.favourite} />
            );
          },
        }}
        name="Favourite" component={FavouriteScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
          title: 'MENU',
          tabBarIcon: ({ size}) => {
            return (
              <Image style={{ width: size, height: size }} source={Icons.menu} />
            );
          },
        }}
        name="Menu" component={MenuScreen} />

    </Tab.Navigator>
  );
}
export default MyTabs;