import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/TransactionCardStyles';  // Importando os estilos

interface TransactionCardProps {
  type: string;  // Defini tipos específicos para o tipo de transação
  name: string;
  amount: number;
  date: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ type, name, amount, date }) => {
  const isIncome = type === 'receita';

  return (
    <View style={styles.container}>
      <Text style={isIncome ? styles.income : styles.expense}>
        {isIncome ? '+' : '-'} {type.charAt(0).toUpperCase() + type.slice(1)}
      </Text>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.amount}>R$ {amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;
