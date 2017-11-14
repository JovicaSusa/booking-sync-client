import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const { computed } = Ember;

export default Model.extend({
  clientEmail: attr('string'),
  startAt:     attr('utc'),
  endAt:       attr('utc'),
  price:       attr('number'),

  rental: belongsTo(),

  period: computed('startAt', 'endAt', function() {
    const { endAt, startAt } = this.getProperties('startAt', 'endAt');

    return endAt.diff(startAt, 'days');
  })
});
