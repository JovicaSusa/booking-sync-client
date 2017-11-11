import { test } from 'qunit';
import moduleForAcceptance from 'booking-sync-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user signup');

test('user can successfuly sign up', function(assert) {
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
