import React from 'react';
import {
  SafeAreaView, StatusBar,
  StyleSheet, useColorScheme
} from 'react-native';

import Home from './src/screens/Home';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
})



export default App;
