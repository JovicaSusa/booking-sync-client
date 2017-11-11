import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import UserSignupValidations from '../validators/user-signup';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    const user = this.get('user');
    const changeset = new Changeset(user,
      lookupValidator(UserSignupValidations),
      UserSignupValidations);
    this.set('changeset', changeset);
  },

  actions: {
    handleClick() {
      const changeset = this.get('changeset');

      changeset.validate().
        then(() => {
          if (changeset.get('isValid')) {
            this.get('signUp')(changeset);
          }
        });
    }
  }
});
