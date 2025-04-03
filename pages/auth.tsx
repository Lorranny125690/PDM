import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import tw from "twrnc";

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

export const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={tw`flex-1 bg-slate-900 items-center px-6`}> 
      {/* Botão de Voltar */}
      <TouchableOpacity 
        style={tw`absolute top-10 left-4 p-2`}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={tw`text-white text-xl`}>{"<"}</Text>
      </TouchableOpacity>
      
        <Image 
          source={require("../assets/Imagem_do_WhatsApp_de_2025-04-01_à_s__19.57.44_87ca3b52-removebg-preview (1).png")} 
          style={tw`w-100 h-100`} 
          resizeMode="contain"
        />      
      {/* Inputs */}
      <TextInput 
        placeholder="Nome de usuário"
        placeholderTextColor="#B0B0B0"
        style={tw`bg-gray-800 w-full p-2 mb-4 rounded-lg text-white`}
      />
      <TextInput 
        placeholder="Senha"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        style={tw`bg-gray-800 w-full p-2 mb-4 rounded-lg text-white`}
      />
      
      {/* Botão Cadastrar */}
      <TouchableOpacity style={tw`bg-gray-700 py-3 px-6 rounded-lg w-full items-center mb-4`}>
        <Text style={tw`text-white text-lg font-semibold`}>Entrar</Text>
      </TouchableOpacity>
      
      {/* Link para Login */}
      <Text 
          style={tw`text-blue-400 underline`} 
          onPress={() => navigation.navigate("Login")}>
          Esqueci minha senha
      </Text>
    </View>
  );
};

export const SignupScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={tw`flex-1 bg-slate-900 items-center px-6`}> 
      {/* Botão de Voltar */}
      <TouchableOpacity 
        style={tw`absolute top-10 left-4 p-2`}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate("Welcome"); 
          }
        }}
        
      >
        <Text style={tw`text-white text-xl`}>{"<"}</Text>
      </TouchableOpacity>
      
        <Image 
          source={require("../assets/Imagem_do_WhatsApp_de_2025-04-01_à_s__19.57.44_87ca3b52-removebg-preview (1).png")} 
          style={tw`w-100 h-100`} 
          resizeMode="contain"
        />      
      {/* Inputs */}
      <TextInput 
        placeholder="Nome de usuário"
        placeholderTextColor="#B0B0B0"
        style={tw`bg-gray-800 w-full p-2 mb-4 rounded-lg text-white`}
      />
      <TextInput 
        placeholder="Email"
        placeholderTextColor="#B0B0B0"
        style={tw`bg-gray-800 w-full p-2 mb-4 rounded-lg text-white`}
      />
      <TextInput 
        placeholder="Senha"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        style={tw`bg-gray-800 w-full p-2 mb-4 rounded-lg text-white`}
      />
      <TextInput 
        placeholder="Confirmar senha"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        style={tw`bg-gray-800 w-full p-2 mb-6 rounded-lg text-white`}
      />
      
      {/* Botão Cadastrar */}
      <TouchableOpacity style={tw`bg-gray-700 py-3 px-6 rounded-lg w-full items-center mb-4`}>
        <Text style={tw`text-white text-lg font-semibold`}>Cadastrar</Text>
      </TouchableOpacity>
      
      {/* Link para Login */}
      <Text style={tw`text-gray-400`}>Já tem uma conta?
        <Text 
          style={tw`text-blue-400 underline`} 
          onPress={() => navigation.navigate("Login")}>
          Entrar
        </Text>
      </Text>
    </View>
  );
};

