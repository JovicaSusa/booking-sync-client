import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  dailyRate: validatePresence(true),
  name: validatePresence(true)
}
