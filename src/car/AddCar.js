import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  Alert,
} from 'react-native';

export default class AddCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          onSubmitEditing={(e) => this.refs.description.focus()}
          returnKeyType={'next'}
        />
        <TextInput
          ref={'description'}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
        />
        <Button
          onPress={() => {
            const {
              title,
              description,
            } = this.state;
            if (title.length > 0 && description.length > 0) {
              this.props.addItem({ title, description });
              this.setState({
                title: '',
                description: '',
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
