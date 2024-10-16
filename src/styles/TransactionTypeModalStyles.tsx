import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fundo escurecido
  },
  modalContainer: {
    position: 'absolute',
    bottom: 30,  // Mesmo valor do botão "+" para ficar na mesma posição
    right: 30,   // Mesmo valor do botão "+" para ficar na mesma posição
    backgroundColor: '#2c3e50',
    borderRadius: 10,
    padding: 10,
    width: 150,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  optionTextReceita: {
    color: '#27ae60',  // Cor verde para "Receita"
    fontSize: 18,
    textAlign: 'center',
  },
  optionTextDespesa: {
    color: '#e74c3c',  // Cor vermelha para "Despesa"
    fontSize: 18,
    textAlign: 'center',
  },
});
