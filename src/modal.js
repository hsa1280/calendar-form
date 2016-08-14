import React, { Component } from 'react';
import AppActions from './AppActions';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Modal Example</h2>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <input type="text" placeholder="name" ref="name" required/>
            <input type="text" placeholder="phone number" ref="phoneNumber" required/>

            <button type="submit" onClick={this.handleSave.bind(this)}>Save</button>
            <button type="button" onClick={this.handleCancel.bind(this)}>Cancel</button>
          </div>
        </div>
      </div>
      // <div className="modal fade" id="myModal" role="dialog">
      //   <div className="modal-dialog">
      //
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <button type="button" className="close" data-dismiss="modal">&times;</button>
      //         <h4 className="modal-title">Modal Header</h4>
      //       </div>
      //       <div className="modal-body">
      //         <input />
      //         <input />
      //       </div>
      //       <div className="modal-footer">
      //         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      //       </div>
      //     </div>
      //
      //   </div>
      // </div>
    );
  }

  handleSave() {
    if (this.refs.name.value && this.refs.phoneNumber.value) {
      this.setState({
        name: this.refs.name.value,
        phoneNumber: this.refs.phoneNumber.value
      });
      AppActions.saveInfo();
    }
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

export default Modal;
