import Ember from 'ember';

const { Component, observer, isEmpty } = Ember;

export default Component.extend({
  centerForStart: moment(),
  centerForEnd: moment(),

  setPrice: observer('booking.{startAt,endAt}', function() {
    const { startAt, endAt } = this.get('booking').
      getProperties('startAt', 'endAt');

    if (isEmpty(startAt) || isEmpty(endAt)) {
      return;
    } else {
      const dailyRate = this.get('booking.rental.dailyRate'),
        bookingDays   = endAt.diff(startAt, 'days'),
        price         = bookingDays * dailyRate;

      this.set('booking.price', price);
    }
  }),

  actions: {
    handleSubmit() {
      const booking = this.get('booking');

      this.get('save')(booking);
    }
  }
});
