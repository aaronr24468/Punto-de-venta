import { View, Text, ScrollView, StatusBar, Tabv } from "react-native";
import { useMain } from "../../hooks/useMain";
import { style } from "../../styles/mainStyles";

export const MainPuntoDeVenta = () => {
    const { getProductsList } = useMain();



    return (
        <View style={style.mainComponent}>
            <StatusBar hidden={true} />
            <View style={style.Total}>

            </View>
            <ScrollView style={style.scrollList} showsVerticalScrollIndicator={false}>
                
            
            </ScrollView>
            
        </View>
    )
}