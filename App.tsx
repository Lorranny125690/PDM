import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Definição do tipo para a navegação
type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      {/* Nome do App */}
      <Text style={styles.title}>
        Arti<Text style={styles.highlight}>Fy</Text>
      </Text>

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link para entrar sem conta */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.link}>Entrar sem uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03030F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 40,
  },
  highlight: {
    color: '#3BA6FF',
  },
  button: {
    width: '80%',
    backgroundColor: '#0E1322',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    color: '#AAA',
    fontSize: 14,
    marginTop: 20,
  },
});

export default WelcomeScreen;
