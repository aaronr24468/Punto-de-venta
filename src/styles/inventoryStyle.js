import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    InventoryContainer:{
        flex: 1,
        flexDirection: 'column'
    },
    headerInventory:{
        width: '100%',
        height: 'auto',
        gap: 30
    },


    headerBackContainer:{
        width: '100%',
        height: 'auto',
        backgroundColor: 'rgb(0, 174, 255)',
        paddingTop: 10
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
        fontSize: 25,
        flexWrap: 'wrap',
        fontWeight: '500'
    },
    btnAddProduct:{
        width:'auto',
        height: 50,
        backgroundColor: 'rgb(0, 174, 255)',
        borderRadius: 10,
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
    },


    filterOPtions:{
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        gap: 5,
        paddingRight: 10,
        paddingLeft: 10
    },
    filterContainer:{
        width: '50%',
        height: 'auto'
    },
    titleFilter:{
        fontSize: 17,
        fontWeight: 500
    },
    pickerStyle:{
        width: '100%',
        height: 'auto',
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
        borderRadius: 10
    }
})