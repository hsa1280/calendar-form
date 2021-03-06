import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import AppActions from '../actions/appActions';
import ModalStore from '../stores/modalStore';

class ModalPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      requiredErrorMessage: false
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      showModal: newProps.isDisplay
    });
  }

  render() {
    const currentSelected = ModalStore.getHours().find(({hour}) => hour === this.props.time);
    const errorMessage = this.state.requiredErrorMessage ? <p className="bg-danger">All fields are required!</p> : '';

    return (
      <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Please enter your info for {this.props.time}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input className="form-control" type="text" placeholder="name" ref="name" defaultValue={currentSelected.name}/>
            <input className="form-control" type="text" placeholder="phone number" ref="phoneNumber" defaultValue={currentSelected.phoneNumber}/>
            {errorMessage}
          </Modal.Body>

          <Modal.Footer>
            <button className="btn btn-primary" type="submit" onClick={this.handleSave.bind(this)}>Save</button>
            <button className="btn btn-primary" type="button" onClick={this.handleClose.bind(this)}>Close</button>
          </Modal.Footer>
      </Modal>
    );
  }

  handleSave() {
    if (this.refs.name.value && this.refs.phoneNumber.value) {
      this.setState({
        showModal: false,
        requiredErrorMessage: false
      });
      //save the data to store if users click on save button
      AppActions.scheduleTime(this.props.time, this.refs.name.value, this.refs.phoneNumber.value);
    } else {
      this.setState({
        requiredErrorMessage: true
      });
    }

  }

  handleClose() {
    //hide the modal if user clicks on close
    this.setState({showModal: false});
  }
}

export default ModalPopUp;
