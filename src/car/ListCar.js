import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
} from 'react-native';

import Car from './Car';

export default class ListCar extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return( 
      <FlatList
        data={this.props.listCar}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <Car
              title={item.title}
              description={item.description}
            />
          );
        }}
      />
    );
  }

}
