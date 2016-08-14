import AppDispatcher from './AppDispatcher';

let AppActions = {
  saveInfo() {
    AppDispatcher.dispatch({
      type: 'saved'
    })
  },
  cancelTyping() {
    AppDispatcher.dispatch({
      type: 'cancled'
    })
  }
}

export default AppActions;
