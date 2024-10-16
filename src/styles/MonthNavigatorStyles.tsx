import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#2d394c',
  },
  month: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  activeMonth: {
    backgroundColor: '#34495e',
    borderRadius: 20,
  },
  monthText: {
    color: '#fff',
    fontSize: 16,
  },
  activeMonthText: {
    color: 'blue',  // Exemplo de estilo para o mês ativo
    fontWeight: 'bold',
  }
});

export default styles;
