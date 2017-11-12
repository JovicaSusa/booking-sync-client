import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { startMirage } from '../../../initializers/ember-cli-mirage';

moduleForComponent('rental-form', 'Integration | Component | rental form', {
  integration: true,
  beforeEach() {
    this.server = startMirage();
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  const rental = server.create('rental');
  const externalAction = (rentalArg) => {
    assert.deepEqual(rentalArg, rental, 'rental is passed to external action');
  };

  this.set('rental', rental);
  this.set('externalAction', externalAction);

  this.render(hbs`{{rental-form rental=rental onSubmit=externalAction}}`);

  this.$('[data-test-rental-name]').val('Test Rental').change();
  this.$('[data-test-signup-daily-rate]').val('10').change();

  this.$('[data-test-rental-submit]').click();
});
