import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Dimensions, TouchableHighlight} from 'react-native';
import {AsyncStorage} from 'react-native';


// You can import supported modules from npm
import { Card } from 'react-native-paper';
import JournalScreen from './Journal';
import { useState } from 'react';


// or any files within the Snack
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Journal() {
  const [entry, setEntry] = useState('');

  const saveEntry = async () => {
    try {
      await AsyncStorage.setItem('@MyJournal:key', entry);
      alert('Entry saved!');
      setEntry(''); // Clear the textarea
    } catch (error) {
      // You can handle errors more specifically if you would like
      console.error('Failed to save the entry:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: 'center'}}>
        <Text style={styles.title}>
          Journal
        </Text>
      </View>

      <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: windowHeight/1.4, width: windowWidth/1.02, justifyContent: 'center', backgroundColor: 'white', borderRadius: 40, textAlign: 'center',}}>
          <div style={styles.container}>
            <h2>Journal Entry</h2>
            <textarea
              style={styles.textarea}
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="What's on your mind?"
            />
            <button style={styles.button} onClick={saveEntry}>
              Save Entry
            </button>
          </div>
        </View>
      </View>


      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#000000', }}>
        <View style={styles.navbar}>
          <TouchableHighlight onPress={() => navigation.navigate('Journal')}>
            <View style = {styles.navItem}>
              <Text style= {styles.text}>Journal</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style = {styles.navItem}>
              <Text style= {styles.text}>Meditation</Text>
            </View>
          </TouchableHighlight>
                    <TouchableHighlight>
            <View style = {styles.navItem}>
              <Text style= {styles.text}>Community</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style = {styles.navItem}>
              <Text style= {styles.text}>Call-line</Text>
            </View>
          </TouchableHighlight>
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

  navbar: {
    flexDirection: 'row',
    width: windowWidth,
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderTopColor: '#F5F5F5',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  text: {
    color: 'white',
  },

  container: {
    fontFamily: 'Arial, sans-serif',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    padding: '20px',
    width: '300px',
    margin: 'auto',
    marginTop: '50px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textarea: {
    width: '100%',
    height: '150px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    padding: '10px',
    resize: 'vertical',
  },
  button: {
    border: 'none',
    borderRadius: '3px',
    padding: '10px 20px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  
});

