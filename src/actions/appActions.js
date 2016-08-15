import AppDispatcher from '../dispatcher/AppDispatcher';

let AppActions = {
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
