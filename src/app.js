import React, { Component } from 'react';
import { render } from 'react-dom';
import ListItem from './components/ListItem';
import modalStore from './stores/ModalStore';

class Calendar extends Component {
  render() {
    const listItems = modalStore.getHours().map(({hour}) => {
      return (
        <ListItem time={hour} key={hour}/>
      );
    });
    return (
      <div>
        <h2 className='text-center'>Calendar Form</h2>
        {listItems}
      </div>
    );
  }
}

render(<Calendar />, document.getElementById('root'));
