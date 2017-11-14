export default function validateBookingPeriod(/*options ={} */) {
  return (key, newValue, oldValue, changes/*, content */) => {
    const changesArray = Object.keys(changes);
    let bookingPeriod = null;

    if (changesArray.includes('startAt') && key === 'endAt') {
      bookingPeriod = newValue.diff(changes.startAt, 'days')
    } else if (changesArray.includes('endAt') && key === 'startAt') {
      bookingPeriod = changes.endAt.diff(newValue, 'days');
    } else {
      return true;
    }

    if (bookingPeriod >= 1) {
      return true;
    } else {
      return 'booking period must be at least one night/day'
    }
  };
}
