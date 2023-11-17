// store/index.js
import { createStore } from 'vuex';
import notification from './modules/notification';

export default createStore({
  modules: {
    notification
    
  },
});
