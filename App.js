import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Timer from './timerComponent';
import Clock from 'react-live-clock';

function ClockScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
      <Text style={styles.title}>
          CURRENT TIME
        </Text>
        <h1>
          <Clock format="HH:mm:ss a" interval={1000} ticking={true} />
        </h1>
    </View>
  );
}

function TimerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Timer/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Clock') {
              iconName = focused
                ? 'time'
                : 'time-sharp';
            }
            else if (route.name === 'Timer') {
              iconName = focused ? 'timer' : 'timer-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#5cb3ff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Clock" component={ClockScreen} />
        <Tab.Screen name="Timer" component={TimerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    color:  '#ff6347',
  }
});
