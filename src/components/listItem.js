import React, { Component } from 'react';
import ModalPopUp from './ModalPopUp';
import ModalStore from '../stores/ModalStore';
import AppActions from '../actions/AppActions';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundStyling: 'list-group-item list-group-item-info',
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
        <div onClick={this.handleOnClick.bind(this)} className={this.state.backgroundStyling}>
          {this.props.time}
        </div>
        <ModalPopUp time={this.props.time} isDisplay={this.state.isClicked} />
      </div>
    )
  }

  handleStoreChange() {

    let { isSelected } = ModalStore.getHours().find(({hour}) => hour === this.props.time);

    //only update the time slot that has data set on
    if (isSelected) {
      this.setState({ backgroundStyling: 'list-group-item list-group-item-danger'});
    }
    this.setState({isClicked: false})
  }

  handleOnClick() {
    this.setState({ isClicked: true })
  }
}

export default ListItem;
