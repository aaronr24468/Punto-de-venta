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
        height: 'auto',
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
        height: 'auto',
        padding: 20,
        gap: 15
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
        height: 50,
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
        top: 10
    },



    inputCodeBar:{
        width: '100%',
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 15,
        textAlignVertical: 'center',
        textDecorationLine: 'none',
    },
    codeBar:{
        width: 40,
        height: 40,
        position: 'absolute',
        right: 5,
        top: 5
    },
    pickerContainer:{
        width: '100%',
        height: 'auto',
        borderWidth: 2,
        borderColor: 'rgb(0,0,0)',
        borderRadius: 10,
        backgroundColor: 'rgb(228, 228, 228)'
    },



    amountContainer:{
        width: '100%',
        height: 50,
    },
    amountInputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    inputAmount:{
        width: '60%',
        height: 50,
        borderWidth: 2,
        borderColor: 'rgb(0,0,0)',
        borderRadius: 10,
        paddingLeft: 10
    },
    containerButtons:{
        width: 'auto',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnLess:{
        width: 60,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgb(0,0,0)',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    btnMore:{
        width: 60,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgb(0,0,0)',
        borderBottomRightRadius: 10,
        borderTopEndRadius: 10
    },
    fontBtn:{
        fontSize: 20,
        fontWeight: '600'
    },


    saveProductContainer:{
        width: '100%',
        height: 'auto',
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSave:{
        width: 250,
        height: 40,
        boxShadow: '0px 0px 5px 0px rgb(0,0,0)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(0, 174, 255)'
    },
    textSave:{
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    }
})