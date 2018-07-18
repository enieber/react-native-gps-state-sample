import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Car extends PureComponent {
  render() {
    return (
      <View>
        <Text>
          {this.props.name}
        </Text>
        <Text>
          {this.props.age}
        </Text>
      </View>
    );
  }
}
