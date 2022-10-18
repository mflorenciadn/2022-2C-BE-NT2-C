import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  const isAuthenticated = false;
  const [name, setName] = useState("");

  const goHome = () => {
    navigation.navigate("HomeStack", { screen: "Home" });
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <Text style={styles.title}>¡Hola {name}!</Text>
      ) : (
        <Text style={styles.title}>¡Hola terrícola!</Text>
      )}
      <Text style={styles.subtitle}>
        Iniciá sesión para acceder a más contenido
      </Text>
      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate("Login")}
        color="teal"
      />
      <Button title="Ir al inicio" onPress={goHome} color="teal" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});
