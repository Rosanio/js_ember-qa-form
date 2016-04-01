import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  pic: DS.attr(),
  questions: DS.hasMany('question', { async: true }),
  answers: DS.hasMany('answer', { async: true }),
});
