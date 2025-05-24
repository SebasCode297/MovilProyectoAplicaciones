import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff', 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#cccccc', 
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#aaaaaa', 
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: '600',
  },
    image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },

});
