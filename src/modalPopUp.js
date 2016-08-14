import React, { Component } from 'react';
import AppActions from './AppActions';
import { Modal } from 'react-bootstrap';

class ModalPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      showModal: this.props.show
    }
  }

  render() {
    return (
      <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Please enter your info</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <input className="form-control" type="text" placeholder="name" ref="name" required/>
          <input className="form-control" type="text" placeholder="phone number" ref="phoneNumber" required/>
          </Modal.Body>

          <Modal.Footer>
            <button className="btn btn-primary" type="submit" onClick={this.handleSave.bind(this)}>Save</button>
            <button className="btn btn-primary" type="button" onClick={this.close.bind(this)}>Close</button>
          </Modal.Footer>
      </Modal>
    );
  }

  handleSave() {
    if (this.refs.name.value && this.refs.phoneNumber.value) {
      this.setState({
        name: this.refs.name.value,
        phoneNumber: this.refs.phoneNumber.value,
        showModal: false
      });
      AppActions.saveInfo();
    }
  }

  close() {
    this.setState({showModal: false});
    AppActions.cancelTyping();
  }

  handleCancel() {
    this.setState({
      name: '',
      phoneNumber: ''
    });
    this.refs.name.value = '';
    this.refs.phoneNumber.value = '';
  }
}

export default ModalPopUp;
