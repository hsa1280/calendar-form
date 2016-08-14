import React, { Component } from 'react';
import AppActions from './AppActions';
import { Modal } from 'react-bootstrap';
import ModalStore from './ModalStore';

class ModalPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.show
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      showModal: newProps.show
    });
  }

  render() {
    const currentSelected = ModalStore.getHours().find(({hour}) => hour === this.props.selectedTime);

    return (
      <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Please enter your info for {this.props.selectedTime}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input className="form-control" type="text" placeholder="name" ref="name" required defaultValue={currentSelected.name}/>
            <input className="form-control" type="text" placeholder="phone number" ref="phoneNumber" defaultValue={currentSelected.phoneNumber} required/>
          </Modal.Body>

          <Modal.Footer>
            <button className="btn btn-primary" type="submit" onClick={this.handleSave.bind(this)}>Save</button>
            <button className="btn btn-primary" type="button" onClick={this.close.bind(this)}>Close</button>
          </Modal.Footer>
      </Modal>
    );
  }

  handleSave() {
    AppActions.scheduleTime(this.props.selectedTime, this.refs.name.value, this.refs.phoneNumber.value);
    const selectedHour = ModalStore.getHours().find( ({hour}) => hour === this.props.selectedTime );
    this.refs.name.value = selectedHour.name;
    this.refs.phoneNumber.value = selectedHour.phoneNumber;
    this.setState({showModal: false});
    AppActions.saveInfo();
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
