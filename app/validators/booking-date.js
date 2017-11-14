import { validatePresence } from 'ember-changeset-validations/validators';
import validateOverlap from './validate-overlap';
import validateBookingPeriod from './booking-period';

export default {
  startAt: [
    validateOverlap(),
    validateBookingPeriod()
  ],
  endAt: [
    validateOverlap(),
    validateBookingPeriod(),
  ],
  clientEmail: validatePresence(true),
  price: validatePresence(true)
}
