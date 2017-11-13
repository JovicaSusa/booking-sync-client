export default function validateOverlap() {
  return (key, newValue, oldValue, changes, content) => {
    const possibleOverlap = content.get('rental.bookings').
      filter( booking => !booking.get('isNew')).
      any( booking => newValue.isBetween(booking.get('startAt'), booking.get('endAt')));

    if(possibleOverlap) {
      return 'rental is already booked on this dates';
    } else {
      return true;
    }
  };
}
