import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },

    separador: {
        marginTop: 50,
    },

    separadorGrande: {
        marginTop: 139.7,
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
    
    imagem2: {
        width: 70,
        height: 70,
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
})