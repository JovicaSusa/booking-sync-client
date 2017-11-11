import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import UserLoginValidations from '../validators/user-login';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    const loginModel = this.get('loginModel');
    const changeset = new Changeset(loginModel,
      lookupValidator(UserLoginValidations), UserLoginValidations);

    this.set('changeset', changeset);
  },

  actions: {
    handleClick() {
      const changeset = this.get('changeset');

      changeset.validate().
        then(() => {
          if (changeset.get('isValid')) {
            this.get('login')(changeset);
          }
        });
    }
  }
});
