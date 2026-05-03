import { View, TextInput, ScrollView, Pressable, Text, StatusBar } from 'react-native';
import { Image } from 'expo-image';
import { style } from '../../../styles/inventoryStyle';
import { useNavigation } from '@react-navigation/native';
import { useInventory } from '../../../hooks/useInventory';

import back from '../../../assets/back.png';
import plus from '../../../assets/plus.png';
import pencil from '../../../assets/pencilWhite.png';

import { FilterInventory } from './filter';
import { ScrollProduct } from './scrollProducts';
import { EdtiProduct } from './editProduct';




export const Inventory = ({ }) => {
    const navigation = useNavigation();
    const { category,
        setCategory,
        setStock,
        stock,
        inventory,
        edit,
        setEdit,
        getProductById, 
        setImage, 
        image, 
        setName, 
        name, 
        setCategoryP, 
        categoryP, 
        setPrice, 
        price, 
        setQuantity, 
        quantity 
    } = useInventory();


    return (
        <>
            {!edit ? (
                <View style={style.InventoryContainer}>

                    <View style={style.headerInventory}>

                        <View style={style.headerBackContainer}>
                            <Pressable style={style.btnBack} onPress={() => navigation.goBack()}>
                                <Image source={back} style={style.backBtnImage} />
                                <Text style={style.InventoryText}>Inventario</Text>
                            </Pressable>
                        </View>

                        <View style={style.addProduct}>
                            <Text style={style.textInventoryS}>SECCIÓN DE INVENTARIO</Text>
                            <Pressable style={style.btnAddProduct} onPress={() => navigation.navigate('AddProduct')}>
                                <Image source={plus} style={style.plusImge} />
                                <Text style={style.textAddP}>Agregar Producto</Text>
                            </Pressable>
                        </View>

                        <View style={style.filterOPtions}>
                            <FilterInventory category={category} setCategory={setCategory} setStock={setStock} stock={stock} />
                        </View>

                        <ScrollProduct inventory={inventory} setEdit={setEdit} getProductById={getProductById} />
                    </View>

                </View>
            ) : (
                <View style={style.editProductContainer}>
                    <View style={style.headerEditComponent}>
                        <Pressable style={style.btnBackEdit} onPress={() => setEdit(false)}>
                            <Image source={back} style={style.imageBackEdit} />
                            <Text style={style.fontBtnBack}>Regresar</Text>
                        </Pressable>
                    </View>
                    <View style={style.editForm}>
                        <EdtiProduct image={image}/>
                    </View>
                </View>
            )}
        </>

    )
}