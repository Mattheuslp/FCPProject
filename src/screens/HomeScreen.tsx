import React, { useState, useEffect } from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MonthNavigator from '../components/MonthNavigator';
import BalanceSummary from '../components/BalanceSummary';
import MonthlySummary from '../components/MonthlySummary';
import TransactionCard from '../components/TransactionCard';
import TipCard from '../components/TipCard';
import TransactionTypeModal from '../components/TransactionTypeModal';
import styles from '../styles/HomeScreenStyles';
import { getTransactions } from '../database/database';

interface Transaction {
  id: string;
  type: string;
  name: string;
  amount: number;
  date: string;
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectedMonth, setSelectedMonth] = useState('Outubro');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getTransactions(setTransactions);
  }, []);

  const totalIncome = transactions
    .filter((t) => t.type === 'receita')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'despesa')
    .reduce((sum, t) => sum + t.amount, 0);

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSelectTransactionType = (type: 'despesa' | 'receita') => {
    setModalVisible(false);
    navigation.navigate('AddTransaction', { type, addTransaction });
  };

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TransactionCard
          type={item.type}
          name={item.name}
          amount={item.amount}
          date={item.date}
        />
      )}
      ListHeaderComponent={() => (
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.appTitle}>FCP - Fluxo Contábil Pessoal</Text>
          </View>

          <MonthNavigator
            selectedMonth={selectedMonth}
            onSelectMonth={setSelectedMonth}
          />

          <BalanceSummary balance={totalIncome - totalExpenses} />

          <TipCard tip="Você está no caminho certo, revise seus gastos em busca de oportunidades de corte." />

          <MonthlySummary
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />

          {!isModalVisible && (
            <Pressable
              style={styles.addButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </Pressable>
          )}

          {isModalVisible && (
            <TransactionTypeModal
              visible={isModalVisible}
              onClose={() => setModalVisible(false)}
              onSelect={handleSelectTransactionType}
            />
          )}
        </View>
      )}
    />
  );
}
