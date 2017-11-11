import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('user-signup', 'Integration | Component | user signup', {
  integration: true
});

test('it triggers external action on form submit', function(assert) {
  assert.expect(1);

  const user = Ember.Object.create();
  const externalAction = (userArg) => {
    assert.deepEqual(userArg._content, user, 'user arg is passed to external action');
  };

  this.set('user', user);
  this.set('externalAction', externalAction);

  this.render(hbs`{{user-signup user=user signUp=externalAction}}`);

  this.$('[data-test-signup-username]').val('john').change();
  this.$('[data-test-signup-password]').val('pa33word').change();
  this.$('[data-test-signup-password-confirmation]').val('pa33word').change();

  this.$('[data-test-signup-button]').click();
});
