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
})