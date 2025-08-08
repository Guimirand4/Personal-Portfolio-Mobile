import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { BottomTabsRoutes } from "./src/Routes/Routes-Screen";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsRoutes />
    </NavigationContainer>
  );
}


