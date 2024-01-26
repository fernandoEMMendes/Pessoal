import { Image, ImageBackground, StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
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

          <View style={styles.separadorGrande} />

          <View style={styles.separador}></View>
          <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Cardapio")}>
            <Text style={styles.botaoTexto}>Cardápio</Text>
          </TouchableOpacity>

          <View style={styles.separador}></View>
          <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("QuemSomos")}>
            <Text style={styles.botaoTexto}>Quem Somos</Text>
          </TouchableOpacity>

          <View style={styles.separador}></View>
          <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Contato")}>
            <Text style={styles.botaoTexto}>Contato</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>

    )
  }

  function Cardapio({ navigation }) {
    return (
      <SafeAreaView>
        <ScrollView>
          <ImageBackground
            source={require("./src/imgs/coffeeShop.jpg")}
            style={styles.backgroundImage}>

            <View style={styles.ajustarTela}>
              <Text style={styles.titulo}>Cardapio</Text>

              <TouchableOpacity activeOpacity={0.8} style={styles.botaoMenu} onPress={() => navigation.navigate("Detalhe")}>
                <View style={styles.ajustarMenu}>
                  <Image
                    source={require("./src/imgs/expresso.jpg")}
                    style={styles.imagem} />
                  <Text style={styles.itemMenu}>Expresso</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.ajustarMenu}>
                <Image
                  source={require("./src/imgs/latte.png")}
                  style={styles.imagem} />
                <Text style={styles.itemMenu}>Latte</Text>
              </View>

              <View style={styles.ajustarMenu}>
                <Image
                  source={require("./src/imgs/macchiato.jpg")}
                  style={styles.imagem} />
                <Text style={styles.itemMenu}>Macchiato</Text>
              </View>

              <View style={styles.ajustarMenu}>
                <Image
                  source={require("./src/imgs/mocca.png")}
                  style={styles.imagem} />
                <Text style={styles.itemMenu}>Mocaccino</Text>
              </View>

              <View style={styles.ajustarMenu}>
                <Image
                  source={require("./src/imgs/frappe.png")}
                  style={styles.imagem} />
                <Text style={styles.itemMenu}>Frappe</Text>
              </View>

              <View style={styles.ajustarMenu}>
                <Image
                  source={require("./src/imgs/irish.png")}
                  style={styles.imagem} />
                <Text style={styles.itemMenu}>Irlandês</Text>
              </View>

              <View style={styles.ajustarMenu}>
                <Image
                  source={require("./src/imgs/martini.jpg")}
                  style={styles.imagem} />
                <Text style={styles.itemMenu}>Martini</Text>
              </View>

              <View style={styles.ajustarMenu}>
                <Image
                  source={require("./src/imgs/gelado.jpg")}
                  style={styles.imagem} />
                <Text style={styles.itemMenu}>Gelado</Text>
              </View>
            </View>

            <View style={styles.separador}></View>
            <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Contato")}>
              <Text style={styles.botaoTexto}>Contato</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Home")}>
              <Text style={styles.botaoTexto}>Voltar</Text>
            </TouchableOpacity>

          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    )
  }

  function QuemSomos({ navigation }) {
    return (

      <ImageBackground
        source={require("./src/imgs/coffeeShop.jpg")}
        style={styles.backgroundImage}>
        <View style={styles.ajustarTela}>
          <Text style={styles.titulo}>Quem Somos?</Text>
          <Text style={styles.descricao}>Junior Barbosa</Text>
          <Text style={styles.descricao2}>Filho de fámilia simples, cheio de esperança e acima de tudo: amante do café</Text>
          <Text style={styles.descricao}>Maria Antonia</Text>
          <Text style={styles.descricao2}>Irmã de Junior e criadora da cafeteria Café Barbosa, "Começou como uma piada entre fámilia e acabou como um sonho"</Text>
        </View>

        <View style={styles.separador}></View>
        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>

      </ImageBackground>

    )
  }

  function Contato({ navigation }) {
    return (

      <ImageBackground
        source={require("./src/imgs/coffeeShop.jpg")}
        style={styles.backgroundImage}>
        <View style={styles.ajustarTela}>
          <Text style={styles.titulo}>Contatos</Text>

          <View style={styles.ajustarContato}>
            <Image
              source={require("./src/imgs/instagram.png")}
              style={styles.imagem} />
            <Text style={styles.itemContato}>@CafeBarbosa</Text>
          </View>

          <View style={styles.ajustarContato}>
            <Image
              source={require("./src/imgs/whatsapp.png")}
              style={styles.imagem} />
            <Text style={styles.itemContato}>(14)555-1789</Text>
          </View>

        </View>

        <View style={styles.separador}></View>

        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Cardapio")}>
          <Text style={styles.botaoTexto}>Cardápio</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>

      </ImageBackground>

    )
  }

  function Detalhe({ navigation }) {
    return (
      <ImageBackground
        source={require("./src/imgs/coffeeShop.jpg")}
        style={styles.backgroundImage}>
        <View style={styles.ajustarTela}>
          <View>
            <Text style={styles.tituloDetalhe}>Expresso</Text>
          </View>

          <View style={styles.ajustarDetalhe}>
            <Image style={styles.imagemDetalhe} source={require("./src/imgs/expresso.jpg")} />
          </View>

          <View style={styles.separador} />

          <View>
            <Text style={styles.itemDetalhe}>Nosso café expresso é a escolha perfeita para aqueles que buscam um momento de puro prazer e vitalidade.</Text>
            <Text style={styles.itemDetalhe}>Seja para começar o dia com o pé direito ou para um rápido reabastecimento de energia</Text>
          </View>

        <View style={styles.separadorGrande} />

          <View>
            <Text style={styles.itemDetalhe}>R$: 2,50 (Xícara)</Text>
            <Text style={styles.itemDetalhe}>R$: 5,00 (Xícara Grande)</Text>
          </View>

        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Cardapio")}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
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
        <Stack.Screen name='Contato' component={Contato} options={{ headerShown: false }} />
        <Stack.Screen name='Detalhe' component={Detalhe} options={{ headerShown: false }} />
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

  separadorGrande: {
    marginTop: 100,
  },

  separadorPequeno: {
    marginTop: 10
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

  imagem: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 15
  },

  botaoForma: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#1E90FF',
  },


  botaoTexto: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  //Cardapio
  ajustarMenu: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  itemMenu: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 15
  },

  //Quem Somos
  descricao: {
    color: "cyan",
    fontSize: 40,
    textAlign: "center",
  },

  descricao2: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },

  //Contato
  ajustarContato: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  itemContato: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 15
  },

  //detalhe
  ajustarDetalhe: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  imagemDetalhe: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },

  tituloDetalhe: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
    textShadowColor: "red",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    padding: 20,
  },

  itemDetalhe: {
    textAlign: 'justify',
    textAlignVertical: "center",
    color: "white",
    fontSize: 25,
  },

});
