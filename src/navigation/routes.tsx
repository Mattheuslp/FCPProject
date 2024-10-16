import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importação das screens
import HomeScreen from '../screens/HomeScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen'; // Componente renomeado

// Tipagem para as rotas
export type RootStackParamList = {
  Home: undefined;
  AddTransaction: { 
    type: 'despesa' | 'receita';  // Define o tipo de transação
    addTransaction: (transaction: any) => void; // Função de callback para adicionar a transação
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Esconde o header
        />
        <Stack.Screen
          name="AddTransaction"  // Nome atualizado
          component={AddTransactionScreen}  // Componente atualizado
          options={({ route }) => ({
            title: route.params.type === 'despesa' ? 'Adicionar Despesa' : 'Adicionar Receita', // Atualiza o título dinamicamente
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
