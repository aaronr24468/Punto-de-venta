import { View, TextInput, Pressable, StatusBar, Image, Text } from "react-native";
import { style } from "../../../styles/addProductStyle";
import { useNavigation } from "@react-navigation/native";
import { useAddProduct } from "../../../hooks/addProductHook";

import back from '../../../assets/back.png';
import upload from '../../../assets/uploadImage.png'
import { FormDataProduct } from "./form";


export const AddProduct = ({ }) => {
    const navigate = useNavigation();
    const { getImageData, image} = useAddProduct();

    return (
        <View style={style.mainViewAdd}>
            <StatusBar hidden={true} />
            <View style={style.headerAddProd}>
                <Pressable style={style.backBtn} onPress={() => navigate.goBack()}>
                    <Image source={back} style={style.imageBack} />
                    <Text style={style.textAddProd}>Atras</Text>
                </Pressable>
            </View>
            <View style={style.formData}>

                <View style={style.imageUploadContainer}>
                    <Pressable style={style.uploadImageBtn} onPress={getImageData}>
                        {image === null? (<Image source={upload} style={style.imageUpload}/>):(<Image source={{uri: image}} style={style.imageSelected}/>)}
                        {image === null? (<Text>Subir imagen</Text>):('')}
                    </Pressable>
                </View>

                <View style={style.formulario}>
                    <FormDataProduct />
                </View>

            </View>
        </View>
    )
}