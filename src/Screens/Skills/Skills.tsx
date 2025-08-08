import React from "react";
import { View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import image from "../../../assets/my-image.jpeg";

import { styles } from "./SkillsStyle";
export function Skills() {
  // Lista de habilidades com nível (1 a 5)
  const skills = [
    { name: "JavaScript", level: 5 },
    { name: "TypeScript", level: 5 },
    { name: "React", level: 4 },
    { name: "React Native", level: 4 },
    { name: "Java", level: 5 },
    { name: "Spring Boot", level: 5 },
    { name: "Angular", level: 4 },
    { name: "AWS", level: 4 },
  ];

  // Função para renderizar as estrelas
  const renderStars = (level: number) => {
    return (
      <View style={{ flexDirection: "row" }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <MaterialCommunityIcons
            key={index}
            name={index < level ? "star" : "star-outline"} // estrela cheia ou vazia
            size={20}
            color={index < level ? "#FFD700" : "#ccc"} // amarelo para preenchida
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>Guilherme Miranda</Text>

      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillRow}>
            <Text style={styles.skillText}>{skill.name}</Text>
            {renderStars(skill.level)}
          </View>
        ))}
      </View>
    </View>
  );
}
