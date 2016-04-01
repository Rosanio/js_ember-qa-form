import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    answerQuestion(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.refresh();
    },
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key].length>0) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.refresh();
    },
    destroyQuestion(question) {
      if(confirm("Are you sure?")) {
        var answerDeletions = question.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answerDeletions).then(function() {
          return question.destroyRecord();
        });
        this.transitionTo('index');
      }
    },
    upvote(question, params) {
      question.set('upvotes', params['upvotes']);
      question.save();
      this.refresh();
    },
    downvote(question, params) {
      question.set('downvotes', params['downvotes']);
      question.save();
      this.refresh();
    }
  }
});
