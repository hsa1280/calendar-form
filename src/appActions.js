import AppDispatcher from './AppDispatcher';

let AppActions = {
  saveInfo() {
    AppDispatcher.dispatch({
      type: 'saved'
    })
  }
}

export default AppActions;
