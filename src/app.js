import React, { Component } from 'react';
import { render } from 'react-dom';
import ListItem from './ListItem';
import modalStore from './ModalStore';

class Calendar extends Component {
  render() {
    const listItems = modalStore.getHours().map(({hour, isSelected}) => {
      return (
        <ListItem time={hour} key={hour} isSelected={isSelected}/>
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
