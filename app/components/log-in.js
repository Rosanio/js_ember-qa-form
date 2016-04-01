import Ember from 'ember';

export default Ember.Component.extend({
  loggingIn: false,
  actions: {
    showLogInForm() {
      this.set('loggingIn', true);
    }
  }
});
