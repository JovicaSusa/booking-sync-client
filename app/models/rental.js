import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  dailyRate: attr('number'),
  name:      attr('string'),

  bookings: hasMany()
});
