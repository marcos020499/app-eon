import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import Container from '../components/Container';
import GlobalStyle from '../components/GlobalStyle';
const CreateAccount = () => {
  return (
    <Container>
      <View style={styles.containerStep}>
        <Text style={[styles.textStep, GlobalStyle.globalStyle]}>PASO 1</Text>
        <Image style={styles.logo} source={require('../images/Vector.png')} />
      </View>
      <Text style={[styles.title, GlobalStyle.globalStyle]}>
        multiplica tu tiempo
      </Text>
      <Text style={[styles.overview, GlobalStyle.globalStyle]}>
        Que tus ingresos no estén anclados por tu tiempo. Genera tokens del
        tiempo elegiendo uno de nuestros multiplicadores de recursos.
      </Text>
    </Container>
  );
};
const styles = StyleSheet.create({
  containerStep: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textStep: {
    fontWeight: '700',
    fontSize: 11,
    color: '#E5E5E5',
    letterSpacing: 6,
  },
  title: {
    marginTop: 67,
    fontSize: 50,
  },
  overview: {
    marginTop: 42,
    fontSize: 15,
    maxWidth: 181,
  },
});
export default CreateAccount;
