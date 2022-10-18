import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import HelpScreen from "../screens/HelpScreen";
import HomeScreen from "../screens/HomeScreen";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
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
          fontSize: 30,
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
