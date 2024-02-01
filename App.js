import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

export default function App() {

  const[numb, setNumb] = useState (0);
  const[text, setText] = useState('Make a guess between 1-100');
  const [guessCount, setGuessCount] = useState(0);
  

  const checkGuess = () => {
    const guess = Math.floor(Math.random() * 100) + 1;

    setGuessCount(guessCount + 1);
    

    if (numb === guess) {
      Alert.alert("Arvasit oikein")
      setGuessCount(0);
    }else if(numb< guess){
      setText(`Your guess ${numb} was too low.`);
    } else {
      setText(`Your guess ${numb} was too high.`);
    } 
  };

  return (
    <View style={styles.container}>
      <Text>
        {text}
        </Text>
        <TextInput
        keyboardType='numeric'
        style={{fontSize:18, width:200, borderColor: 'gray', borderWidth:1}}
      onChangeText={numb => setNumb(numb)}
      value={numb}/>

      <Button onPress={checkGuess} title="Make a guess" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
