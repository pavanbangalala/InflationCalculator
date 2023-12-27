import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {generateTestCrash} from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="enter value"
        value={inputVal}
        onChangeText={val => setInputVal(val)}
        style={{
          width: '80%',
          height: 54,
          borderRadius: 8,
          borderWidth: 1,
          marginVertical: 8,
          paddingHorizontal: 12,
        }}
      />
      <TextInput
        placeholder="enter %"
        value={percentage}
        onChangeText={val => setPercentage(val)}
        style={{
          width: '80%',
          height: 54,
          borderRadius: 8,
          borderWidth: 1,
          marginVertical: 8,
          paddingHorizontal: 12,
        }}
      />

      <Text style={{fontSize: 24, fontWeight: '600', color: 'black'}}>
        {result}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setResult(
            Math.floor(
              Number(inputVal) * (Number(percentage) / 100),
            ).toString(),
          );
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
    marginVertical: 16,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: '#E1E1DA',
    fontWeight: '600',
  },
});
