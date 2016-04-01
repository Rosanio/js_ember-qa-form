import Ember from 'ember';

export default Ember.Component.extend({
  answeringQuestion: false,
  actions: {
    showAnswerForm() {
      this.set('answeringQuestion', true);
    },
    answerQuestion() {
      var params = {
        content: this.get('content'),
        question: this.get('question'),
        author: this.get('author')
      };
      this.set('answeringQuestion', false);
      this.sendAction('answerQuestion', params);
    }
  }
});
