import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/routes'; // Importar a tipagem
import styles from '../styles/AddTransactionStyles'; // Importar os estilos da tela AddTransaction

type Props = NativeStackScreenProps<RootStackParamList, 'AddTransaction'>;

export default function AddExpenseComponent({ navigation, route }: Props) {
  const { addTransaction } = route.params; // Recebe a função de callback para adicionar a transação
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
  const handleAmountChange = (text: string) => {
    const numericValue = text.replace(/[^0-9.,]/g, ''); // Remove tudo que não é número ou separador decimal
    const parsedValue = numericValue.replace(',', '.'); // Troca vírgula por ponto
    const formattedValue = parseFloat(parsedValue).toFixed(2); // Limita a 2 casas decimais
    setAmount(formattedValue);
  };

  // Função para salvar a despesa e enviar os dados para o banco de dados
  const saveExpense = () => {
    if (description.length > 100) {
      alert('A descrição deve ter no máximo 100 caracteres');
      return;
    }

    if (isNaN(parseFloat(amount))) {
      alert('Insira um valor válido');
      return;
    }

    const newExpense = {
      id: Math.random().toString(), // Gerar um ID aleatório para a nova transação
      description,
      amount: parseFloat(amount),
      date: date.toLocaleDateString(), // Formatar a data
      type: 'despesa',
    };

    // Callback para atualizar a lista de transações na HomeScreen
    addTransaction(newExpense);

    // Volta para a tela anterior
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
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

      <Button title="Salvar" onPress={saveExpense} />
    </View>
  );
}
