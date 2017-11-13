import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  clientEmail: attr('string'),
  startAt:     attr('date'),
  endAt:       attr('date'),
  price:       attr('number'),

  rental: belongsTo()
});
