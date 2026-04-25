import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    mainViewAdd: {
        flex: 1,
        flexDirection: 'column',
    },
    headerAddProd: {
        width: '100%',
        height: 80,
        backgroundColor: 'rgb(0, 174, 255)'
    },
    backBtn: {
        width: 'auto',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        gap: 5
    },
    imageBack: {
        width: 25,
        height: 25
    },
    textAddProd: {
        fontSize: 25,
        color: 'white'
    },

    formData: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 30
    },
    imageUploadContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadImageBtn: {
        width: '130',
        height: '130',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.34)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed'
    },
    imageUpload: {
        width: 80,
        height: 80
    },
    imageSelected: {
        width: '95%',
        height: '95%',
        borderRadius: 10
    },


    formulario: {
        width: '100%',
        height: '100%',
        padding: 20,
        gap: 10
    },
    nameProductContainer: {
        width: '100%',
        height: 'auto',
        gap: 2
    },
    nameProductText: {
        fontSize: 18,
        fontWeight: '600'
    },
    inputNameContainer: {
        width: '100%',
        height: 40,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
    },
    inputNameComponent:{
        width: '100%',
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 15,
        alignItems: 'center',
        textDecorationLine: 'none',
    },
    pen:{
        width: 30,
        height: 30,
        position: 'absolute',
        right: 10,
        top: 5
    },

    inputCodeBar:{
        width: '75%',
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 15,
        textAlignVertical: 'center',
        textDecorationLine: 'none',
    },
    containerBarLogo:{
        width: 80,
        height: '100%'
    },
    codeBar:{
        width: 40,
        height: 40,
    }
})