import React, { Component } from 'react';
import Modal from './Modal';
import ModalStore from './ModalStore';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      classType: 'div-border'
    }
  }

  componentDidMount() {
    this.storeSuscription = ModalStore.addListener(this.handleStoreChange.bind(this));
  }

  componentWillUnmount() {
    this.storeSubscription.remove();
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <div className={this.state.classType}>
            {this.props.time}
          </div>
          <Modal />
        </div>
      )
    } else {
      return (
        <div onClick={this.handleClick.bind(this)} className={this.state.classType}>
          {this.props.time}
        </div>
      );
    }
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  handleStoreChange() {
    this.setState({
      classType: 'div-change'
    });
  }
}

export default ListItem;
