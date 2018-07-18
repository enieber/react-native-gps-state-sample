import React, { Component } from 'react';
import { View } from 'react-native';

import AddPeaple from './AddPeaple';
import ListPeaple from './ListPeaple';

export default class PeapleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPeaple: [],
    };
  }

  render() {
    return (
      <View>
        <AddPeaple
          addItem={(peaple) => {
            this.setState({
              listPeaple: [
                peaple,
                ...this.state.listPeaple
              ],
            });
          }}
        />
        <ListPeaple
          listPeaple={this.state.listPeaple}
        />
      </View>
    );
  }
}
