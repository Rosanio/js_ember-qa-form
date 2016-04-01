import Ember from 'ember';

export default Ember.Component.extend({
  editingQuestion: false,
  actions: {
    showEditQuestionForm() {
      this.set('editingQuestion', true);
    },
    editQuestion(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        additionalNotes: this.get('notes')
      };
      this.set('editingQuestion', false);
      this.sendAction('editQuestion', question, params);
    }
  }
});
