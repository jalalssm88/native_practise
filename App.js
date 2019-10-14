import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/store';


import AppNavigator from './src/components/layout';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
