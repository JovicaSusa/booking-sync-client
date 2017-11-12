import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { inject: { service }, Route } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  session: service(),

  setupController(controller, model) {
    this._super(...arguments);

    controller.set('session', this.get('session'));
  },

  actions: {
    logout() {
      this.get('session').invalidate().
        then(() => this.transitionTo('index'));
    }
  }
});
