import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#0a0a20',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundImage: 'linear-gradient(to bottom, #0a0a20, #1e1e40)',
},
imagen: {
    width: 240,
    height: 120,
    marginBottom: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#00f2fe',
    shadowColor: '#00f2fe',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 15,
    transform: [{ rotate: '-3deg' }],
},
textInput: {
    width: '100%',
    borderColor: '#00f2fe',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 12,
    backgroundColor: 'rgba(0, 242, 254, 0.1)',
    fontSize: 18,
    color: '#ffffff',
    shadowColor: '#00f2fe',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8,
    placeholderTextColor: '#a0d1ff',
    fontFamily: 'Arial',
    fontWeight: '500',
    transform: [{ rotate: '-2deg' }],  // Inclinación similar a la imagen
},
button: {
    width: '70%', // Ancho controlado
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 16, // Bordes menos redondeados
    marginTop: 40,
    borderWidth: 0, // Eliminamos el borde tradicional
    shadowColor: '#00f2fe',
    shadowOffset: { width: -8, height: 8 }, // Sombras asimétricas
    shadowOpacity: 0.7,
    shadowRadius: 12,
    elevation: 25,
    backgroundColor: '#0a1a2e', // Fondo oscuro
    transform: [{ rotate: '-4deg' }, { perspective: 1000 }], // Efecto 3D
    overflow: 'hidden',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: 'rgba(0, 242, 254, 0.3)', // Bordes sutiles
  },
  buttonText: {
    color: '#00f2fe',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 3,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 242, 254, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontFamily: 'Arial',
    transform: [{ rotate: '1deg' }], // Texto ligeramente compensado
  },
title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1.5,
    textShadowColor: '#00f2fe',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    transform: [{ rotate: '-1deg' }],  // Ligera inclinación para el título
},
headerText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00f2fe',
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 1.2,
    transform: [{ rotate: '-1deg' }],  // Ligera inclinación
},
texto2: {
    color: '#a0d1ff',
    textAlign: 'center',
    marginBottom: 25,
    marginHorizontal: 25,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.8,
},
floatingDecoration: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'rgba(0, 242, 254, 0.05)',
    borderRadius: 100,
    top: -50,
    right: -50,
    zIndex: -1,
    transform: [{ rotate: '15deg' }],  // Decoración también inclinada
},
});