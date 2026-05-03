import { View, Text, ScrollView, StatusBar, Pressable, Image, TextInput, Modal } from "react-native";
import { useMain } from "../../../hooks/useMain";
import { style } from "../../../styles/mainStyles";
import options from '../../../assets/options.png';
import search from '../../../assets/search.png';
import out from '../../../assets/out.png';
import exit from '../../../assets/exit.png';

import { ModalOptions } from "./modal";


export const MainPuntoDeVenta = () => {
    const { getProductsList, searchI, SetSearchI, setShowModal, showModal, logOut } = useMain();

    return (
        <View style={style.mainComponent}>
            <StatusBar hidden={true} />

            <ModalOptions showModal={showModal} setShowModal={setShowModal} logOut={logOut}/>

            <Pressable style={style.options} onPress={() => showModal ? (setShowModal(false)) : (setShowModal(true))}>
                {showModal ? (<Image source={out} style={style.optionsSvg} />) : (<Image source={options} style={style.optionsSvg} />)}
            </Pressable>

            <View style={style.totalComponent}>
                <View style={style.totalAmountContainer}>
                    <Text style={style.textAmount}>$0.00</Text>
                </View>

                {searchI && <View style={style.inputContainer}>

                    <View style={style.inputSearchContainer}>
                        <TextInput placeholder="Buscar producto" style={style.inputSearchItem} />
                        <Pressable style={style.exitSeachItem} onPress={() => SetSearchI(false)}>
                            <Image source={exit} style={style.exitBtn} />
                        </Pressable>
                    </View>

                    <ScrollView style={style.listInventory}>
                        <View style={style.listInventoryContainer}>

                        </View>
                    </ScrollView>

                </View>}
            </View>


            <ScrollView style={style.scrollList} showsVerticalScrollIndicator={false}>
                <View style={style.searchMainContainer}>
                    {!searchI && <View style={style.searchContainer}>
                        <Pressable style={style.searchBtn} onPress={() => SetSearchI(true)}>
                            <Image source={search} style={style.imageSearch} />
                        </Pressable>
                    </View>}


                </View>

            </ScrollView>

            <Pressable style={style.sellFinish}>
                <Text>Finalizar Venta</Text>
            </Pressable>
        </View>
    )
}