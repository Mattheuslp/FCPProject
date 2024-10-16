import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/TipCardStyles';

interface TipCardProps {
  tip: string;
}

const TipCard: React.FC<TipCardProps> = ({ tip }) => (
  <View style={styles.container}>
    <Text style={styles.tipText}>
      {tip !== null && tip !== undefined ? tip : 'Dica indisponível no momento.'}
    </Text>
  </View>
);

export default TipCard;
