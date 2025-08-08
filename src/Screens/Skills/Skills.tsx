import React from "react";
import { View, Image, Text, Pressable, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import image from "../../../assets/my-image.jpeg";

import { styles } from './SkillsStyle';

export function Skills() {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>Guilherme Miranda</Text>

    </View>
  );
}