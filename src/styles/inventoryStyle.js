import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    InventoryContainer:{
        flex: 1,
        flexDirection: 'column'
    },
    headerInventory:{
        width: '100%',
        height: 'auto',
        gap: 10
    },


    headerBackContainer:{
        width: '100%',
        height: 'auto',
        backgroundColor: 'rgb(0, 174, 255)'
    },
    btnBack:{
        width: '50%',
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between'
    },
    backBtnImage:{
        width: 25,
        height: 25
    },
    InventoryText:{
        fontSize: 25,
        color: 'white'
    },

    addProduct:{
        width: '100%',
        height: 'auto',
        paddingRight: 30,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInventoryS:{
        width: '50%',
        fontSize: 30,
        flexWrap: 'wrap',
        fontWeight: '500'
    },
    btnAddProduct:{
        width:'auto',
        height: 50,
        backgroundColor: 'rgb(0, 174, 255)',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    plusImge:{
        width: 30,
        height: 30
    },
    textAddP:{
        color: 'white'
    }
})