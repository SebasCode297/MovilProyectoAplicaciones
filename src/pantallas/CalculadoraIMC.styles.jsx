import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#f8f9fa',  // Fondo casi blanco (más neutral)
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  imagen: {
    width: 180,  // Más compacto
    height: 90,
    marginBottom: 20,
    borderRadius: 8,  // Bordes cuadrados suavizados
    borderWidth: 1,
    borderColor: '#d1d1d1',  // Gris neutro
    shadowColor: '#5c6bc0',  // Sombra morada
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  textInput: {
    width: '85%',  // Más estrecho
    borderColor: '#9575cd',  // Morado pastel
    borderWidth: 1.2,
    borderRadius: 8,  // Forma más rectangular
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    fontSize: 14,  // Más pequeño
    color: '#4527a0',  // Morado oscuro
    shadowColor: '#b39ddb',
    shadowOffset: { width: 0, height: 0 },  // Sombra difusa
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  button: {
    backgroundColor: '#673ab7',  // Morado intenso
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,  // Rectangular con bordes suaves
    marginTop: 20,
    shadowColor: '#311b92',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.5,  // Menos espaciado
  },
  title: {
    fontSize: 26,
    fontWeight: '700',  // Semi-bold
    color: '#5e35b1',  // Morado
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(93, 64, 155, 0.2)',  // Sombra sutil
    textShadowOffset: { width: 1, height: 1 },
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#7e57c2',  // Morado medio
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',  // Tipografía alternativa (si la app lo soporta)
  },
  texto2: {
    color: '#7986cb',  // Morado azulado
    textAlign: 'center',
    marginBottom: 16,
    marginHorizontal: 24,
    lineHeight: 20,
    fontSize: 13,  // Más pequeño
  },
  secondaryButton: {
    margin: 60,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#7e57c2',
    padding: 10,
  }
});