import { Pressable, Text, TextInput, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/registerStyles';
import { useRegisterUser } from '../../hooks/useRegister';

export const RegisterComponent = ({ }) => {
    const {getInfoRegister, setLastname,setName,setPassword,setPassword2,setUsername} = useRegisterUser();

    return (
        <View style={styles.RegisterComponent} >
            <View style={styles.centerComponentInputs} >

                <View style={styles.logoRegisterContainer}>
                    <Text>Logo</Text>
                </View>

                <KeyboardAvoidingView style={styles.inputsTextsC} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView style={styles.scrollViewC} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                        <TextInput style={styles.inputStyle} placeholder='Nombre' onChangeText={(value) => setName(value)} returnKeyType="next" />
                        <TextInput style={styles.inputStyle} placeholder='Apellido' onChangeText={(value) => setLastname(value)} returnKeyType="next" />
                        <TextInput style={styles.inputStyle} placeholder='Nombre de usuario' onChangeText={(value) => setUsername(value)} returnKeyType="next" />
                        <TextInput style={styles.inputStyle} placeholder='Contraseña' onChangeText={(value) => setPassword(value)} returnKeyType="next" />
                        <TextInput style={styles.inputStyle} placeholder='Corroborar Contraseña' onChangeText={(value) => setPassword2(value)} returnKeyType="done" />
                    </ScrollView>

                    <Pressable style={styles.registerBtn} onPress={getInfoRegister}>
                        <Text style={styles.textBtn}>Registrarse</Text>
                    </Pressable>
                </KeyboardAvoidingView>

            </View>
        </View>
    )
}