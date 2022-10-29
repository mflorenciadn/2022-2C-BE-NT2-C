import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Platform
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//////////////////
// Con FlatList //
//////////////////
const NotificationItem = ({
  user,
  backgroundColor,
  textColor,
  iconColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.notificationItem, backgroundColor]}
    >
      <MaterialCommunityIcons
        style={styles.followerIcon}
        name="account-multiple-plus"
        color={iconColor}
      />
      <Text style={[styles.notificationText, textColor]}>
        {user} ha comenzado a seguirte
      </Text>
    </TouchableOpacity>
  );
};

export default function NotificationsScreen() {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const API_HOST = "https://randomuser.me/api"; 
  
  // Cada vez que la variable currentPage cambie, se va a ejecutar la función getUsers()
  useEffect(() => {
    getUsers();
 }, [currentPage]);


 // Cada vez que llega al final de la lista va a cambiar el número de página
  const loadMoreItems =  async () => {
    setCurrentPage(currentPage + 1);
  };

  // Va a obtener la data de los usuarios (para utilizar el nombre de cada uno en las notificaciones)
  const getUsers = () => {
    // Solicitud GET (Request)
    fetch(`${API_HOST}/?page=${currentPage}&results=20&seed=abc`)  // El query param seed es propio de la api que está utilizando, y permite generar el mismo conjunto de usuarios en cada llamado (por defecto la data es aleatoria)
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setUsers([...users, ...json.results])) // sumar los datos de la página actual al array de usuarios ya existente
      .catch((err) => console.log("Solicitud fallida: ", err)); //  capturar errores
  };

  const renderItem = ({ item }) => {
    //Se aplican estilos particulares si el item está seleccionado (si el usuario lo presionó)
    const backgroundColor =
      item.id === selectedItemId ? "#009b97" : "transparent";
    const color = item.id === selectedItemId ? "white" : "black";
    const iconColor = item.id === selectedItemId ? "#fdfdfd" : "#009b97";

    return (
      <NotificationItem
        user={item.name?.first}
        onPress={() => setSelectedItemId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
        iconColor={{iconColor}}
      />
    );
  };

  const renderLoader = () => {
    return (
        <ActivityIndicator size="large" color="#009b97" style={styles.loader}  />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
      <FlatList
        style={styles.notificationsList}
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => users.indexOf(item)}
        removeClippedSubviews
        ListFooterComponent={renderLoader} 
        onEndReached={loadMoreItems} // Función que se va a ejecutar al llegar al final de la lista 
        onEndReachedThreshold={0.2} // Permite que la función onEndReached se ejecute un momento antes de llegar al final de la lista, para evitar una "traba" cuando llega al final (mejora la experiencia). El número es la distancia que queda en el scroll para llegar el final del contenido
        initialNumToRender={20} 
        ItemSeparatorComponent={
          Platform.OS !== "android" &&
          (({ highlighted }) => (
            <View
              style={[styles.separator, highlighted && { marginLeft: 0 }]}
            />
          ))
        }
      />
    </View>
  );
}

////////////////////
// Con ScrollView //
////////////////////

// export default function NotificationsScreen() {

// const NotificationItem = ({
//   notification,
// }) => {
//   return (
//     <View style={styles.notificationItem}
//     >
//       <MaterialCommunityIcons
//         style={styles.followerIcon}
//         name="account-multiple-plus"
//         color="teal"
//       />
//       <Text style={styles.notificationText}>{notification}</Text>
//     </View>
//   );
// };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Notificaciones</Text>
//       <ScrollView style={styles.notificationsList} showsHorizontalScrollIndicator={false}>
//         {notifications.map((notification, index) => (
//           <NotificationItem key={index} notification={notification} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: "10%",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    margin: "5%"
  },
  notificationsList: {
    paddingVertical: "2%",
  },
  notificationItem: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    flexDirection: "row",
  },
  followerIcon: {
    marginVertical: "5%",
    marginLeft: "5%",
  },
  notificationText: {
    margin: "5%",
  },
  loader: {
    marginVertical: 10,
    alignItems: "center",
  },
});

