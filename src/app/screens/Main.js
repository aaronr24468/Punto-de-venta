import { View, Text, ScrollView, StatusBar, Pressable, Image, TextInput } from "react-native";
import { useMain } from "../../hooks/useMain";
import { style } from "../../styles/mainStyles";
import options from '../../assets/options.png';
import search from '../../assets/search.png';
import exit from '../../assets/exit.png'

export const MainPuntoDeVenta = () => {
    const { getProductsList, searchI, SetSearchI } = useMain();



    return (
        <View style={style.mainComponent}>
            <StatusBar hidden={true} />

            <Pressable style={style.options}>
                <Image source={options} style={style.optionsSvg} />
            </Pressable>

            <View style={style.totalComponent}>
                <View style={style.totalAmountContainer}>
                    <Text style={style.textAmount}>$0.00</Text>
                </View>
            </View>


            <ScrollView style={style.scrollList} showsVerticalScrollIndicator={false}>
                <View style={style.searchMainContainer}>

                    <View style={style.searchContainer}>

                        {searchI && <View style={style.inputContainer}>

                            <View style={style.inputSearchContainer}>
                                <TextInput placeholder="Buscar producto" style={style.inputSearchItem} />
                                <Pressable style={style.exitSeachItem} onPress={() => SetSearchI(false)}> 
                                    <Image source={exit} style={style.exitBtn}/>
                                </Pressable>
                            </View>

                        </View>}
                        

                        <Pressable style={style.searchBtn} onPress={() => SetSearchI(true)}>
                            <Image source={search} style={style.imageSearch} />
                        </Pressable>
                    </View>

                </View>

            </ScrollView>



            <Pressable style={style.sellFinish}>
                <Text>Finalizar Venta</Text>
            </Pressable>
        </View>
    )
}