import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem } from './duck';

class AddCar extends Component {
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
            this.props.addItem({ title, description });
            this.setState({
              title: '',
              description: '',
            });
          }}
          title="Add"
          color="#841584"
        />
      </View>
    );
  }
}

const mapStateToProps = (state, prop) => {
  return {
    listCar: state.car.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: bindActionCreators(addItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
