import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
// import { firebase } from '../firebase/config';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flow: 0,
      switchValue: false
    };
  }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyClu7rYMShX2Yy1xNhhIsl_aPw33XuBW2E",
      authDomain: "iot-ionic-3724a.firebaseapp.com",
      databaseURL: "https://iot-ionic-3724a.firebaseio.com",
      storageBucket: "iot-ionic-3724a.appspot.com"
    };
    firebase.initializeApp(firebaseConfig);
    
    firebase.database().ref('ESP8266_Test').on('value', (data) => this.setState({flow: data.val().int.data}));
  }

  // componentDidUpdate() {
  //   firebase.database().ref('ESP8266_Test/flowPump').set({on: this.state.flow > 0 ? this.state.switchValue : 0});
  // }

  toggleSwitch = (value) => {
    this.setState({switchValue: value})
    firebase.database().ref('ESP8266_Test/flowPump').set({on: !this.state.switchValue ? 1 : 0});
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Icon.Ionicons
              name={Platform.OS === 'ios'
                      ? `ios-power${focused ? '' : '-outline'}`
                      : 'md-power'}
              size={300}
              style={{ marginBottom: -3 }}
              color={this.state.switchValue && this.state.flow != 0 ? 'green' : 'red'}
            />
            <Switch
              style={{marginTop:30, transform: [{ scaleX: 3 }, { scaleY: 3 }]}}
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}
              disabled = {this.state.flow == 0}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              {this.state.flow == 0 ? 'No momento não tem água.' : 'No momento tem água.'}
            </Text>
            <Icon.Ionicons
              name={Platform.OS === 'ios'
                      ? `ios-water${focused ? '' : '-outline'}`
                      : 'md-water'}
              size={100}
              style={{ marginBottom: -3 }}
              color={this.state.flow > 0 ? 'blue' : '#EEEEEE'}
            />
            <Text style={styles.getStartedText}>
              {this.state.flow} L/h
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 80,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
