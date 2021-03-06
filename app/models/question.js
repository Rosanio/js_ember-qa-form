import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  additionalNotes: DS.attr(),
  upvotes: DS.attr(),
  downvotes: DS.attr()
});
