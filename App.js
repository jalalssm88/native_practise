import React from 'react';
import { SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import MainStack from './src/stacks/'

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
       <MainStack />
      </Provider>
    </>
  );
};
const styles = StyleSheet.create({
});

export default App;
