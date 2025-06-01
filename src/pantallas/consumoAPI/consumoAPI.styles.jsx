import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 16,
  },
  header: {
    position: 'absolute',
    top: 40,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
  },
  header: {
  width: '100%',
  alignItems: 'center',
  marginBottom: 50, 
},
});