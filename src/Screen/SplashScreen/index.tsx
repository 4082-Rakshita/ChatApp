import React, { useEffect, useState } from "react";
import { View, Image, Text } from 'react-native';
import { Images } from "../../Assets"
import styles from "./style";
import string from "../../Utils/string";

const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(true);

  const hideSplashScreen = () => {
    setIsVisible(false);
  };

  const navigateBasedOnState = ()=> {
 
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      hideSplashScreen();
      navigateBasedOnState();
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.main}>
      <Image style={styles.image} source={Images.splash_img} />
      <View style={styles.logoContainer}>
        <Text style={styles.text}>{string.intercomm}</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
