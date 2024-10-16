import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/MonthlySummaryStyles';

interface MonthlySummaryProps {
  totalIncome: number;
  totalExpenses: number;
}

const MonthlySummary: React.FC<MonthlySummaryProps> = ({ totalIncome, totalExpenses }) => {
  const total = totalIncome - totalExpenses;

  return (
    <View style={styles.container}>
      <Text style={styles.summaryText}>Resumo do mês</Text>
      <View style={styles.summaryRow}>
        <Text>Total de receitas</Text>
        <Text>
          R$ {totalIncome !== null && totalIncome !== undefined 
            ? totalIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
            : '0,00'}
        </Text>
      </View>
      <View style={styles.summaryRow}>
        <Text>Total de despesas</Text>
        <Text>
          R$ {totalExpenses !== null && totalExpenses !== undefined 
            ? totalExpenses.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
            : '0,00'}
        </Text>
      </View>
      <View style={styles.summaryRow}>
        <Text>Total</Text>
        <Text>
          R$ {total !== null && total !== undefined 
            ? total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
            : '0,00'}
        </Text>
      </View>
    </View>
  );
};

export default MonthlySummary;
