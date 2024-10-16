import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MonthNavigatorStyles';  // Importando os estilos

interface MonthNavigatorProps {
  selectedMonth: string;
  onSelectMonth: (month: string) => void;
}

const MonthNavigator: React.FC<MonthNavigatorProps> = ({ selectedMonth, onSelectMonth }) => {
  const months = ['Setembro', 'Outubro', 'Novembro'];

  return (
    <View style={styles.container}>
      {months.map((month) => (
        <TouchableOpacity
          key={month}
          onPress={() => onSelectMonth(month)}
          style={[
            styles.month,
            selectedMonth === month ? styles.activeMonth : null
          ]}
        >
          <Text style={[
            styles.monthText,
            selectedMonth === month ? styles.activeMonthText : {}
          ]}>
            {month}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MonthNavigator;
