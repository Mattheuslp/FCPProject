import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  balanceText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  positive: {
    color: '#27ae60',
    fontSize: 16,
  },
  negative: {
    color: '#e74c3c',
    fontSize: 16,
  },
});

export default styles;
