import { View, TextInput, Pressable, StatusBar, Image, Text } from "react-native";
import { style } from "../../../styles/addProductStyle";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import pencil from '../../../assets/pencil.png';
import barCode from '../../../assets/barCode.png'
import { useState } from "react";

export const FormDataProduct = ({ setCategory, category, setQuantity, quantity }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocusedBar, setIsFocusedBar] = useState(false)
    const [isFocusedPrice, setIsFocusedPrice] = useState(false);
    const [isFocusedQuantity, setIsFocusedQuantity] = useState(false)

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
                        style={[style.inputCodeBar, { borderColor: isFocusedBar ? 'rgb(0, 162, 255)' : 'rgb(0, 0, 0)' }]}
                        onFocus={() => setIsFocusedBar(true)}
                        onBlur={() => setIsFocusedBar(false)}
                    />
                    <Image source={barCode} style={style.codeBar} />
                </View>
            </View>
            <View style={style.nameProductContainer}>
                <Text style={style.nameProductText}>Categoría:</Text>
                <View style={style.pickerContainer}>
                    <Picker selectedValue={category} onValueChange={(value, index) => setCategory(value)} >
                        <Picker.Item label='Frutas' value='Frutas' />
                        <Picker.Item label='Verduras' value='Verduras' />
                    </Picker>
                </View>
            </View>
            <View style={style.nameProductContainer}>
                <Text style={style.nameProductText}>Precio de Venta (MXN)</Text>
                <View style={style.inputNameContainer}>
                    <TextInput placeholder="$"
                        style={[style.inputCodeBar, { borderColor: isFocusedPrice ? 'rgb(0, 162, 255)' : 'rgb(0, 0, 0)' }]}
                        onFocus={() => setIsFocusedPrice(true)}
                        onBlur={() => setIsFocusedPrice(false)}
                    />
                </View>
            </View>
            <View style={style.amountContainer}>
                <Text style={style.nameProductText}>Cantidad de inventario</Text>
                <View style={style.amountInputContainer}>
                    <TextInput
                        style={[style.inputAmount, { borderColor: isFocusedQuantity ? 'rgb(0, 162, 255)' : 'rgb(0, 0, 0)' }]}
                        value={quantity}
                        onChangeText={(value) => setQuantity(value)}
                        onFocus={() => setIsFocusedQuantity(true)}
                        onBlur={() => setIsFocusedQuantity(false)}
                    />

                    <View style={style.containerButtons}>
                        <Pressable style={style.btnLess} onPress={() => setQuantity((value) => Number(value) > 0? String(Number(value) - 1): '0')}>
                            <Text style={style.fontBtn}>-</Text>
                        </Pressable>
                        <Pressable style={style.btnMore} onPress={() => setQuantity((value) => String(Number(value) + 1))}>
                            <Text style={style.fontBtn}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    )
}