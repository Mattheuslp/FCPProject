import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { addTransaction } from '../database/database'; // Função para salvar no banco de dados
import styles from '../styles/AddTransactionStyles'; // Estilo geral para a tela

// Definir os tipos de navegação e parâmetros
type RootStackParamList = {
  Home: undefined;
  AddTransaction: { type: 'despesa' | 'receita'; addTransaction: (newTransaction: { id: string; type: string; name: string; amount: number; date: string }) => void };
};

// Definir o tipo do route
type AddTransactionScreenRouteProp = RouteProp<RootStackParamList, 'AddTransaction'>;

type AddTransactionScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AddTransaction'>;
  route: AddTransactionScreenRouteProp;
};

export default function AddTransactionScreen({ navigation, route }: AddTransactionScreenProps) {
  const { type, addTransaction } = route.params; // Recebe o tipo de transação e a função de callback
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  // Função para validar o valor numérico com 2 casas decimais
  const handleAmountChange = (text) => {
    const numericValue = text.replace(/[^0-9.,]/g, '').replace(',', '.'); // Remove caracteres inválidos
    if (numericValue && !isNaN(parseFloat(numericValue))) {
      setAmount(parseFloat(numericValue).toFixed(2)); // Aplica toFixed apenas em valores válidos
    } else {
      setAmount(numericValue); // Permite digitação parcial, como "1." ou "1.2"
    }
  };

  // Função para salvar a transação no banco de dados
  const saveTransaction = () => {
    if (description.length > 100) {
      alert('A descrição deve ter no máximo 100 caracteres');
      return;
    }

    if (isNaN(parseFloat(amount))) {
      alert('Insira um valor válido');
      return;
    }

    const newTransaction = {
      id: Date.now().toString(), // Gera um ID simples com base no timestamp atual
      type, // Define se é 'despesa' ou 'receita'
      name: description,
      amount: parseFloat(amount),
      date: date.toISOString(),
    };

    // Salva a transação no banco de dados
    addTransaction(newTransaction);

    // Retorna para a tela anterior
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{type === 'despesa' ? 'Adicionar Despesa' : 'Adicionar Receita'}</Text>
      
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a descrição (máx. 100 caracteres)"
        value={description}
        maxLength={100}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor (ex: 123.45)"
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange} // Função para validar o valor numérico
      />

      <Text style={styles.label}>Data</Text>
      <Button title="Selecionar Data" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <Text>{date.toLocaleDateString()}</Text>

      <Button title="Salvar" onPress={saveTransaction} />
    </View>
  );
}
