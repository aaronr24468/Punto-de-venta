import { View, TextInput, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Picker } from "@react-native-picker/picker";
import { style } from "../../../styles/inventoryStyle";

export const EdtiProduct = ({image}) =>{
    return(
        <View style={style.uploadnewPhoto}>
            <Pressable style={style.btnUploadNewPhoto}>
                <Image style={style.imageEdit} source={{uri: image}}/>
            </Pressable>
        </View>
    )
}