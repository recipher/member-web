import React, { Component, PropTypes } from 'react';

export default class Member extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
