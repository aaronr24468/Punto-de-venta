import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    mainComponent: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        position: 'relative',
        paddingBottom: 50,
        backgroundColor: 'white'
    },
    options: {
        position: 'absolute',
        right: 20,
        top: 20,
        width: 40,
        height: 40,
        zIndex: 10000

    },
    optionsSvg: {
        width: '100%',
        height: "100%",
        objectFit: 'cover'
    },
    showModal: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%',
        height: '100%',
        zIndex: 10000,
        backgroundColor: 'rgb(255, 255, 255)',

    },
    hideModal: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%',
        height: '100%',
        zIndex: 10000,
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
        transform: [{ translateX: '-100%' }]
    },
    backGModal: {
        width: '200%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    backGModalHidde: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(255, 255, 255)'
    },
    modalContainer: {
        width: '50%',
        height: '100%',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(0, 174, 255)',
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
    },
    containerOptionsModal: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        gap: 20
    },
    btnOption: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        boxShadow: '1px 1px 2px 0px rgba(0, 0, 0, 0.46)',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    imageModal: {
        width: 40,
        height: 40
    },


    totalComponent: {
        width: '100%',
        height: 'auto',
        boxShadow: '0px 3px 10px 0px rgb(0,0,0)',
        flexDirection: 'column',
        backgroundColor: 'rgb(0, 174, 255)',
    },
    totalAmountContainer: {
        width: '100%',
        height: '150',
        padding: 10,
        justifyContent: 'flex-end',
    },
    textAmount: {
        fontSize: 50
    },
    inputContainer: {
        width: '100%',
        height: 'auto',
        zIndex: 100,
        backgroundColor: 'white',
    },
    inputSearchContainer: {
        width: '100%',
        height: 'auto',
        position: 'relative',
    },
    inputSearchItem: {
        width: '100%',
        height: 60,
        fontSize: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    exitSeachItem: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 15,
        top: 15,
        boxShadow: '0px 3px 10px 0px rgb(0,0,0)',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exitBtn: {
        width: '80%',
        height: '80%'
    },
    listInventory:{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: 'inset 0px 0px 5px 0px rgb(0,0,0)'
    },
    listInventoryContainer:{
        width: '100%',
        height: '100%',
    },


    scrollList: {
        width: '100%',
        height: '100%',
        position: "relative",

    },
    searchMainContainer: {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: 0,
        zIndex: 10
    },
    searchContainer: {
        width: '100%',
        height: 'auto',
        position: 'relative'
    },
    searchBtn: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 15,
        top: 15,
        boxShadow: '0px 3px 10px 0px rgb(0,0,0)',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
    },
    imageSearch: {
        width: '80%',
        height: '80%'
    },


    sellFinish: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
        backgroundColor: 'rgb(0, 174, 255)',
    }

})