import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import RentalValidations from '../validators/rental';

export default Ember.Component.extend({
  tagName: 'form',

  init() {
    this._super(...arguments);

    const rental = this.get('rental');
    const changeset = new Changeset(rental,
      lookupValidator(RentalValidations),
      RentalValidations);
    this.set('changeset', changeset);
  },

  actions: {
    handleSubmit() {
      const changeset = this.get('changeset');

      changeset.validate().
        then(() => {
          if (changeset.get('isValid')) {
            this.get('onSubmit')(changeset);
          }
        });
    }
  }
});
