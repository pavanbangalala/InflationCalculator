import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {generateTestCrash} from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Analytics.trackEvent('Calculate inflation', {
            internet: 'off',
            wifi: 'gps',
          });
        }}>
        <Text style={styles.text}>App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#092337',
    width: '80%',
    padding: 24,
    borderRadius: 8,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: '#E1E1DA',
    fontWeight: '600',
  },
});
