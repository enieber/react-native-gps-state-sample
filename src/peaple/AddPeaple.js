import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  Alert,
} from 'react-native';

export default class AddPeaple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
    };
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          onSubmitEditing={(e) => this.refs.age.focus()}
          returnKeyType={'next'}
        />
        <TextInput
          ref={'age'}
          keyboardType={'numeric'}
          onChangeText={(age) => this.setState({age})}
          value={this.state.age}
        />
        <Button
          onPress={() => {
            const {
              name,
              age,
            } = this.state;
            if (name.length > 0 && age.length > 0) {
              this.props.addItem({ name, age });
              this.setState({
                name: '',
                age: '',
              });
            } else {
              Alert.alert('Invalid Car', 'the car is not empty');
            }
          }}
          title="Add"
          color="#841584"
        />
      </View>
    );
  }
}
