import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import BookingDateValidations from '../validators/booking-date';

const { Component, observer, isEmpty } = Ember;

export default Component.extend({
  centerForStart: moment(),
  centerForEnd: moment(),

  init() {
    this._super(...arguments);

    const booking = this.get('booking');
    const changeset = new Changeset(booking,
      lookupValidator(BookingDateValidations),
      BookingDateValidations);
    this.set('changeset', changeset);
  },

  setPrice: observer('changeset.{startAt,endAt}', function() {
    const { startAt, endAt } = this.get('changeset').
      getProperties('startAt', 'endAt');

    if (isEmpty(startAt) || isEmpty(endAt)) {
      return;
    } else {
      const dailyRate = this.get('changeset.rental.dailyRate'),
        bookingDays   = endAt.diff(startAt, 'days'),
        price         = bookingDays * dailyRate;

      this.set('changeset.price', price);
    }
  }),

  actions: {
    handleSubmit() {
      const changeset = this.get('changeset');

      changeset.validate().
        then(() => {
          if (changeset.get('isValid')) {
            this.get('save')(changeset);
          }
        });
    }
  }
});
