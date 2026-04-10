import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {LoginComponent} from "../screens/login";
import { RegisterComponent } from "../screens/Register";
import { MainPuntoDeVenta } from "../screens/Main";

const Stack = createNativeStackNavigator();

export default function App(){
    

    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginComponent}/>
                <Stack.Screen name="Register" component={RegisterComponent}/>
                <Stack.Screen name="Main" component={MainPuntoDeVenta}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}