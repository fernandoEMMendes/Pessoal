import { Image, ImageBackground, Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {

  function Home({ navigation }) {
    return (
      <ImageBackground
        source={require("./src/imgs/coffeeShop.jpg")}
        style={styles.backgroundImage}>

        <View style={styles.ajustarTela}>
          <Text style={styles.titulo}>Café Barbosa</Text>
          <Text style={styles.subTitulo}>Desde 1998</Text>


          <View style={styles.separador}></View>
          <Button title='Cardápio' onPress={() => navigation.navigate("Cardapio")} />

          <View style={styles.separador}></View>
          <Button title='Quem Somos' onPress={() => navigation.navigate("QuemSomos")} />
        </View>
      </ImageBackground>
    )
  }

  function Cardapio({ navigation }) {
    return (
      <ImageBackground
        source={require("./src/imgs/coffeeShop.jpg")}
        style={styles.backgroundImage}>

        <View style={styles.ajustarTela}>
          <Text style={styles.titulo}>Cardapio</Text>

          <View style={styles.ajustarMenu}>
            <Image
              source={require("./src/imgs/placeholder.png")}
              style={styles.imagem} />
            <Text style={styles.itemMenu}>Expresso</Text>
          </View>

          <View style={styles.separador}></View>
          <Button title='Voltar' onPress={() => navigation.navigate("Home")} />
        </View>

      </ImageBackground>
    )
  }

  function QuemSomos({ navigation }) {
    return (
      <ImageBackground
        source={require("./src/imgs/coffeeShop.jpg")}
        style={styles.backgroundImage}>
        <View style={styles.ajustarTela}>
          <Text style={styles.titulo}>Quem Somos?</Text>
        </View>

        <View style={styles.separador}></View>
        <Button title='Voltar' onPress={() => navigation.navigate("Home")} />
      </ImageBackground>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar translucent={false} />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Cardapio' component={Cardapio} options={{ headerShown: false }} />
        <Stack.Screen name='QuemSomos' component={QuemSomos} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //Geral
  backgroundImage: {
    flex: 1
  },

  separador: {
    marginTop: 25,
  },

  ajustarTela: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "flex-center",
    justifyContent: "center"
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

  //Cardapio
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  ajustarMenu: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  itemMenu: {
    color: "white",
    fontSize: 15,
  }
});
