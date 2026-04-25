import { View, TextInput, Pressable, StatusBar, Image, Text } from "react-native";
import { style } from "../../../styles/addProductStyle";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import pencil from '../../../assets/pencil.png';
import barCode from '../../../assets/barCode.png'
import { useState } from "react";

export const FormDataProduct = ({ }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocusedBar, setIsFocusedBar] = useState(false)

    return (
        <>
            <View style={style.nameProductContainer}>
                <Text style={style.nameProductText}>Nombre del Producto</Text>
                <View style={style.inputNameContainer}>

                    <TextInput
                        style={
                            [style.inputNameComponent, {
                                borderColor: isFocused ? 'rgb(0, 162, 255)' : 'rgb(0, 0, 0)'
                            }]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />

                    <Image source={pencil} style={style.pen} />
                </View>
            </View>
            <View style={style.nameProductContainer}>
                <Text style={style.nameProductText}>SKU / Código de Barras</Text>
                <View style={style.inputNameContainer}>
                    <TextInput placeholder="SKU" 
                        style={[style.inputCodeBar,{borderColor: isFocusedBar ? 'rgb(0, 162, 255)' : 'rgb(0, 0, 0)'}]}
                        onFocus={() => setIsFocusedBar(true)}
                        onBlur={() => setIsFocusedBar(false)} 
                    />
                    <View style={style.containerBarLogo}>
                        <Image source={barCode} style={style.codeBar} />
                    </View>
                </View>
            </View>
        </>
    )
}