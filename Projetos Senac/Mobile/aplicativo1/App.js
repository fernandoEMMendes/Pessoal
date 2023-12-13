import { Image, ImageBackground, Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {

  function Home({ navegar}) {
    return (
      <ImageBackground
        source={require("./src/imgs/coffeeShop.jpg")}
        style={styles.backgroundImage}>

        <View style={styles.ajustarTela}>
          <Text style={styles.titulo}>Café Barbosa</Text>
          <Text style={styles.subTitulo}>Desde 1998</Text>
        </View>

        <View style={styles.separador}></View>
        <Button title='Cardápio' onPress={() => navegar.navigate("Cardapio")} />

      </ImageBackground>
    )
  }

  function Cardapio({ navegar }) {
    return (
      <ImageBackground
        source={require("./src/imgs/coffeeShop.jpg")}
        style={styles.backgroundImage}>

        <View style={styles.ajustarTela}>
          <Text style={styles.titulo}>Cardapio</Text>
        </View>

        <View style={styles.separador}></View>
        <Button title='Voltar' onPress={() => navegar.navigate("Home")} />

      </ImageBackground>
    )
  }

//problema no navegar.navigate

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Cardapio' component={Cardapio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },

  separador: {
    marginTop: 25,
  },

  ajustarTela: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "flex-center",
  },

  titulo: {
    
    color: "white",
    fontSize: 50,
    textAlign: 'center',
  },

  subTitulo: {
    color: "white",
    fontSize: 28,
    textAlign: "center"
  },
});
