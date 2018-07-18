import React, { Component } from 'react';
import { View } from 'react-native';

import AddCar from './AddCar';
import ListCar from './ListCar';

export default class CarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCar: [],
    };
  }

  render() {
    return (
      <View>
        <AddCar
          addItem={(car) => {
            this.setState({
              listCar: [
                car,
                ...this.state.listCar
              ],
            });
          }}
        />
        <ListCar
          listCar={this.state.listCar}
        />
      </View>
    );
  }
}
