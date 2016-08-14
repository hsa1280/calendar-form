import React, { Component } from 'react';
import ModalPopUp from './ModalPopUp';
import ModalStore from './ModalStore';
import AppActions from './AppActions';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classType: 'div-border',
      isClicked: false
    }
  }

  componentDidMount() {
    this.storeSuscription = ModalStore.addListener(this.handleStoreChange.bind(this));
  }

  componentWillUnmount() {
    this.storeSubscription.remove();
  }

  render() {


    return (
      <div>
        <div onClick={this.handleClick.bind(this)} className={this.state.classType}>
          {this.props.time}
        </div>
        <ModalPopUp selectedTime={this.props.time} show={this.state.isClicked} />
      </div>
    )
  }

  handleStoreChange() {

    let { isSelected } = ModalStore.getHours().find(({hour}) => hour === this.props.time);

    if (isSelected) {
      this.setState({ classType: 'div-change'});
    }
    this.setState({isClicked: false})
  }

  handleClick() {
    this.setState({
      isClicked: true
    })
  }
}

export default ListItem;
