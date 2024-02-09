import { Image, ImageBackground, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./CardapioCSS"

export default function Cardapio() {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={require("../../imgs/coffeeShop.jpg")}
                    style={styles.backgroundImage}>

                    <View style={styles.ajustarTela}>
                        <Text style={styles.titulo}>Cardapio</Text>

                        <TouchableOpacity activeOpacity={0.8} style={styles.botaoMenu} onPress={() => navigation.navigate("Detalhe")}>
                            <View style={styles.ajustarMenu}>
                                <Image
                                    source={require("../../imgs/expresso.jpg")}
                                    style={styles.imagem} />
                                <Text style={styles.itemMenu}>Expresso</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.ajustarMenu}>
                            <Image
                                source={require("../../imgs/latte.png")}
                                style={styles.imagem} />
                            <Text style={styles.itemMenu}>Latte</Text>
                        </View>

                        <View style={styles.ajustarMenu}>
                            <Image
                                source={require("../../imgs/macchiato.jpg")}
                                style={styles.imagem} />
                            <Text style={styles.itemMenu}>Macchiato</Text>
                        </View>

                        <View style={styles.ajustarMenu}>
                            <Image
                                source={require("../../imgs/mocca.png")}
                                style={styles.imagem} />
                            <Text style={styles.itemMenu}>Mocaccino</Text>
                        </View>

                        <View style={styles.ajustarMenu}>
                            <Image
                                source={require("../../imgs/frappe.png")}
                                style={styles.imagem} />
                            <Text style={styles.itemMenu}>Frappe</Text>
                        </View>

                        <View style={styles.ajustarMenu}>
                            <Image
                                source={require("../../imgs/irish.png")}
                                style={styles.imagem} />
                            <Text style={styles.itemMenu}>Irlandês</Text>
                        </View>

                        <View style={styles.ajustarMenu}>
                            <Image
                                source={require("../../imgs/martini.jpg")}
                                style={styles.imagem} />
                            <Text style={styles.itemMenu}>Martini</Text>
                        </View>

                        <View style={styles.ajustarMenu}>
                            <Image
                                source={require("../../imgs/gelado.jpg")}
                                style={styles.imagem} />
                            <Text style={styles.itemMenu}>Gelado</Text>
                        </View>

                        <View style={styles.separador}></View>
                        <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Contato")}>
                            <Text style={styles.botaoTexto}>Contato</Text>
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