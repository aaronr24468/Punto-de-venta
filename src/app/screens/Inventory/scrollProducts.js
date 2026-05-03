import { View, TextInput, ScrollView, Pressable, Text, StatusBar } from 'react-native';
import { Image } from 'expo-image';
import { style } from '../../../styles/inventoryStyle';

import back from '../../../assets/back.png';
import plus from '../../../assets/plus.png';
import pencil from '../../../assets/pencilWhite.png';

export const ScrollProduct = ({inventory, setEdit, getProductById}) => {

    return (
        <ScrollView contentContainerStyle={{
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 100,
            gap: 5
        }}>
            {inventory.map((element) => {
                return (
                    <Pressable key={element.id} style={style.products}>
                        <View style={style.constainerInfoProduct}>
                            <Image source={{ uri: element.image }} style={style.imageProduct} />
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: '500' }}>{element.name}</Text>
                                <Text style={{ fontSize: 16 }}>SKU:{element.sku}</Text>
                                <Text style={{ fontSize: 22, fontWeight: '600' }}>${element.price}</Text>
                                <Text style={{ fontSize: 16 }}>Stock: {element.quantity}</Text>
                            </View>
                        </View>

                        <View style={style.containerEditP}>
                            <Pressable style={style.btnEditProduct} onPress={() => (setEdit(true), getProductById(element.id))}>
                                <Image style={{ width: 20, height: 20 }} source={pencil} />
                                <Text style={{ color: 'white', fontSize: 18 }}>Editar</Text>
                            </Pressable>
                        </View>

                    </Pressable>
                )
            })}
        </ScrollView>
    )
}