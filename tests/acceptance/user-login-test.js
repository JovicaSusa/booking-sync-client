import { test } from 'qunit';
import moduleForAcceptance from 'booking-sync-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user login');

test('successfuly login user with valid credentials', function(assert) {
  assert.expect(1);

  server.create('user', { username: 'john', password: 'pa33word' })

  visit('/');

  andThen(() => click(find('[data-test-login-link]')) );

  andThen(() => {
    fillIn(find('[data-test-login-username]'), 'john');
    fillIn(find('[data-test-login-password]'), 'pa33word');

    click(find('[data-test-login-button]'));
  });

  andThen(() => assert.equal(currentURL(), '/admin') );
});

test('login fails when invalid credentials', function(assert) {
  assert.expect(1);

  server.create('user', { username: 'peter', password: 'pa33word' })

  visit('/');

  andThen(() => click(find('[data-test-login-link]')) );

  andThen(() => {
    fillIn(find('[data-test-login-username]'), 'john');
    fillIn(find('[data-test-login-password]'), 'pa33word');

    click(find('[data-test-login-button]'));
  });

  andThen(() => assert.equal(currentURL(), '/login') );
});
