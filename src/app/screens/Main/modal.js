import { View, Text, ScrollView, StatusBar, Pressable, Image, TextInput, Modal } from "react-native";
import { style } from "../../../styles/mainStyles";
import profile from '../../../assets/profile.png';
import employee from '../../../assets/employee.png';
import ticket from '../../../assets/receipt.png';
import inventory from '../../../assets/inventory.png';
import logout from '../../../assets/logout.png'
import { useNavigation } from "@react-navigation/native";

export const ModalOptions = ({showModal, setShowModal, logOut}) => {
    const nav = useNavigation();

    return (
        <View style={showModal ? (style.showModal) : (style.hideModal)}>
            <View style={showModal ? (style.backGModal) : (style.backGModalHidde)}>
                <View style={style.modalContainer} >
                    <View style={style.containerOptionsModal}>
                        <Pressable style={style.btnOption}>
                            <Image source={profile} style={style.imageModal} />
                            <Text>Perfil</Text>
                        </Pressable>
                        <Pressable style={style.btnOption}>
                            <Image source={employee} style={style.imageModal} />
                            <Text>Empleados</Text>
                        </Pressable>
                        <Pressable style={style.btnOption}>
                            <Image source={ticket} style={style.imageModal} />
                            <Text>Ticket</Text>
                        </Pressable>
                        <Pressable style={style.btnOption} onPress={() => nav.navigate('Inventory')}>
                            <Image source={inventory} style={style.imageModal} />
                            <Text>Inventario</Text>
                        </Pressable>
                    </View>
                    <View style={style.logOutContainer}>
                        <Pressable style={style.btnLogout} onPress={logOut}>
                            <Image source={logout} style={style.imgLogOut}/>
                            <Text>Cerrar sesion</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}