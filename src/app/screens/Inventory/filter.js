import { View, TextInput, ScrollView, Pressable, Image, Text, StatusBar } from 'react-native';
import { style } from '../../../styles/inventoryStyle';
import { Picker } from '@react-native-picker/picker';

export const FilterInventory = ({ category, setCategory, setStock, stock }) => {

    return (
        <>
            <View style={style.filterContainer}>
                <Text style={style.titleFilter}>Filtrar por:</Text>
                <View style={style.pickerStyle}>
                    <Picker selectedValue={category} onValueChange={(itemValue, itemIndex) => setCategory(itemIndex)}>
                        <Picker.Item label='Frutas' value='Frutas' />
                        <Picker.Item label='Verduras' value='Verduras' />
                    </Picker>
                </View>

            </View>
            <View style={style.filterContainer}>
                <Text style={style.titleFilter}>Stock</Text>
                <View style={style.pickerStyle}>
                    <Picker selectedValue={category} onValueChange={(itemValue, itemIndex) => setCategory(itemIndex)} >
                        <Picker.Item label='Bajo < 10' value='< 10' />
                        <Picker.Item label='Bajo > 10' value='> 10' />
                    </Picker>
                </View>

            </View>
        </>
    )
}