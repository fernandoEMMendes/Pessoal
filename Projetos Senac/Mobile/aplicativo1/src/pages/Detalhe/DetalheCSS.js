import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        marginTop: 28
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