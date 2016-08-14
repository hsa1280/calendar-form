import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';

const CHANGE_EVENT = 'change';
const __emitter = new EventEmitter();
let actionType = '';

const hours = [
  { hour: '9AM', isSelected: false, name:'', phoneNumber:'' },
  { hour: '10AM', isSelected: false, name:'', phoneNumber:'' },
  { hour: '11AM', isSelected: false, name:'', phoneNumber:'' },
  { hour: '12PM', isSelected: false, name:'', phoneNumber:'' },
  { hour: '1PM', isSelected: false, name:'', phoneNumber:'' },
  { hour: '2PM', isSelected: false, name:'', phoneNumber:'' },
  { hour: '3PM', isSelected: false, name:'', phoneNumber:'' },
  { hour: '4PM', isSelected: false, name:'', phoneNumber:'' },
  { hour: '5PM', isSelected: false, name:'', phoneNumber:'' }
]

const ModalStore = {

  getHours() {
    return hours;
  },

  getActionType() {
    return actionType;
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
  actionType = action.type;

  if (actionType === 'SCHEDULE') {
    setTime(action.hour, action.name, action.phoneNumber);
  } else {
    __emitter.emit(CHANGE_EVENT);
  }
});

export default ModalStore;
