import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup');
  this.route('login');
  this.route('admin');

  this.route('rentals', function() {
    this.route('new');
    this.route('rental', { path: '/:rental_id' }, function() {
      this.route('edit');
      this.route('book');
      this.route('show');
    });
  });
  this.route('booking', { path: '/:booking_id' }, function() {
    this.route('edit');
  });
});

export default Router;
