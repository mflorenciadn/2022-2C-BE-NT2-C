import React from "react";
import { Button, View, Alert, Image, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HelpScreen from "../screens/HelpScreen";
import HomeScreen from "../screens/HomeScreen";

function CustomDrawerContent(props) {
  const onLogout = () => {
    Alert.alert("Te vamos a extrañar", "Vuelva prontos");
  };

  const onPress = () => {
    Alert.alert(
      "Hola curioso",
      "Apretaste el botón, o sos curioso o sos estudioso",
      [
        {
          text: "Cancelar",
          onPress: () => Alert.alert("Se presionó el botón de cancelar"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert("El Alert se cerró al presionar fuera del dialog."),
      }
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: "row", marginBottom: 20}}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/astronaut.png")}
        />
        <Text style={{ fontSize: 20, fontWeight: "700", textAlignVertical: "auto", marginVertical: 25, color: "teal"}}>Nuevas Tecnologías 2</Text>
      </View>

      <DrawerItemList {...props} />
      <View style={{ margin: 20 }}>
        <Button title="Hace click!" onPress={onPress} color="teal" />
      </View>
      <DrawerItem label="Cerrar sesión" onPress={onLogout} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        itemStyle: {
          marginVertical: 5,
          marginHorizontal: 8,
          color: "#fdfdfd",
        },
        labelStyle: {
          fontSize: 50,
        },
        drawerStyle: {
          backgroundColor: "#dddddd",
          width: 350,
        },
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerTitle: "Te damos la bienvenida",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTitleAlign: "center",
          drawerActiveBackgroundColor: "#00808050",
          drawerActiveTintColor: "white"
        }}
      />
      <Drawer.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: "Centro de ayuda",
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </Drawer.Navigator>
  );
}
