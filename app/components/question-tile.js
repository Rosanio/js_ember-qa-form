import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerQuestion(params) {
      this.sendAction('answerQuestion', params);
    },
    editQuestion(question, params) {
      this.sendAction('editQuestion', question, params);
    },
    destroyQuestion(params) {
      this.sendAction('destroyQuestion', params);
    }
  }
});
