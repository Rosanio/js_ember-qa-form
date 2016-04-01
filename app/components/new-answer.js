import Ember from 'ember';

export default Ember.Component.extend({
  answeringQuestion: false,
  actions: {
    showAnswerForm() {
      this.set('answeringQuestion', true);
    },
    answerQuestion() {
      if(this.get('content')!==undefined && this.get('author')!==undefined) {
        if(this.get('content').length>0 && this.get('author').length > 0) {
          var params = {
            content: this.get('content'),
            question: this.get('question'),
            author: this.get('author')
          };
          this.sendAction('answerQuestion', params);
        }
      }
      this.set('answeringQuestion', false);
    }
  }
});
