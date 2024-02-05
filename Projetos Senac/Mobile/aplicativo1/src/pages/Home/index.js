import { ImageBackground, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./HomeCSS.js"

export default function Home() {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={require("../../imgs/coffeeShop.jpg")}
                    style={styles.backgroundImage}>

                    <View style={styles.ajustarTela}>

                        <View style={styles.separadorGrande} />

                        <Text style={styles.titulo}>Café Barbosa</Text>
                        <Text style={styles.subTitulo}>Desde 1998</Text>

                        <View style={styles.separadorGrande} />

                        <View style={styles.separadorPequeno}></View>
                        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Cardapio")}>
                            <Text style={styles.botaoTexto}>Cardápio</Text>
                        </TouchableOpacity>

                        <View style={styles.separadorPequeno}></View>
                        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Contato")}>
                            <Text style={styles.botaoTexto}>Contato</Text>
                        </TouchableOpacity>

                        <View style={styles.separador} />

                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}