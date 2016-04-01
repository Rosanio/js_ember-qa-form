import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    askQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        additionalNotes: this.get('notes'),
        upvotes: 0,
        downvotes: 0
      };
      this.sendAction('askQuestion', params);
    }
  }
});
