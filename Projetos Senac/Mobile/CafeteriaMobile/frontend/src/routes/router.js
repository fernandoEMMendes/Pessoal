import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

import Home from "../pages/Home"
import Cardapio from "../pages/Cardapio"
import Contato from "../pages/Contato/"
import Detalhe from "../pages/Detalhe"

export default function Rotas() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Cardapio"
                component={Cardapio}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Contato"
                component={Contato}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Detalhe"
                component={Detalhe}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}