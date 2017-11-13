export default function validateBookingLength(/*options ={} */) {
  return (key, newValue, oldValue, changes/*, content */) => {
    const changesArray = Object.keys(changes);
    let bookingLength = null;

    if (changesArray.includes('startAt')) {
      bookingLength = newValue.diff(changes.startAt, 'days')
    } else if (changesArray.includes('endAt')) {
      bookingLength = changes.endAt.diff(newValue, 'days');
    } else {
      return true;
    }

    if (bookingLength >= 1) {
      return true;
    } else {
      return 'booking period must be at least one night/day'
    }
  };
}
