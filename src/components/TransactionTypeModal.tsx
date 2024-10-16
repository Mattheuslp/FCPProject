import React from 'react';
import { Modal, View, Pressable, Text } from 'react-native';
import styles from '../styles/TransactionTypeModalStyles';

interface TransactionTypeModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (type: 'receita' | 'despesa') => void;
}

export default function TransactionTypeModal({ visible, onClose, onSelect }: TransactionTypeModalProps) {
  return (
    <Modal
      transparent={true}
      visible={visible ?? false}
      animationType="fade"
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <Pressable onPress={() => onSelect('receita')} style={styles.option}>
            <Text style={styles.optionTextReceita}>+ Receita</Text>
          </Pressable>
          <Pressable onPress={() => onSelect('despesa')} style={styles.option}>
            <Text style={styles.optionTextDespesa}>- Despesa</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}
