import React, { Component } from 'react';

class Color extends Component {
    render() {
      return(
        <div className="color">
          {this.props.color}
        </div>
      );
    }
  }

export default Color