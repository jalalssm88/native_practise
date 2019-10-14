import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppNavigator from './src/components/layout';

const App: () => React$Node = () => {
  return (
    <>
       <AppNavigator/>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
