import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/TipCardStyles';  // Importando o estilo

interface TipCardProps {
  tip: string;
}

const TipCard: React.FC<TipCardProps> = ({ tip }) => (
  <View style={styles.container}>
    <Text style={styles.tipText}>{tip}</Text>
  </View>
);

export default TipCard;
