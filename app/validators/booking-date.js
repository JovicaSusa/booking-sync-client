import { validatePresence } from 'ember-changeset-validations/validators';
import validateOverlap from './validate-overlap';
import validateBookingLength from './booking-length';

export default {
  startAt: [
    validateOverlap(),
    validateBookingLength()
  ],
  endAt: [
    validateOverlap(),
    validateBookingLength(),
  ],
  clientEmail: validatePresence(true),
  price: validatePresence(true)
}
