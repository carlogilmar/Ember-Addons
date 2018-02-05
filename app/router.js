import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('table');
  this.route('validate');
  this.route('check');
  this.route('component');
});

export default Router;
