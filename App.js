/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import CreateAccount from './src/pages/CreateAccount';
import Onboarding1 from './src/pages/Onboarding1';
import Splash from './src/pages/Splash';

const App = () => {
  return (
      <View style={{flex: 1}}>
        <CreateAccount/>
      </View>
  );
};
export default App;
