import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/BalanceSummaryStyles';  // Importando os estilos

interface BalanceSummaryProps {
  balance: number;
}

const BalanceSummary: React.FC<BalanceSummaryProps> = ({ balance }) => {
  const isPositive = balance >= 0;

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Total atual</Text>
      <Text style={styles.balanceAmount}>
        R$ {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </Text>
      <Text style={isPositive ? styles.positive : styles.negative}>
        {isPositive ? 'Tudo certo!' : 'Revise seus gastos!'}
      </Text>
    </View>
  );
};

export default BalanceSummary;
