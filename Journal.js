import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Dimensions, TouchableHighlight} from 'react-native';


// You can import supported modules from npm
import { Card } from 'react-native-paper';
import JournalScreen from './Journal';


// or any files within the Snack
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Journal() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: 'center'}}>
        <Text style={styles.title}>
          Safeline Guardian
        </Text>
      </View>

      <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
 
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
    color: 'white',
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
  }
  
});
