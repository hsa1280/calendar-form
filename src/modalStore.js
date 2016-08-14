import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();

let ModalStore = {

  addListener(callback) {
    return __emitter.addListener(CHANGE_EVENT, callback);
  }
};

ModalStore.dispatchToken = AppDispatcher.register((action) => {
  __emitter.emit(CHANGE_EVENT);
});

export default ModalStore;
