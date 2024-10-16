import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/TransactionCardStyles';

interface TransactionCardProps {
  type: string;
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
        <Text style={styles.amount}>
          R$ {amount !== null && amount !== undefined 
            ? amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
            : '0,00'}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;
