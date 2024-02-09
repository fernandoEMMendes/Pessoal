import { SafeAreaView, ScrollView, Image, ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ContatoCSS"

export default function Contato() {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={require("../../imgs/coffeeShop.jpg")}
                    style={styles.backgroundImage}>
                    <View style={styles.ajustarTela}>

                        <View style={styles.separadorGrande} />

                        <Text style={styles.titulo}>Contatos</Text>

                        <View style={styles.separadorGrande} />

                        <View style={styles.ajustarContato}>
                            <Image
                                source={require("../../imgs/instagram.png")}
                                style={styles.imagem} />
                            <Text style={styles.itemContato}>@CafeBarbosa</Text>
                        </View>

                        <View style={styles.ajustarContato}>
                            <Image
                                source={require("../../imgs/whatsapp.png")}
                                style={styles.imagem2} />
                            <Text style={styles.itemContato}>(14)555-1789</Text>
                        </View>

                        <View style={styles.separadorGrande}></View>

                        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Cardapio")}>
                            <Text style={styles.botaoTexto}>Cardápio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Home")}>
                            <Text style={styles.botaoTexto}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}