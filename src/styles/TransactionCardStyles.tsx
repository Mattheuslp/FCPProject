import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderLeftWidth: 4,
    borderColor: '#95a5a6',
  },
  income: {
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  expense: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  date: {
    color: '#7f8c8d',
    fontSize: 12,
  },
  name: {
    fontSize: 16, // Exemplo de estilo
    color: 'black',
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16, // Tamanho da fonte, ajuste conforme necessário
    color: 'green', // Cor do texto, você pode alterar para o que preferir
    fontWeight: 'bold', // Negrito para destacar o valor
    textAlign: 'right', // Alinha à direita se for necessário
  }
});

export default styles;
