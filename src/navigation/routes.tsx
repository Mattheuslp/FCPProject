import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';

export type RootStackParamList = {
  Home: undefined;
  AddTransaction: { 
    type: 'despesa' | 'receita';
    addTransaction: (transaction: any) => void;
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTransaction"
          component={AddTransactionScreen}
          options={({ route }) => ({
            title: route?.params?.type === 'despesa' ? 'Adicionar Despesa' : 'Adicionar Receita',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
