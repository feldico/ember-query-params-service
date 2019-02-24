import Application from '@ember/application';
import QueryParamsService from 'ember-query-params-service/src/services/query-params';

export function initialize(application: Application): void {
  // application.inject('route', 'foo', 'service:foo');
  application.register('service:queryParams', QueryParamsService);
}

export default {
  initialize
};
