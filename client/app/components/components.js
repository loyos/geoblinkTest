import angular from 'angular'
import StatesListModule from './statesList/statesList.module'

const ComponentsModule = angular.module('app.components', [
  StatesListModule.name
])

export default ComponentsModule
