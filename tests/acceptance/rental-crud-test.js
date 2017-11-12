import { test } from 'qunit';
import moduleForAcceptance from 'booking-sync-client/tests/helpers/module-for-acceptance';
import { authenticateSession } from '../helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | rental crud');

test('admin can create rental', function(assert) {
  assert.expect(1);

  const user = server.create('user');
  authenticateSession(this.application, { user_id: user.id });
  visit('/admin');

  andThen(() => {
    click(find('[data-test-new-rental-link]'))
  });

  andThen(() => {
    fillIn(find('[data-test-rental-name]'), 'Test Rental');
    fillIn(find('[data-test-rental-daily-rate]'), 10);
  });

  andThen(() => click(find('[data-test-create-rental-button]')));

  andThen(() => {
    assert.equal(find('[data-test-rental-item]').length, 1,
      'should display new rental');
  });
});

test('admin can update rental', function(assert) {
  assert.expect(1);

  const user = server.create('user');
  server.create('rental');
  authenticateSession(this.application, { user_id: user.id });
  visit('/admin');

  andThen(() => {
    click(find('[data-test-edit-rental-link]'))
  });

  andThen(() => {
    fillIn(find('[data-test-rental-name]'), 'Updated Rental');
  });

  andThen(() => click(find('[data-test-edit-rental-button]')));

  andThen(() => {
    assert.equal(server.db.rentals.find(1).name, 'Updated Rental');
  });
});
