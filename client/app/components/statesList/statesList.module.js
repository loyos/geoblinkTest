import angular from 'angular'
import statesListComponent from './statesList.component'

const statesListModule = angular.module('statesList', [])
  .component('statesList', statesListComponent)
export default statesListModule
