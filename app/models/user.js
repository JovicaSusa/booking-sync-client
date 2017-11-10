import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  passwordConfirmation: attr('string'),
  password: attr('string'),
  username: attr('string')
});
