import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Dimensions, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Journal() {
  const [entry, setEntry] = useState('');

  const saveEntry = async () => {
    try {
      await AsyncStorage.setItem('@MyJournal:key', entry);
      alert('Entry saved!');
      setEntry(''); // Clear the text input
    } catch (error) {
      // You can handle errors more specifically if you would like
      console.error('Failed to save the entry:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: 'center' }}>
        <Text style={styles.title}>
          Journal
        </Text>
      </View>

      <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: windowHeight / 1.4, width: windowWidth / 1.02, justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, textAlign: 'center' }}>
          <View style={styles.innerContainer}>
            <Text style={styles.heading}>Journal Entry</Text>
            <TextInput
              style={styles.textInput}
              value={entry}
              onChangeText={setEntry}
              placeholder="What's on your mind?"
              multiline={true}
            />
            <Button title="Save Entry" onPress={saveEntry} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    padding: 10,
    textAlignVertical: 'top',
  },
});
