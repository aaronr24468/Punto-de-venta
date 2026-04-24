import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {LoginComponent} from "../screens/login/login";
import { RegisterComponent } from "../screens/Register";
import { MainPuntoDeVenta } from "../screens/Main/Main";
import { Inventory } from "../screens/Inventory/inventory";

const Stack = createNativeStackNavigator();

export default function App(){
    

    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginComponent}/>
                <Stack.Screen name="Register" component={RegisterComponent}/>
                <Stack.Screen name="Main" component={MainPuntoDeVenta}/>
                <Stack.Screen name="Inventory" component={Inventory}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}