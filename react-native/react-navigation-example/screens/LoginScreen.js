import React, { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthProvider";

export function LoginForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const correctUser = {
    email: "test@test.com",
    password: "test",
  };

  const onSubmit = () => {
    const isIncompleteData = !email || !password;

    if (isIncompleteData) {
      Alert.alert("Acceso inválido", "Todos los campos son obligatorios");
      return;
    }

    try {
      if (email === correctUser.email && password === correctUser.password) {
        Alert.alert(`Hola ${user.name}`, "¡Te damos la bienvenida!");
        navigation.navigate("Drawer", {
          screen: "HomeScreen",
        });
      } else {
        Alert.alert(
          "Acceso inválido",
          "Correo electrónico y/o contraseña incorrecta"
        );
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <View>
      <Input
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType={"email-address"}
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        isPassword
      />
      <Button onPress={onSubmit} title="Iniciar sesión" />
    </View>
  );
}

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.formView}>
        <Text style={styles.title}>Login</Text>
        <LoginForm navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  formView: {
    marginBottom: 20,
    alignContent: "center",
  },
  title: {
    fontSize: 30,
    alignContent: "center",
    textAlign: "center",
    color: "teal",
    margin: 30,
  },
});
