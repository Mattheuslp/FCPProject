import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#e2e1df',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#2d394c',
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#3498db',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
