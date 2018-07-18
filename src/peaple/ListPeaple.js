import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
} from 'react-native';

import Peaple from './Peaple';

export default class ListPeaple extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return( 
      <FlatList
        data={this.props.listPeaple}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <Peaple
              name={item.name}
              age={item.age}
            />
          );
        }}
      />
    );
  }

}
