import { SafeAreaView, ScrollView, Image, ImageBackground, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./DetalheCSS"

export default function Detalhe() {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={require("../../imgs/coffeeShop.jpg")}
                    style={styles.backgroundImage}>
                    <View style={styles.ajustarTela}>
                        <View>
                            <Text style={styles.tituloDetalhe}>Expresso</Text>
                        </View>

                        <View style={styles.ajustarDetalhe}>
                            <Image style={styles.imagemDetalhe} source={require("../../imgs/expresso.jpg")} />
                        </View>

                        <View style={styles.separador} />

                        <View>
                            <Text style={styles.itemDetalhe}>Nosso café expresso é a escolha perfeita para aqueles que buscam um momento de puro prazer e vitalidade.</Text>
                            <Text style={styles.itemDetalhe}>Seja para começar o dia com o pé direito ou para um rápido reabastecimento de energia</Text>
                        </View>

                        <View style={styles.separadorGrande} />

                        <View>
                            <Text style={styles.itemDetalhe}>R$: 2,50 (Xícara)</Text>
                        </View>

                    </View>

                    <View style={styles.separadorPequeno} />

                    <TouchableOpacity activeOpacity={0.8} style={styles.botaoForma} onPress={() => navigation.navigate("Cardapio")}>
                        <Text style={styles.botaoTexto}>Voltar</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}