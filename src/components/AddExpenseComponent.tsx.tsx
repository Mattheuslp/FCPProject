// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/routes'; 
// import styles from '../styles/AddTransactionStyles'; 

// type Props = NativeStackScreenProps<RootStackParamList, 'AddTransaction'>;

// export default function AddExpenseComponent({ navigation, route }: Props) {
//   const { addTransaction } = route.params;
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const onChangeDate = (event: any, selectedDate: any) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setDate(currentDate);
//   };

//   const handleAmountChange = (text: string) => {
//     const numericValue = text.replace(/[^0-9.,]/g, '');
//     const parsedValue = numericValue.replace(',', '.');
//     const formattedValue = parseFloat(parsedValue).toFixed(2);
//     setAmount(formattedValue);
//   };

//   const saveExpense = () => {
//     if (description.length > 100) {
//       alert('A descrição deve ter no máximo 100 caracteres');
//       return;
//     }

//     if (isNaN(parseFloat(amount))) {
//       alert('Insira um valor válido');
//       return;
//     }

//     const newExpense = {
//       id: Math.random().toString(),
//       description,
//       amount: parseFloat(amount),
//       date: date.toLocaleDateString(),
//       type: 'despesa',
//     };

//     addTransaction(newExpense);
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Descrição</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite a descrição (máx. 100 caracteres)"
//         value={description}
//         maxLength={100}
//         onChangeText={setDescription}
//       />

//       <Text style={styles.label}>Valor</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite o valor (ex: 123.77)"
//         keyboardType="numeric"
//         // value={amount}
//         onChangeText={handleAmountChange}
//       />

//       <Text style={styles.label}>Data</Text>
//       <Button title="Selecionar Data" onPress={() => setShowDatePicker(true)} />
//       {showDatePicker && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onChangeDate}
//         />
//       )}
//       <Text>{date.toLocaleDateString()}</Text>

//       <Button title="Salvar" onPress={saveExpense} />
//     </View>
//   );
// }
