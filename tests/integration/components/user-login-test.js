import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-login', 'Integration | Component | user login', {
  integration: true
});

test('it triggers external action on form submit', function(assert) {
  assert.expect(1);

  const loginModel = Ember.Object.create();
  const externalAction = (loginArgs) => {
    assert.deepEqual(loginArgs._content, loginModel,
      'user arg is passed to external action');
  };

  this.set('loginModel', loginModel);
  this.set('externalAction', externalAction);

  this.render(hbs`{{user-login loginModel=loginModel login=externalAction}}`);

  this.$('[data-test-login-username]').val('john').change();
  this.$('[data-test-login-password]').val('pa33word').change();

  this.$('[data-test-login-button]').click();
});
