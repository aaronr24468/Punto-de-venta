import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { styles } from '../../../styles/loginStyles';
import { useLogin } from '../../../hooks/useLogin';
import { useNavigation } from '@react-navigation/native';


export const LoginComponent = () =>{

  const {loginUser,setPassword, setUsername} = useLogin();

  const navigate = useNavigation();

  return (
    <View style={styles.mainContainer}>

      <View style={styles.logoContainer}>
        <Text style={styles.logoFont}>Logo</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.containerInfoMain}>
          <View style={styles.inputUserContainer}>
            <TextInput placeholder='Usuario' style={styles.inputUsername} onChangeText={(value) => setUsername(value)}/>
          </View>
          <View style={styles.inputPasswordContainer}>
            <TextInput placeholder='Contraseña' style={styles.inputPassword} secureTextEntry={true} onChangeText={(value) => setPassword(value)}/>
          </View>
        </View>
        <Pressable style={styles.loginBtn} onPress={loginUser}>
          <Text>Entrar</Text>
        </Pressable>
      </View>

      <View style={styles.registerContainer}>
            <Text>Registrate gratis</Text>
            <Pressable style={styles.registerBtn} onPress={() => navigate.navigate('Register')}>
              <Text>Registrarse</Text>
            </Pressable>
      </View>

    </View>
  );
}

