import React, { Component } from 'react';
import { render } from 'react-dom';
import ListItem from './ListItem';

class Calendar extends Component {
  render() {
    let hours = Array.apply(0, Array(9)).map( (_, index) => index + 9 );
    let listItems = hours.map((hour) => {
      return (
        <ListItem time={hour} />
      );
    });
    return (
      <div>
        {listItems}
      </div>
    );
  }
}

render(<Calendar />, document.getElementById('root'));
