import {
  validatePresence,
  validateConfirmation
} from 'ember-changeset-validations/validators';

export default {
  username: validatePresence(true),
  password: validatePresence(true),
  passwordConfirmation: [
    validatePresence(true),
    validateConfirmation({ on: 'password' })
  ]
}
