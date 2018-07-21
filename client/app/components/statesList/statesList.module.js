import angular from 'angular'
import statesListComponent from './statesList.component'
import geoService from '../../services/geo/geo';

const statesListModule = angular.module('statesList', [])
  .component('statesList', statesListComponent)
  .service('geoService', geoService)
export default statesListModule
