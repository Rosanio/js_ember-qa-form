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
    },
    upvote(question) {
      var params = {
        upvotes: question.get('upvotes')+1
      };
      this.sendAction('upvote', question, params);
    },
    downvote(question) {
      var params = {
        downvotes: question.get('downvotes')+1
      };
      this.sendAction('downvote', question, params);
    }
  }
});
