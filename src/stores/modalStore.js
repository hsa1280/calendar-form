import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatcher/AppDispatcher';
import constant from '../constant';

const CHANGE_EVENT = 'change';
const __emitter = new EventEmitter();

const hours = constant.data;

const ModalStore = {

  getHours() {
    return hours;
  },

  addListener(callback) {
    return __emitter.addListener(CHANGE_EVENT, callback);
  }
};

function setTime(selectedHour, name, phoneNumber) {
  const value = hours.find(({hour}) => selectedHour === hour);
  value.isSelected = true;
  value.name = name;
  value.phoneNumber = phoneNumber;
}


ModalStore.dispatchToken = AppDispatcher.register((action) => {
  setTime(action.hour, action.name, action.phoneNumber);
  __emitter.emit(CHANGE_EVENT);

});

export default ModalStore;
