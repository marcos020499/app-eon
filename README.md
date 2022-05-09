# app-eon

configurar fuentes
cerar archivo react-native.config.js e insertar: 

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/fonts/'],
};

, una vez creado el archivo y guardado, correr: 'npx react-native link', recibiras un mensaje por consola de que se linkeo
y listo
