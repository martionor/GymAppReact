import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',  // horizontally center text
    marginBottom: 20,
  },

  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 8,
    marginTop: 20,
  },
});