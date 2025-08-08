import React from "react";
import { View, Image, Text, Pressable, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import image from "../../../assets/my-image.jpeg";
import { styles } from "./HomeStyle";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>Guilherme Miranda</Text>

      <Pressable
        style={styles.iconButton}
        onPress={() => Linking.openURL("https://github.com/Guimirand4")}
      >
        <Icon name="github" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>GitHub</Text>
      </Pressable>

      <Pressable
        style={styles.iconButton}
        onPress={() => Linking.openURL("https://www.linkedin.com/in/guilherm4")}
      >
        <Icon name="linkedin" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>LinkedIn</Text>
      </Pressable>
      <Pressable
        style={styles.iconButton}
        onPress={() =>
          Linking.openURL(
            "mailto:guilhermemiranda419@gmail.com?subject=Portfólio&body=Olá, Guilherme! Gostaria de entrar em contato com você."
          )
        }
      >
        <Icon name="envelope" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>E-mail</Text>
      </Pressable>
    </View>
  );
}
