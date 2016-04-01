import Ember from 'ember';

export default Ember.Component.extend({
  signingUp: false,
  actions: {
    showSignUpForm() {
      this.set('signingUp', true);
    },
    signUpUser() {
      var params = {
        name: this.get('name'),
        pic: this.get('pic')
      };
      this.set('signingUp', false);
      this.sendAction('signUpUser', params);
    }
  }
});
