import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

const WatchTimer = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
        <Text style={styles.title}>
          STOPWATCH
        </Text>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={options}
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
            <Text style={styles.buttonText}>
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.sectionStyle}>
        <Text style={styles.title}>
          TIMER
        </Text>
          <Timer
            totalDuration={timerDuration}
            msecs
            start={isTimerStart}
            reset={resetTimer}
            options={options}
            handleFinish={() => {
              alert('Time Out!!!');
            }}
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);
            }}>
            <Text style={styles.buttonText}>
              {!isTimerStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WatchTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    color:  '#ff6347',
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: '#5cb3ff',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
    marginLeft: 7,
  },
};