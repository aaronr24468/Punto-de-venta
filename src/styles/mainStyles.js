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
        zIndex: 10

    },
    optionsSvg: {
        width: '100%',
        height: "100%",
        objectFit: 'cover'
    },
    totalComponent: {
        width: '100%',
        height: '150',
        boxShadow: '0px 3px 10px 0px rgb(0,0,0)'
    },
    totalAmountContainer: {
        width: '100%',
        height: '150',
        padding: 20,
        justifyContent: 'center',
    },
    textAmount: {
        fontSize: 50
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
    inputContainer: {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        zIndex: 100,
        backgroundColor: 'white',
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
    },
    inputSearchContainer: {
        width: '100%',
        height: 'auto',
        position: 'relative'
    },
    inputSearchItem: {
        width: '100%',
        height: 60,
        fontSize: 20,
        paddingRight: 20,
        paddingLeft: 20
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
        backgroundColor: 'rgba(81, 255, 0, 0.5)'
    }

})