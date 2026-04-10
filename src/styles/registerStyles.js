import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    RegisterComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    centerComponentInputs: {
        width: '100%',
        height: '100%',
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
        borderRadius: 10,
        flexDirection: 'column',
        paddingBottom: 200,
        overflow: 'hidden'
    },
    logoRegisterContainer: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputsTextsC: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        gap: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    scrollViewC:{
        width: '100%',
        height: '100%',
    },
    inputStyle:{
        width: '100%',
        height: 50,
        boxShadow: 'inset 0px 0px 5px 0px rgb(0,0,0)',
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        marginTop: 20
    },

    registerBtn:{
        width: '100%',
        height: 50,
        backgroundColor: 'rgb(68, 30, 240)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    textBtn:{
        color: 'white',
        fontWeight: '600',
        fontSize: 18
    }
})