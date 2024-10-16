import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 30, 
    right: 30,
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
    color: '#27ae60',
    fontSize: 10,
    textAlign: 'center',
  },
  optionTextDespesa: {
    color: '#e74c3c',
    fontSize: 18,
    textAlign: 'center',
  },
});
