import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Home';
import JournalScreen from './Journal';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} style ={{backgroundColor: 'black'}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Journal" component={JournalScreen} />
        <Tab.Screen name= "Communication"/>
        <Tab.Screen name= "Mindfullness"/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
