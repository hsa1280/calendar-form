import AppDispatcher from '../dispatcher/AppDispatcher';

let AppActions = {
  saveInfo() {
    AppDispatcher.dispatch({
      type: 'SAVED'
    })
  },
  cancelTyping() {
    AppDispatcher.dispatch({
      type: 'CANCLED'
    })
  },
  scheduleTime(hour, name, phoneNumber) {
    AppDispatcher.dispatch({
      type: 'SCHEDULE',
      hour,
      name,
      phoneNumber
    })
  }
}

export default AppActions;
