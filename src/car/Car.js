//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a Purecomponent
export default class Car extends PureComponent {
  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
        <Text>
          {this.props.description}
        </Text>
      </View>
    );
  }
}
