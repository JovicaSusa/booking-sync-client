import Ember from 'ember';

export default function validateOverlap() {
  return (key, newValue, oldValue, changes, content) => {
    const changesArray = Object.keys(changes);
    const bookingsWithPossibleOverlap = Ember.A(content.get('rental.bookings').
      filter( booking => !booking.get('isNew')));
    let possibleOverlap = false;

    if (changesArray.includes('startAt') && key === 'endAt') {
      possibleOverlap = bookingsWithPossibleOverlap.
        any( booking => {
          return changes.startAt > booking.get('startAt') &&
            changes.startAt < booking.get('endAt') ||
            booking.get('startAt') > changes.startAt &&
            booking.get('startAt') < newValue;
        });
    } else if (changesArray.includes('endAt') && key === 'startAt') {
      possibleOverlap = bookingsWithPossibleOverlap.
        any( booking => {
          return newValue > booking.get('startAt') &&
            newValue < booking.get('endAt') ||
            booking.get('startAt') > newValue &&
            booking.get('startAt') < changes.endAt;
        });
    } else {
      return true;
    }

    if(possibleOverlap) {
      return 'rental is already booked on this dates';
    } else {
      return true;
    }
  };
}
