import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import GPSState from 'react-native-gps-state';
import { Provider } from 'react-redux';

import Store from './store';
import ListCar from './car/ListCar';
import AddCar from './car/AddCar';

const StoreInstance = Store();

export default class App extends Component {
  componentWillMount(){
    GPSState.addListener((status)=>{
      switch(status){
        case GPSState.NOT_DETERMINED:
          alert('Please, allow the location, for us to do amazing things for you!');
        break;
  
        case GPSState.RESTRICTED:
          GPSState.openSettings();
        break;
  
        case GPSState.DENIED:
          alert('It`s a shame that you do not allowed us to use location :(');
        break;
  
        case GPSState.AUTHORIZED_ALWAYS:
        alert('this is ok');
        break;
  
        case GPSState.AUTHORIZED_WHENINUSE:
        alert('Location is Authorized!');
        break;
      }
    });
  }
  
  componentWillUnmount(){
    GPSState.removeListener();
  }
  
  render() {
    return (
      <Provider store={StoreInstance}>
        <View>
          <AddCar />
          <ListCar/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
