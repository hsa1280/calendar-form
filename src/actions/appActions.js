import AppDispatcher from '../dispatcher/appDispatcher';

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
