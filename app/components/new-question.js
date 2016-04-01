import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    askQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        additionalNotes: this.get('notes')
      };
      this.sendAction('askQuestion', params);
    }
  }
});
