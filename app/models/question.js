import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.belongsTo('user', { async: true }),
  answers: DS.hasMany('answer', { async: true }),
  additionalNotes: DS.attr()
});
