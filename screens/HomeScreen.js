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
// import firebase from 'expo-firebase-app'

export default class HomeScreen extends React.Component {
  // ref = firebase.firestore().collection('iot-ionic-3724a');

  state = { switchValue: false };
  toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value})
    //state changes according to switch
    //which will result in re-render the text
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
              color={this.state.switchValue ? 'green' : 'red'}
            />
            <Switch
              style={{marginTop:30, transform: [{ scaleX: 3 }, { scaleY: 3 }]}}
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              No momento não tem água.
            </Text>
            <Icon.Ionicons
              name={Platform.OS === 'ios'
                      ? `ios-water${focused ? '' : '-outline'}`
                      : 'md-water'}
              size={100}
              style={{ marginBottom: -3 }}
              color={this.state.switchValue ? 'blue' : '#EEEEEE'}
            />
            <Text style={styles.getStartedText} >
              0 L/h
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
