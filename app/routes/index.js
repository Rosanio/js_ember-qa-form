import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  actions: {
    signUpUser(params) {
      console.log('it works');
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.refresh();
    }
  }
});
