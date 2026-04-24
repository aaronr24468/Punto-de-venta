import {View, TextInput, ScrollView, Pressable, Image, Text, StatusBar} from 'react-native';
import { style } from '../../../styles/inventoryStyle';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useInventory } from '../../../hooks/useInventory';

import back from '../../../assets/back.png';
import plus from '../../../assets/plus.png'




export const Inventory = ({}) =>{
    const navigation = useNavigation();
    const {category, setCategory, setStock, stock} = useInventory();

    return(
        <View style={style.InventoryContainer}>
            <StatusBar hidden={true}/>
            <View style={style.headerInventory}>
                <View style={style.headerBackContainer}>
                    <Pressable style={style.btnBack} onPress={() => navigation.goBack()}>
                        <Image source={back} style={style.backBtnImage}/>
                        <Text style={style.InventoryText}>Inventario</Text>
                    </Pressable>
                </View>
                <View style={style.addProduct}>
                        <Text style={style.textInventoryS}>SECCIÓN DE INVENTARIO</Text>
                        <Pressable style={style.btnAddProduct}>
                            <Image source={plus} style={style.plusImge}/>
                            <Text style={style.textAddP}>Agregar Producto</Text>
                        </Pressable>
                    </View>
                <View>

                </View>
            </View>
            <ScrollView>
                <View>

                </View>
            </ScrollView>
        </View>
    )
}