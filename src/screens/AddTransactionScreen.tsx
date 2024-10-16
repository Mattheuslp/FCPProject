import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker'; 
import { addTransaction } from '../database/database';
import styles from '../styles/AddTransactionStyles';

type RootStackParamList = {
  Home: undefined;
  AddTransaction: { type: 'despesa' | 'receita'; addTransaction: (newTransaction: { id: string; type: string; name: string; amount: number; date: string }) => void };
};

type AddTransactionScreenRouteProp = RouteProp<RootStackParamList, 'AddTransaction'>;

type AddTransactionScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AddTransaction'>;
  route: AddTransactionScreenRouteProp;
};

export default function AddTransactionScreen({ navigation, route }: AddTransactionScreenProps) {
  const { type, addTransaction } = route.params;
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleAmountChange = (text: string) => {
    console.log("oi")
    const numericValue = text.replace(/[^0-9.,]/g, '').replace(',', '.');
    if (numericValue && !isNaN(parseFloat(numericValue))) {
      setAmount(parseFloat(numericValue).toFixed(2));
    } else {
      setAmount(numericValue);
    }
  };

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
      id: Date.now().toString(),
      type,
      name: description,
      amount: parseFloat(amount),
      date: date.toISOString(),
    };

    addTransaction(newTransaction);

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
        onChangeText={handleAmountChange}
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
