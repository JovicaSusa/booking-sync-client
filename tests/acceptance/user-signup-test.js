import { test } from 'qunit';
import moduleForAcceptance from 'booking-sync-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user signup');

test('user can successfuly sign up', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => click(find('[data-test-signup-link]')) );

  andThen(() => {
    fillIn(find('[data-test-signup-username]'), 'john');
    fillIn(find('[data-test-signup-password]'), 'pa33word');
    fillIn(find('[data-test-signup-password-confirmation]'), 'pa33word');

    click(find('[data-test-signup-button]'));
  });

  andThen(() => assert.equal(currentURL(), '/') );
});

test('user can not sign up when there are errors', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => click(find('[data-test-signup-link]')) );

  andThen(() => {
    fillIn(find('[data-test-signup-password]'), 'pa33word');
    fillIn(find('[data-test-signup-password-confirmation]'), 'pa33word');

    click(find('[data-test-signup-button]'));
  });

  andThen(() => {
    assert.ok(find('[data-test-signup-errors]').length,
      'errors should be displayed');
  });
});
